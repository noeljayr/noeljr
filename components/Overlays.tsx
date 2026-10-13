"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "./Work";

interface OverlaysProps {
  previewImage: string | null;
  caseIndex: number | null;
  onCloseCase: () => void;
}

export default function Overlays({
  previewImage,
  caseIndex,
  onCloseCase,
}: OverlaysProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const previewPos = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  const project = caseIndex !== null ? PROJECTS[caseIndex] : null;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const isFine = matchMedia("(pointer: fine)").matches;
    const isRM = matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFine || isRM) return;

    const loop = () => {
      cursorPos.current.x += (mousePos.x - cursorPos.current.x) * 0.22;
      cursorPos.current.y += (mousePos.y - cursorPos.current.y) * 0.22;
      previewPos.current.x += (mousePos.x - previewPos.current.x) * 0.08;
      previewPos.current.y += (mousePos.y - previewPos.current.y) * 0.08;

      animFrameRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [mousePos]);

  useEffect(() => {
    if (caseIndex !== null) {
      lastFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const closeBtn = document.getElementById("caseClose");
        closeBtn?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
      if (lastFocusRef.current) {
        lastFocusRef.current.focus();
      }
    }
  }, [caseIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && caseIndex !== null) {
        onCloseCase();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [caseIndex, onCloseCase]);

  const handleNextCase = () => {
    if (caseIndex !== null) {
      const nextIndex = (caseIndex + 1) % PROJECTS.length;
      onCloseCase();
      setTimeout(() => {
        // Trigger opening the next case through parent
        const event = new CustomEvent("openCase", { detail: nextIndex });
        window.dispatchEvent(event);
      }, 100);
    }
  };

  return (
    <>
      {/* CURSOR */}
      <div
        className="cursor"
        id="cursor"
        aria-hidden="true"
        style={{
          transform: `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`,
        }}
      ></div>

      {/* FLOATING PREVIEW */}
      <div
        className={`preview${previewImage ? " on" : ""}`}
        id="preview"
        aria-hidden="true"
        style={{
          transform: `translate(${previewPos.current.x}px, ${previewPos.current.y}px) translate(26px, -36px)`,
        }}
      >
        <div className="pv-in">
          {previewImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img id="pvImg" src={previewImage} alt="" />
          )}
        </div>
      </div>

      {/* CASE STUDY OVERLAY */}
      <div
        className={`case${caseIndex !== null ? " open" : ""}`}
        id="caseModal"
        role="dialog"
        aria-modal="true"
        aria-label="Case study"
      >
        <div className="case-bar">
          <span className="mono dim" id="caseIdx">
            {caseIndex !== null
              ? `0${caseIndex + 1} / 0${PROJECTS.length}`
              : "01 / 06"}
          </span>
          <span className="mono dim" id="caseKicker">
            {project ? `${project.sector} — ${project.year}` : "Case study"}
          </span>
          <button
            className="case-close"
            id="caseClose"
            type="button"
            data-hover=""
            onClick={onCloseCase}
          >
            Close{" "}
            <b>
              <i className="ti ti-x"></i>
            </b>
          </button>
        </div>
        <div className="case-inner" id="caseInner">
          {project && (
            <>
              <div className="case-title-row">
                <h3>{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-live-btn"
                    data-hover=""
                  >
                    <span className="mono">Live Site</span>{" "}
                    <i className="ti ti-arrow-up-right"></i>
                  </a>
                )}
              </div>
              <div className="case-meta">
                <div>
                  <b>Role</b>
                  {project.role}
                </div>
                <div>
                  <b>Period</b>
                  {project.period}
                </div>
                <div>
                  <b>Team</b>
                  {project.team}
                </div>
                <div>
                  <b>Scope</b>
                  {project.scope}
                </div>
              </div>
              <p className="case-sum">{project.summary}</p>
              <figure className="case-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={`${project.title} primary interface`}
                />
              </figure>
              <div className="case-body">
                <p>{project.body[0]}</p>
                <p>{project.body[1]}</p>
              </div>
              <div className="metrics">
                {project.metrics.map((m, i) => (
                  <div key={i}>
                    <b>{m[0]}</b>
                    <span>{m[1]}</span>
                  </div>
                ))}
              </div>
              <div className="case-gal">
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.images[0]}
                    alt={`${project.title} detail`}
                    loading="lazy"
                  />
                </figure>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.images[1]}
                    alt={`${project.title} detail`}
                    loading="lazy"
                  />
                </figure>
              </div>
              <div className="case-next">
                <span className="mono dim">Next</span>
                <button id="caseNext" data-hover="" onClick={handleNextCase}>
                  {caseIndex !== null &&
                    PROJECTS[(caseIndex + 1) % PROJECTS.length].title}{" "}
                  <span>
                    <i className="ti ti-arrow-right"></i>
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
