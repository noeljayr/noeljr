"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem("mv-theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Section observer for nav active state
    const sections = ["work", "about", "process", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      const targetEl = document.querySelector(href);
      if (!targetEl) return;

      e.preventDefault();
      setMenuOpen(false);
      document.body.classList.remove("menu-open");

      const reducedMotion = matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      targetEl.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    // Keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const toggleTheme = () => {
    const willBeDark = !isDark;
    setIsDark(willBeDark);
    document.documentElement.classList.toggle("dark", willBeDark);
    localStorage.setItem("mv-theme", willBeDark ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        style={{
          backdropFilter: "blur(5px)",
        }}
        className="nav [-webkit-backdrop-filter:blur(5px)]"
        id="nav"
      >
        <a className="brand" href="#top">
          Noel
        </a>
        <div className="nav-links">
          <a href="#work" className={activeSection === "work" ? "on" : ""}>
            Work
          </a>
          <a href="#about" className={activeSection === "about" ? "on" : ""}>
            About
          </a>
          <a
            href="#process"
            className={activeSection === "process" ? "on" : ""}
          >
            Process
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "on" : ""}
          >
            Contact
          </a>
        </div>
        <div className="nav-right">
          <button
            className="inv"
            id="invert"
            type="button"
            aria-label="Invert color scheme"
            title="Invert"
            onClick={toggleTheme}
          ></button>
          <button
            className="burger"
            id="burger"
            type="button"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="menu" id="menu">
        <a href="#work">
          <span className="mono">01</span>Work
        </a>
        <a href="#about">
          <span className="mono">02</span>About
        </a>
        <a href="#process">
          <span className="mono">03</span>Process
        </a>
        <a href="#contact">
          <span className="mono">05</span>Contact
        </a>
      </div>
    </>
  );
}
