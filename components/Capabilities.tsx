"use client";

import { useState, useRef, useEffect } from "react";

const CAPS = [
  {
    t: "Product Strategy",
    d: "Turning a fuzzy ambition into a sequenced plan. Workshops nobody dreads, a defensible wedge, and a roadmap honest about what it costs.",
    c: [
      "Discovery sprints",
      "Opportunity mapping",
      "Roadmap design",
      "North-star metrics",
    ],
  },
  {
    t: "UX Architecture",
    d: "Structure before pixels. Information architecture and mental models that survive contact with edge cases — because that's where users live.",
    c: [
      "IA & navigation",
      "User flows",
      "Content models",
      "Accessibility audits",
    ],
  },
  {
    t: "Interface Design",
    d: "High-craft screens with an opinion about hierarchy and restraint. Designed in the browser early, in grayscale until color is earned.",
    c: ["UI design", "Interaction states", "Motion specs", "Design QA"],
  },
  {
    t: "Design Systems",
    d: "Tokens, components and — the hard part — governance. Built to be boring, documented to be used, versioned to be trusted.",
    c: [
      "Token architecture",
      "Component libraries",
      "Guidelines",
      "Multi-platform sync",
    ],
  },
  {
    t: "Prototyping & Research",
    d: "Prototypes as arguments: coded or high-fidelity, tested with real users, revised without sentiment. Wrong in week two beats wrong at launch.",
    c: ["Figma", "Coded prototypes", "Usability testing", "MVP"],
  },
];

export default function Capabilities() {
  const [openIndex, setOpenIndex] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set initial max-height for the first item
    if (panelRefs.current[0]) {
      panelRefs.current[0].style.maxHeight = `${panelRefs.current[0].scrollHeight}px`;
    }
  }, []);

  const toggleItem = (index: number) => {
    if (openIndex === index) {
      // Close current
      if (panelRefs.current[index]) {
        panelRefs.current[index]!.style.maxHeight = "0";
      }
      setOpenIndex(-1);
    } else {
      // Close all
      panelRefs.current.forEach((panel) => {
        if (panel) panel.style.maxHeight = "0";
      });
      // Open new
      if (panelRefs.current[index]) {
        panelRefs.current[index]!.style.maxHeight =
          `${panelRefs.current[index]!.scrollHeight}px`;
      }
      setOpenIndex(index);
    }
  };

  return (
    <section
      id="capabilities"
      style={{ paddingTop: 0 }}
      aria-labelledby="capabilities-heading"
    >
      <div className="wrap">
        <div className="shead io">
          <h2 id="capabilities-heading" className="heading">
            Capabilities
          </h2>
          <span className="subheading">Five disciplines</span>
        </div>
        <div id="capList" role="list">
          {CAPS.map((cap, i) => (
            <div
              key={i}
              className={`cap-item${openIndex === i ? " open" : ""}`}
            >
              <button
                className="cap-head"
                aria-expanded={openIndex === i}
                data-hover=""
                onClick={() => toggleItem(i)}
              >
                <span className="mono dim" style={{ letterSpacing: ".14em" }}>
                  0{i + 1}
                </span>
                <h3>{cap.t}</h3>
                <span className="cap-plus">+</span>
              </button>
              <div
                className="cap-panel"
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
              >
                <div className="cap-body">
                  <p>{cap.d}</p>
                  <ul>
                    {cap.c.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
