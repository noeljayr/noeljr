"use client";

import { useState, useEffect } from "react";

const PROJECTS = [
  {
    id: "kin",
    title: "Kin",
    sector: "Fintech",
    year: "2026",
    meta: "Research · Design · Development",
    role: "Founding Designer",
    period: "2026 — Present",
    team: "Solo",
    scope: "Mobile app + landing page",
    summary:
      "A finance tracker unifying transactions from three fragmented services into one structured interface, built from genuine friction.",
    body: [
      "KIN started with a personal problem: understanding monthly spending across Airtel Money, TNM Mpamba, and National Bank meant switching between three inboxes and parsing inconsistent message formats. The cognitive load made financial clarity feel like archaeology.",
      "The solution processes transaction messages into a clean view. Playful micro-animations ease navigation without compromising usability. The app reflects my product philosophy: spot a real problem, design a solution, ship it, then iterate.",
    ],
    metrics: [
      ["273", "Total downloads"],
      ["Active", "Current status"],
      ["3", "Banks supported"],
    ],
    img: "/projects/kin/kin-cover.png",
    images: ["/projects/kin/1.png", "/projects/kin/2.png"],
    link: "https://kin.noeljr.com/",
  },
  {
    id: "timvane",
    title: "Timvane Capital",
    sector: "Fintech",
    year: "2026",
    meta: "Finance · Systems · Loans",
    role: "Product Designer & Dev",
    period: "2026 — Present · 2 months",
    team: "Solo + 1 Compliance officer",
    scope: "System + Marketing",
    summary:
      "A secured personal loan platform turning assets into fast capital, built on transparent pricing and responsible lending for Malawi's everyday earners.",
    body: [
      "Timvane Capital solves a market gap: Malawi's salaried workers, traders, and small business owners need credit but lack traditional banking relationships. The platform accepts what they already own phones, vehicles, land, salary as collateral, with loan-to-value ratios calibrated for local asset volatility.",
      "Every fee is disclosed upfront. Reducing-balance interest means early repayment cuts total cost. The system processes applications through five stages: apply, assess, approve, secure, fund with compliance baked into every approval tier. Currently operational with multi-channel repayment and credit bureau integration.",
    ],
    metrics: [
      ["−52%", "Charting time"],
      ["Active", "Current status"],
      ["90%", "Complete"],
    ],
    img: "/projects/timvane/timvane-cover.png",
    images: [
      "/projects/timvane/1.png",
      "/projects/timvane/2.png",
    ],
  },
  {
    id: "sygenius",
    title: "Sygenius",
    sector: "Education",
    year: "2026",
    meta: "AI · Education · Design",
    role: "Product Designer",
    period: "2026 · 2 month",
    team: "1 designer · Teacher",
    scope: "Concept to design",
    summary:
      "An AI-powered exam prep platform aligning quiz content with MANEB and IGCSE syllabuses turning fragmented study materials into adaptive learning paths.",
    body: [
      "Sygenius addresses preparation gaps for students sitting dual-track exams in Malawi: local MANEB and international IGCSE syllabuses have overlapping content but distinct question styles. The platform uses AI to analyze user performance patterns and surface syllabus-aligned questions where comprehension is weakest, converting passive review into targeted practice.",
      "The design balances gamification mechanics (leaderboards, weekly prizes, streak tracking) with pedagogical structure, AI-generated supplementary notes contextualize wrong answers rather than just marking them incorrect.",
    ],
    metrics: [
      ["+100", "Screens"],
      ["+500", "Students"],
      ["100%", "Complete"],
    ],
    img: "/projects/sygenius/cover.png",
    images: [
      "/projects/sygenius/1.png",
      "/projects/sygenius/2.png",
    ],
  },
  {
    id: "lehazin",
    title: "Lehazin",
    sector: "E-commerce",
    year: "2026",
    meta: "Store · Payments · Agri-tech",
    role: "Product Designer & Dev",
    period: "2026 · 2 Months",
    team: "Solo",
    scope: "System + landing page",
    summary:
      "An e-commerce platform connecting Malawian farmers directly to buyers, bridging the gap between local agriculture and household demand through structured logistics.",
    body: [
      "Lehazin addresses distribution friction in Malawi's agricultural supply chain. Farmers lack direct market access; households and restaurants lack reliable sourcing for local produce. The platform intermediates: farmers list inventory, buyers order by category (raw or processed), and fulfillment runs through a hub model that maintains cold chain integrity.",
      "The system handles three buyer segments households, restaurants, and bulk business orders with pricing and delivery SLA differentiated by volume. Built on a transactional model with supplier onboarding, inventory sync, and multi-channel payment integration. Revenue model combines transaction fees and premium supplier placement.",
    ],
    metrics: [
      ["+1K", "Sales"],
      ["MWK 250K", "Revenue"],
      ["+200", "Customers"],
    ],
    img: "/projects/lehazin/cover.png",
    images: [
      "/projects/lehazin/1.png",
      "/projects/lehazin/2.png",
    ],
    link: "https://www.lehazin.com/",
  },
  {
    id: "goldilocks",
    title: "Goldilocks",
    sector: "Education",
    year: "2025",
    meta: "Website · Design · Accessibility",
    role: "Web Designer",
    period: "2025 · 3 Weeks",
    team: "Solo",
    scope: "Landing page design",
    summary:
      "A youth-led social enterprise building affordable assistive learning technologies for visually impaired students in Malawi where imported solutions cost more than families earn annually.",
    body: [
      "Goldilocks started from a resource constraint: assistive technologies for visually impaired learners in Malawi are either unaffordable imports or nonexistent. The enterprise designs locally-manufactured learning tools: tactile materials, audio devices, adaptive interfaces calibrated to classroom environments with inconsistent power and no repair infrastructure.",
      "The landing page needed to balance institutional credibility (for donor acquisition) with accessibility compliance (to reflect the mission). Typography scales fluidly, color ratios meet WCAG AA, and navigation works without vision. The site has supported partnerships with local schools and international recognition, translating impact metrics into continued funding.",
    ],
    metrics: [
      ["14→1", "Surfaces unified"],
      ["3w→2d", "New screen time"],
      ["128", "Components"],
    ],
    img: "/projects/goldilocks/cover.png",
    images: [
      "/projects/goldilocks/1.png",
      "/projects/goldilocks/2.png",
    ],
  },
];

