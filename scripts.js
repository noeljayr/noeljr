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
      role: "Founding Designe",
      period: "2026 — Present",
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
      img: "./public/projects/kin/kin-cover.png",
      images: ["./public/projects/kin/1.png", "./public/projects/kin/2.png"],
      link: "/projects/kin/",
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
        "Timvane Capital solves a market gap: Malawi's salaried workers, traders, and small business owners need credit but lack traditional banking relationships. The platform accepts what they already own — phones, vehicles, land, salary — as collateral, with loan-to-value ratios calibrated for local asset volatility.",
        "Every fee is disclosed upfront. Reducing-balance interest means early repayment cuts total cost. The system processes applications through five stages — apply, assess, approve, secure, fund — with compliance baked into every approval tier. Currently operational with multi-channel repayment and credit bureau integration.",
      ],
      metrics: [
        ["−52%", "Charting time"],
        ["Active", "Current status"],
        ["90%", "Complete"],
      ],
      img: "./public/projects/timvane/timvane-cover.png",
      images: [
        "./public/projects/timvane/1.png",
        "./public/projects/timvane/2.png",
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
        "An AI-powered exam prep platform aligning quiz content with MANEB and IGCSE syllabuses — turning fragmented study materials into adaptive learning paths.",
      body: [
        "Sygenius addresses preparation gaps for students sitting dual-track exams in Malawi: local MANEB and international IGCSE syllabuses have overlapping content but distinct question styles. The platform uses AI to analyze user performance patterns and surface syllabus-aligned questions where comprehension is weakest, converting passive review into targeted practice.",
        "The design balances gamification mechanics (leaderboards, weekly prizes, streak tracking) with pedagogical structure — AI-generated supplementary notes contextualize wrong answers rather than just marking them incorrect.",
      ],
      metrics: [
        ["+100", "Screens"],
        ["+500", "Students"],
        ["100%", "Complete"],
      ],
      img: "./public/projects/sygenius/cover.png",
      images: [
        "./public/projects/sygenius/1.png",
        "./public/projects/sygenius/2.png",
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
        "An e-commerce platform connecting Malawian farmers directly to buyers — bridging the gap between local agriculture and household demand through structured logistics.",
      body: [
        "Lehazin addresses distribution friction in Malawi's agricultural supply chain. Farmers lack direct market access; households and restaurants lack reliable sourcing for local produce. The platform intermediates: farmers list inventory, buyers order by category (raw or processed), and fulfillment runs through a hub model that maintains cold chain integrity.",
        "The system handles three buyer segments — households, restaurants, and bulk business orders — with pricing and delivery SLA differentiated by volume. Built on a transactional model with supplier onboarding, inventory sync, and multi-channel payment integration. Revenue model combines transaction fees and premium supplier placement.",
      ],
      metrics: [
        ["+1K", "Sales"],
        ["MWK 250K", "Revenue"],
        ["+200", "Customers"],
      ],
      img: "./public/projects/lehazin/cover.png",
      images: [
        "./public/projects/lehazin/1.png",
        "./public/projects/lehazin/2.png",
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
        "A youth-led social enterprise building affordable assistive learning technologies for visually impaired students in Malawi — where imported solutions cost more than families earn annually.",
      body: [
        "Goldilocks started from a resource constraint: assistive technologies for visually impaired learners in Malawi are either unaffordable imports or nonexistent. The enterprise designs locally-manufactured learning tools — tactile materials, audio devices, adaptive interfaces — calibrated to classroom environments with inconsistent power and no repair infrastructure.",
        "The landing page needed to balance institutional credibility (for donor acquisition) with accessibility compliance (to reflect the mission). Typography scales fluidly, color ratios meet WCAG AA, and navigation works without vision. The site has supported partnerships with local schools and international recognition, translating impact metrics into continued funding.",
      ],
      metrics: [
        ["14→1", "Surfaces unified"],
        ["3w→2d", "New screen time"],
        ["128", "Components"],
      ],
      img: "./public/projects/goldilocks/cover.png",
      images: [
        "./public/projects/goldilocks/1.png",
        "./public/projects/goldilocks/2.png",
      ],
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
        "Figma",
        "Coded prototypes",
        "Usability testing",
        "MVP",
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
        pvImg.src = p.img;
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
    <figure class="case-img"><img src="${p.img}" alt="${p.title} primary interface"></figure>
    <div class="case-body"><p>${p.body[0]}</p><p>${p.body[1]}</p></div>
    <div class="metrics">${p.metrics.map((m) => `<div><b>${m[0]}</b><span>${m[1]}</span></div>`).join("")}</div>
    <div class="case-gal">
      <figure><img src="${p.images[0]}" alt="${p.title} detail" loading="lazy"></figure>
      <figure><img src="${p.images[1]}" alt="${p.title} detail" loading="lazy"></figure>
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
