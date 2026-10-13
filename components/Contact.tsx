"use client";

import { useState, useRef, FormEvent } from "react";

interface ContactProps {
  onToast?: (message: string) => void;
}

export default function Contact({ onToast }: ContactProps) {
  const [formStatus, setFormStatus] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("noeljayr01@gmail.com");
      setIsCopied(true);
      onToast?.("Email copied");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      onToast?.("Failed to copy");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const msg = (formData.get("message") as string)?.trim() || "";

    if (!name || !email || !msg) {
      setFormStatus("⚠ Name, email and message are required.");
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setFormStatus("⚠ That email doesn't look right.");
      return;
    }

    const btn = form.querySelector(".submit") as HTMLButtonElement;
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending…";
    }

    const reducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const delay = reducedMotion ? 200 : 1100;

    setTimeout(() => {
      if (btn) {
        btn.innerHTML = '<i class="ti ti-check"></i> Sent';
      }
      const firstName = name.split(" ")[0];
      setFormStatus(`Thanks, ${firstName} — expect a reply within 48h.`);
      onToast?.("Inquiry sent");

      setTimeout(() => {
        form.reset();
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Send inquiry";
        }
        setFormStatus("");
      }, 3500);
    }, delay);
  };

  return (
    <section id="contact" className="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2
          style={{ paddingTop: "clamp(6rem, 15vw, 10rem)" }}
          className="io"
          data-words=""
        >
          Let's make it feel effortless.
        </h2>
        <div className="email-line io">
          <a href="mailto:noeljayr01@gmail.com">noeljayr01@gmail.com</a>
          <button
            className={`copy${isCopied ? " done" : ""}`}
            id="copyBtn"
            type="button"
            data-hover=""
            onClick={handleCopy}
          >
            {isCopied ? (
              <>
                <i className="ti ti-check"></i> Copied
              </>
            ) : (
              <>
                <i className="ti ti-copy"></i> Copy
              </>
            )}
          </button>
        </div>
        <div className="contact-grid">
          <div className="io">
            <span className="c-label">Elsewhere</span>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/noel-jr-luhanga-2890a5229/"
                data-hover=""
              >
                LinkedIn <i className="ti ti-arrow-up-right"></i>
              </a>
              <a
                href="https://contra.com/noel_jr_luhanga_ac4o5n7f?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=noel_jr_luhanga_ac4o5n7f"
                data-hover=""
              >
                Contra <i className="ti ti-arrow-up-right"></i>
              </a>
              <a href="https://www.instagram.com/noeljr_io/" data-hover="">
                Instagram <i className="ti ti-arrow-up-right"></i>
              </a>
            </div>
            <p className="address">
              Mzuzu,
              <br />
              Malawi
              <br />
            </p>
          </div>
          <form
            id="contactForm"
            className="io"
            noValidate
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="f-row">
              <div>
                <label className="c-label" htmlFor="fname">
                  Name
                </label>
                <input
                  id="fname"
                  name="name"
                  type="text"
                  required
                  placeholder="Ada Kowalski"
                />
              </div>
              <div>
                <label className="c-label" htmlFor="femail">
                  Email
                </label>
                <input
                  id="femail"
                  name="email"
                  type="email"
                  required
                  placeholder="ada@company.com"
                />
              </div>
            </div>
            <div>
              <label className="c-label" htmlFor="fmsg">
                The problem, roughly
              </label>
              <textarea
                id="fmsg"
                name="message"
                required
                placeholder="We have a workflow our customers describe as 'technically possible'…"
              ></textarea>
            </div>
            <button className="submit" type="submit" data-hover="">
              Send inquiry
            </button>
            <div className="form-status" id="formStatus" aria-live="polite">
              {formStatus}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
