(function () {
  "use strict";
  const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE = matchMedia("(pointer: fine)").matches;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  /* ---------- data ---------- */
  const PROJECTS = [
    {
      id: "kin",
      title: "Kin",
      sector: "Fintech",
      year: "2026",
      meta: "Research · Design · Development",
      role: "Founder & Solo Developer",
      period: "2026 — Now",
      team: "Solo",
      scope: "Mobile app + landing page",
      summary:
        "A finance tracker unifying transactions from three fragmented services into one structured interface — built from genuine friction.",
      body: [
        "KIN started with a personal problem: understanding monthly spending across Airtel Money, TNM Mpamba, and National Bank meant switching between three inboxes and parsing inconsistent message formats. The cognitive load made financial clarity feel like archaeology.",
        "The solution processes transaction messages into a clean view. Playful micro-animations ease navigation without compromising usability. The app reflects my product philosophy: spot a real problem, design a solution, ship it, then iterate.",
      ],
      metrics: [
        ["273", "Total downloads"],
        ["Active", "Current status"],
        ["3", "Banks supported"],
      ],
      img: "kin-transaction-hierarchy",
      images: ["kin-summary-animations", "kin-mobile-interface"],
      link: "https://example.com/kin",
    },
    {
      id: "vesper",
      title: "Vesper Health",
      sector: "Care Platform",
      year: "2024",
      meta: "Research · Mobile · Clinical",
      role: "Senior Product Designer",
      period: "2023 — 2024 · 9 months",
      team: "1 designer · 6 eng. · 2 clinicians",
      scope: "Patient app + console",
      summary:
        "A patient platform and clinician console designed for the ten-minute window where care decisions actually happen.",
      body: [
        "Vesper’s clinicians charted in corridors, tablets propped on medicine carts. Instead of a dashboard, we designed for interrupted attention: glancable patient lanes, one-thumb capture, and a handoff protocol that survives being interrupted mid-sentence.",
        "Research ran continuously — 34 contextual sessions across three clinics. The charting flow cut documentation time in half, which clinicians described, unprompted, as “getting evenings back.”",
      ],
      metrics: [
        ["−52%", "Charting time"],
        ["34", "Field sessions"],
        ["97%", "Handoff complete"],
      ],
      img: "vesper-health-clinical-app",
      images: ["vesper-patient-journey", "vesper-clinician-console"],
    },
    {
      id: "monoline",
      title: "Monoline",
      sector: "Design System",
      year: "2024",
      meta: "Systems · Tokens · Docs",
      role: "Systems Designer & Lead",
      period: "2023 · 6 months",
      team: "Solo + eng. guild",
      scope: "Tokens · components · governance",
      summary:
        "A logistics company’s design language rebuilt from the token up — now open-sourced and paying rent on team velocity.",
      body: [
        "Monoline’s fourteen product surfaces ranged from 2011-era jQuery to half-finished Material. We started with tokens as a governance contract: who may change a value, what breaks, who approves.",
        "Tokens compile to web, iOS and warehouse terminals from one source through CI. Documentation was written like product copy — because nobody reads docs that read like docs.",
      ],
      metrics: [
        ["14→1", "Surfaces unified"],
        ["3w→2d", "New screen time"],
        ["128", "Components"],
      ],
      img: "monoline-design-system-tokens",
      images: ["monoline-component-library", "monoline-docs-site"],
    },
    {
      id: "atlas",
      title: "Atlas Cartography",
      sector: "Data Viz",
      year: "2023",
      meta: "Dataviz · Mapping · Editorial",
      role: "Product Designer",
      period: "2022 — 2023 · 8 months",
      team: "2 designers · 4 engineers",
      scope: "Viz language + explorer",
      summary:
        "A mapping platform’s visualization language — turning a firehose of geospatial data into decisions a planner can defend.",
      body: [
        "Atlas had extraordinary data and illegible charts. We rebuilt the grammar on three principles: monochrome by default with color reserved for meaning, density that rewards zoom, and annotations as first-class objects.",
        "Analysts compose layers like slides in an argument — every map is publishable, exportable, and reproducible by URL.",
      ],
      metrics: [
        ["11", "Chart primitives"],
        ["+64%", "Report exports"],
        ["2.1s", "Query → view"],
      ],
      img: "atlas-dataviz-mapping",
      images: ["atlas-glyph-system", "atlas-print-atlas"],
    },
    {
      id: "fieldnote",
      title: "Fieldnote",
      sector: "AI Research Tool",
      year: "2023",
      meta: "AI · Prototyping · 0→1",
      role: "Founding Designer",
      period: "2022 · 5 months",
      team: "1 designer · 3 engineers",
      scope: "Concept to launch",
      summary:
        "An AI-assisted research notebook that treats sources as evidence, not decoration — launched, acquired, still a favorite.",
      body: [
        "Fieldnote began as a gripe: research tools store text but lose the thread of why it mattered. We designed around claims and evidence — every highlight carries provenance, and the AI suggests connections it can cite.",
        "Prototypes were tested with 19 academics and journalists before production code existed. Launch hit Product Hunt #2; the company was acquired fourteen months later.",
      ],
      metrics: [
        ["#2", "Product Hunt day"],
        ["19", "Expert tests"],
        ["14 mo", "To acquisition"],
      ],
      img: "fieldnote-ai-research-notes",
      images: ["fieldnote-evidence-timeline", "fieldnote-citation-view"],
    },
    {
      id: "ledger",
      title: "Ledger POS",
      sector: "Retail",
      year: "2022",
      meta: "Hardware · Service · Touch",
      role: "Product Designer",
      period: "2021 — 2022 · 7 months",
      team: "1 designer · 5 engineers",
      scope: "Terminal UI + blueprint",
      summary:
        "A point-of-sale terminal for independent retail — designed for queues, gloves, and the moment the card reader fails.",
      body: [
        "Retail software is usually designed for the demo, not the Saturday rush. We built Ledger around the three worst minutes of a shop’s day: refunds without receipts, split payments, dead card readers.",
        "Tested in four live shops over six weeks — glove-friendly, graceful under 300ms of lag, and trainable in one shift. Measured, not claimed.",
      ],
      metrics: [
        ["41s", "Avg. transaction"],
        ["1 shift", "Onboarding"],
        ["4", "Pilot shops"],
      ],
      img: "ledger-retail-pos-terminal",
      images: ["ledger-kiosk-hardware", "ledger-receipt-design"],
    },
  ];

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
      d: "Structure before pixels. Information architecture and mental models that survive contact with edge cases — because that’s where users live.",
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
      c: [
        "Figma / Framer",
        "Coded prototypes",
        "Usability testing",
        "Synthesis",
      ],
    },
  ];

  /* ---------- work list ---------- */
  const workList = $("#workList");
  PROJECTS.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "row io";
    b.style.transitionDelay = i * 0.06 + "s";
    b.setAttribute("aria-label", "Open case study: " + p.title);
    b.innerHTML = `<span class="num">0${i + 1}</span><span class="row-title">${p.title}</span><span class="row-meta">${p.meta}</span><span class="row-arr"><i class="ti ti-arrow-right"></i></span>`;
    b.addEventListener("click", () => openCase(i));
    if (FINE && !RM) {
      b.addEventListener("mouseenter", () => {
        pvImg.src = `https://picsum.photos/seed/${p.img}/560/420`;
        preview.classList.add("on");
      });
      b.addEventListener("mouseleave", () => preview.classList.remove("on"));
    }
    workList.appendChild(b);
  });

  /* ---------- capabilities ---------- */
  const capList = $("#capList");
  CAPS.forEach((c, i) => {
    const el = document.createElement("div");
    el.className = "cap-item" + (i === 0 ? " open" : "");
    el.innerHTML = `<button class="cap-head" aria-expanded="${i === 0}" data-hover>
      <span class="mono dim" style="letter-spacing:.14em">0${i + 1}</span><h3>${c.t}</h3><span class="cap-plus">+</span></button>
    <div class="cap-panel"><div class="cap-body"><p>${c.d}</p><ul>${c.c.map((x) => `<li>${x}</li>`).join("")}</ul></div></div>`;
    capList.appendChild(el);
    // Set initial max-height for the first item
    if (i === 0) {
      const panel = el.querySelector(".cap-panel");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
  capList.addEventListener("click", (e) => {
    const head = e.target.closest(".cap-head");
    if (!head) return;
    const item = head.parentElement,
      panel = item.querySelector(".cap-panel");
    const isOpen = item.classList.contains("open");
    $$(".cap-item.open").forEach((o) => {
      o.classList.remove("open");
      o.querySelector(".cap-panel").style.maxHeight = null;
      o.querySelector(".cap-head").setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      item.classList.add("open");
      panel.style.maxHeight = panel.scrollHeight + "px";
      head.setAttribute("aria-expanded", "true");
    }
  });

  /* ---------- case modal ---------- */
  const modal = $("#caseModal"),
    caseInner = $("#caseInner");
  let lastFocus = null;
  function openCase(i) {
    const p = PROJECTS[i];
    lastFocus = document.activeElement;
    $("#caseIdx").textContent = `0${i + 1} / 0${PROJECTS.length}`;
    $("#caseKicker").textContent = p.sector + " — " + p.year;
    const liveButton = p.link
      ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="case-live-btn" data-hover><span class="mono">Live Site</span> <i class="ti ti-arrow-up-right"></i></a>`
      : "";
    caseInner.innerHTML = `
    <div class="case-title-row">
      <h3>${p.title}</h3>
      ${liveButton}
    </div>
    <div class="case-meta">
      <div><b>Role</b>${p.role}</div><div><b>Period</b>${p.period}</div>
      <div><b>Team</b>${p.team}</div><div><b>Scope</b>${p.scope}</div>
    </div>
    <p class="case-sum">${p.summary}</p>
    <figure class="case-img"><img src="https://picsum.photos/seed/${p.img}/1400/790" alt="${p.title} primary interface"></figure>
    <div class="case-body"><p>${p.body[0]}</p><p>${p.body[1]}</p></div>
    <div class="metrics">${p.metrics.map((m) => `<div><b>${m[0]}</b><span>${m[1]}</span></div>`).join("")}</div>
    <div class="case-gal">
      <figure><img src="https://picsum.photos/seed/${p.images[0]}/800/560" alt="${p.title} detail" loading="lazy"></figure>
      <figure><img src="https://picsum.photos/seed/${p.images[1]}/800/560" alt="${p.title} detail" loading="lazy"></figure>
    </div>
    <div class="case-next"><span class="mono dim">Next</span>
      <button id="caseNext" data-hover>${PROJECTS[(i + 1) % PROJECTS.length].title} <span><i class="ti ti-arrow-right"></i></span></button></div>`;
    $("#caseNext").addEventListener("click", () =>
      openCase((i + 1) % PROJECTS.length),
    );
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    $("#caseClose").focus();
  }
  function closeCase() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $("#caseClose").addEventListener("click", closeCase);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal.classList.contains("open")) closeCase();
      else document.body.classList.remove("menu-open");
    }
  });

  /* ---------- cursor + preview ---------- */
  const cursor = $("#cursor"),
    preview = $("#preview"),
    pvImg = $("#pvImg");
  let mx = innerWidth / 2,
    my = innerHeight / 2,
    cx = mx,
    cy = my,
    px = mx,
    py = my;
  addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.classList.add("on");
    cursor.classList.toggle(
      "big",
      !!e.target.closest("a,button,[data-hover],input,textarea,.row"),
    );
  });
  document.addEventListener("mouseleave", () => cursor.classList.remove("on"));
  (function loop() {
    if (FINE && !RM) {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      px += (mx - px) * 0.08;
      py += (my - py) * 0.08;
      cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      preview.style.transform = `translate(${px}px,${py}px) translate(26px,-36px)`;
    }
    requestAnimationFrame(loop);
  })();

  /* ---------- scramble ---------- */

  /* ---------- word mask ---------- */
  $$("[data-words]").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words
      .map(
        (w, i) =>
          `<span class="wm"><span class="wi" style="transition-delay:${i * 60}ms">${w}</span></span>`,
      )
      .join(" ");
  });

  /* ---------- observers ---------- */
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("inview");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  $$(".io, [data-words]").forEach((el) => io.observe(el));
  const co = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        co.unobserve(e.target);
        const el = e.target,
          end = +el.dataset.count,
          suf = el.dataset.suffix || "";
        if (RM) {
          el.textContent = end + suf;
          return;
        }
        const t0 = performance.now(),
          dur = 1500;
        (function run(t) {
          const k = Math.min((t - t0) / dur, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
          if (k < 1) requestAnimationFrame(run);
        })(t0);
      }),
    { threshold: 0.6 },
  );
  $$("[data-count]").forEach((c) => co.observe(c));

  /* nav active */
  const secIO = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting)
          $$(".nav-links a").forEach((a) =>
            a.classList.toggle(
              "on",
              a.getAttribute("href") === "#" + e.target.id,
            ),
          );
      }),
    { rootMargin: "-40% 0px -55% 0px" },
  );
  ["work", "about", "process", "contact"].forEach((id) => {
    const s = document.getElementById(id);
    if (s) secIO.observe(s);
  });

  /* ---------- nav ---------- */
  const nav = $("#nav");

  $$('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const t = document.querySelector(href);
      if (!t) return;
      e.preventDefault();
      document.body.classList.remove("menu-open");
      t.scrollIntoView({ behavior: RM ? "auto" : "smooth" });
    }),
  );

  /* ---------- menu / theme / clock ---------- */
  $("#burger").addEventListener("click", () =>
    document.body.classList.toggle("menu-open"),
  );
  if (localStorage.getItem("mv-theme") === "dark")
    document.documentElement.classList.add("dark");
  $("#invert").addEventListener("click", () => {
    const d = document.documentElement.classList.toggle("dark");
    localStorage.setItem("mv-theme", d ? "dark" : "light");
  });
  function tickClock() {
    const d = new Date(),
      p = (n) => String(n).padStart(2, "0");
    $("#clock").textContent =
      `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())} Local`;
  }
  tickClock();
  setInterval(tickClock, 1000);
  $("#year").textContent = new Date().getFullYear();

  /* ---------- copy + toast ---------- */
  const toast = $("#toast");
  let toastT;
  function showToast(m) {
    toast.textContent = m;
    toast.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => toast.classList.remove("show"), 2200);
  }
  $("#copyBtn").addEventListener("click", () => {
    navigator.clipboard
      .writeText("noeljayr01@gmail.com")
      .then(() => {
        const b = $("#copyBtn");
        b.innerHTML = '<i class="ti ti-check"></i> Copied';
        b.classList.add("done");
        showToast("Email copied");
        setTimeout(() => {
          b.innerHTML = '<i class="ti ti-copy"></i> Copy';
          b.classList.remove("done");
        }, 2000);
      })
      .catch(() => {
        showToast("Failed to copy");
      });
  });

  /* ---------- form ---------- */
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target,
      name = f.name.value.trim(),
      email = f.email.value.trim(),
      msg = f.querySelector("#fmsg").value.trim(),
      st = $("#formStatus");
    if (!name || !email || !msg) {
      st.textContent = "⚠ Name, email and message are required.";
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      st.textContent = "⚠ That email doesn’t look right.";
      return;
    }
    const btn = f.querySelector(".submit");
    btn.disabled = true;
    btn.textContent = "Sending…";
    setTimeout(
      () => {
        btn.innerHTML = '<i class="ti ti-check"></i> Sent';
        st.textContent =
          "Thanks, " + name.split(" ")[0] + " — expect a reply within 48h.";
        showToast("Inquiry sent");
        setTimeout(() => {
          f.reset();
          btn.disabled = false;
          btn.textContent = "Send inquiry";
          st.textContent = "";
        }, 3500);
      },
      RM ? 200 : 1100,
    );
  });
})();
