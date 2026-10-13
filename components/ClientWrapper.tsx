"use client";

import { useEffect, useState, ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
  onToast: (message: string) => void;
  onOpenCase: (index: number) => void;
  onProjectHover: (img: string | null) => void;
}

export default function ClientWrapper({
  children,
  onToast,
  onOpenCase,
  onProjectHover,
}: ClientWrapperProps) {
  useEffect(() => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    // Word mask animation
    const wordElements = document.querySelectorAll("[data-words]");
    wordElements.forEach((el) => {
      const words = el.textContent?.trim().split(/\s+/) || [];
      el.innerHTML = words
        .map(
          (w, i) =>
            `<span class="wm"><span class="wi" style="transition-delay:${i * 60}ms">${w}</span></span>`
        )
        .join(" ");
    });

    // Intersection Observer for inview animations
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inview");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );

    document.querySelectorAll(".io, [data-words]").forEach((el) => {
      io.observe(el);
    });

    // Count animation observer
    const co = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          co.unobserve(entry.target);

          const el = entry.target as HTMLElement;
          const end = +(el.dataset.count || 0);
          const suf = el.dataset.suffix || "";

          if (reducedMotion) {
            el.textContent = end + suf;
            return;
          }

          const t0 = performance.now();
          const dur = 1500;

          const run = (t: number) => {
            const k = Math.min((t - t0) / dur, 1);
            el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
            if (k < 1) requestAnimationFrame(run);
          };

          requestAnimationFrame(run);
        }),
      { threshold: 0.6 }
    );

    document.querySelectorAll("[data-count]").forEach((c) => co.observe(c));

    // Cursor hover states
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById("cursor");
      if (!cursor) return;

      cursor.classList.add("on");
      const isBig = !!(e.target as HTMLElement).closest(
        "a,button,[data-hover],input,textarea,.row"
      );
      cursor.classList.toggle("big", isBig);
    };

    const handleMouseLeave = () => {
      const cursor = document.getElementById("cursor");
      cursor?.classList.remove("on");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Listen for custom case open events
    const handleOpenCase = ((e: CustomEvent) => {
      onOpenCase(e.detail);
    }) as EventListener;

    window.addEventListener("openCase", handleOpenCase);

    return () => {
      io.disconnect();
      co.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("openCase", handleOpenCase);
    };
  }, [onOpenCase]);

  return <>{children}</>;
}
