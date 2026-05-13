"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

// FAQPage JSON-LD for rich snippet eligibility
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How quickly can you get here?",
      acceptedAnswer: { "@type": "Answer", text: "Same-day service is available across all of Manhattan. Call (646) 493-4904 for an accurate ETA. For HVAC emergencies we prioritize you." } },
    { "@type": "Question", name: "Do you give upfront pricing?",
      acceptedAnswer: { "@type": "Answer", text: "Always. We diagnose the issue, explain the solution, and give you the price before any work starts. What we quote is what you pay — period." } },
    { "@type": "Question", name: "What types of HVAC systems do you work on?",
      acceptedAnswer: { "@type": "Answer", text: "We service all major residential and commercial HVAC systems — central air, ductless mini splits, gas furnaces, heat pumps, boilers, and electric systems. All major brands including Carrier, Trane, Lennox, Rheem, Goodman, Bryant, Mitsubishi, and Daikin." } },
    { "@type": "Question", name: "How do I know if I need a repair or a full replacement?",
      acceptedAnswer: { "@type": "Answer", text: "We diagnose first and tell you honestly. If a repair is the smart move financially, that's what we recommend. If replacement is genuinely the better option, we'll show you the math." } },
    { "@type": "Question", name: "Do you service apartments, co-ops, and commercial buildings?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We work in Manhattan apartments, condos, co-ops, commercial spaces, and multi-unit buildings every day. We coordinate with building supers and property managers." } },
    { "@type": "Question", name: "What areas of Manhattan do you cover?",
      acceptedAnswer: { "@type": "Answer", text: "We serve all of Manhattan including Upper East Side, Upper West Side, Harlem, Washington Heights, Midtown, Chelsea, Gramercy, Greenwich Village, SoHo, Tribeca, Lower East Side, Financial District, and more." } },
    { "@type": "Question", name: "How often should I have my HVAC system serviced?",
      acceptedAnswer: { "@type": "Answer", text: "Twice a year is ideal — once before cooling season and once before heating season. Regular tune-ups extend equipment life and prevent breakdowns." } },
    { "@type": "Question", name: "Do you install ductless mini splits in older buildings?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — it's one of our most common jobs in Manhattan. Older pre-war buildings without central ductwork are well-suited for mini splits. We install Mitsubishi, Carrier, Daikin, and other major brands. Note: we do not install window AC units." } },
  ],
};

interface FaqItem {
  title: string;
  content: React.ReactNode;
  link?: { label: string; href: string };
}

const faqItems: FaqItem[] = [
  {
    title: "How quickly can you get here?",
    content: (
      <p>
        Same-day service is available across all of Manhattan. Call us at{" "}
        <a href="tel:6464934904" className="ia-link">(646) 493-4904</a>{" "}
        and we&apos;ll give you an accurate ETA on the spot. For HVAC emergencies —
        no heat in winter, no AC in a heat wave — we prioritize you.
      </p>
    ),
  },
  {
    title: "Do you give upfront pricing?",
    content: (
      <p>
        Always. We diagnose the issue, explain the solution in plain language, and
        give you the price before a single tool touches your system. No surprises,
        no upsells. What we quote is what you pay — period.
      </p>
    ),
  },
  {
    title: "What types of HVAC systems do you work on?",
    content: (
      <p>
        We service all major residential and commercial HVAC systems — central air,
        ductless mini splits, gas furnaces, heat pumps, boilers, and electric systems.
        We work on all major brands including Carrier, Trane, Lennox, Rheem, Goodman,
        Bryant, Mitsubishi, and Daikin.
      </p>
    ),
  },
  {
    title: "How do I know if I need a repair or a full replacement?",
    content: (
      <p>
        We&apos;ll tell you honestly. Our tech diagnoses the system first and explains
        exactly what&apos;s failing and why. If a repair is the smart move — financially
        and for the life of the equipment — that&apos;s what we recommend. We don&apos;t
        push replacements to run up the ticket. If replacement is genuinely the better
        option, we&apos;ll show you the math.
      </p>
    ),
  },
  {
    title: "Do you service apartments, co-ops, and commercial buildings?",
    content: (
      <p>
        All the time. We work in Manhattan apartments, condos, co-ops, commercial spaces,
        and multi-unit buildings every day. We coordinate with building supers and property
        managers, and we work to minimize disruption to other tenants or occupants.
      </p>
    ),
  },
  {
    title: "What areas of Manhattan do you cover?",
    content: (
      <>
        <p>We serve all of Manhattan, including:</p>
        <p>
          Upper East Side, Upper West Side, Harlem, East Harlem, Washington Heights,
          Inwood, Midtown East, Midtown West, Hell&apos;s Kitchen, Chelsea, Gramercy,
          Murray Hill, Kips Bay, Flatiron, Union Square, Greenwich Village, West Village,
          SoHo, Tribeca, Lower East Side, Financial District, Battery Park City, and more.
        </p>
        <p>
          If you&apos;re not sure whether we cover your building, call us —
          we almost certainly do.
        </p>
      </>
    ),
  },
  {
    title: "How often should I have my HVAC system serviced?",
    content: (
      <p>
        Twice a year is ideal — once before cooling season (spring) and once before
        heating season (fall). Regular tune-ups extend equipment life, prevent breakdowns,
        and keep efficiency where it should be. We offer single visits and ongoing
        maintenance agreements for both residential and commercial clients.
      </p>
    ),
  },
  {
    title: "Do you install ductless mini splits in older buildings?",
    content: (
      <p>
        Yes — and it&apos;s one of our most common jobs in Manhattan. Older pre-war
        buildings without central ductwork are well-suited for mini splits. Minimal
        wall penetration, zone-level control, and no duct losses. We install and service
        Mitsubishi, Carrier, Daikin, and other major brands. Note: we do not install
        window AC units.
      </p>
    ),
  },
];