interface WorkProps {
  onProjectHover?: (img: string | null) => void;
  onOpenCase?: (index: number) => void;
}

export default function Work({ onProjectHover, onOpenCase }: WorkProps) {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsFinePointer(matchMedia("(pointer: fine)").matches);
    setReducedMotion(matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const handleMouseEnter = (img: string) => {
    if (isFinePointer && !reducedMotion && onProjectHover) {
      onProjectHover(img);
    }
  };

  const handleMouseLeave = () => {
    if (isFinePointer && !reducedMotion && onProjectHover) {
      onProjectHover(null);
    }
  };

  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <div className="shead io">
          <h2 id="work-heading" className="heading">
            Works
          </h2>
          <span className="subheading">Some of my best projects</span>
        </div>
        <div className="work-list" id="workList" role="list">
          {PROJECTS.map((project, i) => (
            <button
              key={project.id}
              className="row io"
              style={{ transitionDelay: `${i * 0.06}s` }}
              aria-label={`Open case study: ${project.title}`}
              onClick={() => onOpenCase?.(i)}
              onMouseEnter={() => handleMouseEnter(project.img)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="num">0{i + 1}</span>
              <span className="row-title">{project.title}</span>
              <span className="row-meta">{project.meta}</span>
              <span className="row-arr">
                <i className="ti ti-arrow-right"></i>
              </span>
            </button>
          ))}
        </div>
        <div className="work-foot mono">
          <span>Archive &amp; NDA work on request</span>
          <span itemScope itemType="https://schema.org/ContactPoint">
            <a href="mailto:noeljayr01@gmail.com" itemProp="email">
              noeljayr01@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export { PROJECTS };
