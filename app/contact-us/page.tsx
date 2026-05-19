"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Submit button ───────────────────────────────────────────── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <CraftHero
        title="Contact Us"
        bgImage="https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/HVAC-Maintenance-Program.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── 2-column: Form + Map ─────────────────────────────────── */}
      <div ref={sectionRef} className={`flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172" style={{ paddingTop: "6rem", paddingBottom: "8rem" }}>

          {/* Section header */}
          <div style={{ marginBottom: "4rem" }}>
            <h2
              className={`h3 fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Schedule Service or Ask a Question
            </h2>
            <p
              className={`p2 fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.15s", maxWidth: "60rem" }}
            >
              Fill out the form below or call us directly at{" "}
              <a href="tel:6464934904" className="ia-link"><strong>(646) 493-4904</strong></a>.
              We follow up fast — usually within the hour.
            </p>
          </div>

          {/*
            2-column grid: form (left) + map (right).
            align-items: stretch so both columns are the same height.
            The form is a flex column so the textarea can flex-grow to fill.
          */}
          <div
            className={`fadeInUpS wow${vis}`}
            style={{
              animationDelay: "0.2s",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "stretch",
            }}
          >
            {/* ── LEFT: Contact Form ── */}
            {/*
              TODO: Replace this form with Top HVAC NYC's preferred form solution
              (HubSpot, Gravity Forms, JotForm, Calendly embed, etc.)
            */}
            <form
              action="#"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.6rem",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.6rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="name" className="p3 ia-medium">Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your full name"
                    style={{ padding: "0.85rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    placeholder="(646) 000-0000"
                    style={{ padding: "0.85rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="email" className="p3 ia-medium">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    style={{ padding: "0.85rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                  <select
                    id="service" name="service"
                    style={{ padding: "0.85rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", background: "white" }}
                  >
                    <option value="">Select a service…</option>
                    <option>AC Repair</option>
                    <option>Heating Repair</option>
                    <option>AC Installation</option>
                    <option>Heating Installation</option>
                    <option>Ductless Mini Split</option>
                    <option>HVAC Maintenance</option>
                    <option>Indoor Air Quality</option>
                    <option>Maintenance Program</option>
                    <option>Emergency Service</option>
                    <option>Not Sure / Other</option>
                  </select>
                </div>
              </div>

              {/* Message — flex-grow: 1 so it fills remaining height and matches map */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1, minHeight: 0 }}>
                <label htmlFor="message" className="p3 ia-medium">Message</label>
                <textarea
                  id="message" name="message"
                  placeholder="Describe what's happening — system type, issue, and address if known."
                  style={{
                    padding: "0.85rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1.4rem",
                    resize: "none",
                    flex: 1,
                    minHeight: "12rem",
                  }}
                />
              </div>

              <div>
                <SubmitBtn />
              </div>
            </form>

            {/* ── RIGHT: Google Map ── */}
            {/* TODO: Replace embed with a Google Maps embed centered on Top HVAC NYC's address or Manhattan service area */}
            <div style={{ display: "flex", flexDirection: "column", minHeight: "48rem" }}>
              <iframe
                title="Top HVAC NYC Service Area — Manhattan, NYC"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48369.84!2d-73.9857!3d40.7580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                width="100%"
                style={{
                  border: 0,
                  display: "block",
                  borderRadius: "4px",
                  flex: 1,
                  minHeight: "48rem",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>{/* /.contact-layout-grid */}

          {/* ── Contact info strip ── */}
          <div
            className={`fadeInUpS wow${vis}`}
            style={{
              animationDelay: "0.3s",
              marginTop: "4rem",
              paddingTop: "3rem",
              borderTop: "1px solid #e8e8e8",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2.5rem",
            }}
          >
            <div>
              <div className="p3 ia-medium" style={{ marginBottom: "0.4rem" }}>Phone</div>
              <a href="tel:6464934904" className="ia-link p2" style={{ fontWeight: 600 }}>
                (646) 493-4904
              </a>
            </div>
            <div>
              <div className="p3 ia-medium" style={{ marginBottom: "0.4rem" }}>Service Area</div>
              <p className="p2" style={{ margin: 0 }}>All of Manhattan, NYC</p>
            </div>
            <div>
              <div className="p3 ia-medium" style={{ marginBottom: "0.4rem" }}>Hours</div>
              {/* TODO: Confirm business hours with client */}
              <p className="p2" style={{ margin: 0 }}>Mon–Fri 8am–6pm · Emergency 7 days</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile: stacked map below ─────────────────────────────── */}
      <style>{`
        @media (max-width: 767px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </main>
  );
}