export default function GeneralFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const accordionInView = useInView(accordionRef, { once: true, margin: "0px 0px -60px 0px" });
  const donationInView = useInView(donationRef, { once: true, margin: "0px 0px -60px 0px" });

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <main>
      {/* FAQPage JSON-LD for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div id="content">

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className={`hero-org flex-module wow fadeIn${heroInView ? " is-visible" : ""}`}
        >
          <div className="hero-org__top ia-bg-dark">
            <div className="inner inner--slim-1172">
              <div className={`breadcrumbs ia-sky wow fadeInUpS${heroInView ? " is-visible" : ""}`}>
                <span><a href="/" className="home ia-link">Home</a></span>{" "}
                <em>&gt;</em>{" "}
                <span className="post post-page current-item">FAQs</span>
              </div>
              <h1
                className={`ia-white ia-margin-0 wow fadeInUpS${heroInView ? " is-visible" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="accordion-module flex-module">
          <div className="inner inner--slim-1172">
            <div
              ref={accordionRef}
              className={`accordion-wrap-flex wow fadeInUpS${accordionInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div className="accordion-item-flex" key={idx}>
                    <a
                      className={`accordion-title-flex h4${isOpen ? " current" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggle(idx); }}
                      aria-expanded={isOpen}
                    >
                      {item.title}
                      <i className="icon-arr-down" aria-hidden="true" />
                    </a>
                    <div className={`accordion-info-flex${isOpen ? " open" : ""}`}>
                      <div className="content-entry">{item.content}</div>
                      {item.link && (
                        <a href={item.link.href} className="ia-link ia-link--arrow">
                          <i className="icon-arrow-right" aria-hidden="true" />
                          <span>{item.link.label}</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          ref={donationRef}
          className={`front-donation ia-bg-sky flex-module wow fadeInUpS${donationInView ? " is-visible" : ""}`}
        >
          <div className="inner inner--slim-1172">
            <div className={`sub-heading wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              Still have questions?
            </div>
            <h2 className={`h2 wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              We&apos;re Here to Help
            </h2>
            <div className={`front-donation__in wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="content-entry">
                <p>
                  Call us at <strong>(646) 493-4904</strong> — our team picks up fast
                  and can answer any question, schedule a same-day visit, or give you
                  an honest assessment over the phone.
                </p>
              </div>
              <div className="front-donation__btn-wrap">
                <div className="front-donation__btn">
                  <SecondaryButton
                    label="Call (646) 493-4904"
                    href="tel:6464934904"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
