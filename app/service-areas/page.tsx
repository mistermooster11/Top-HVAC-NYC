"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Area Data ──────────────────────────────────────── */

const areas = [
  {
    slug: "upper-manhattan",
    region: "Upper Manhattan",
    headline: "HVAC Service in Upper Manhattan",
    description:
      "Upper Manhattan — from Harlem to Inwood — is a mix of pre-war apartment buildings, co-ops, and newer high-rise developments. Older buildings often have aging central HVAC systems and limited ductwork, making ductless mini splits a common upgrade. Our technicians know the building stock in this neighborhood well and arrive ready for whatever the system requires.",
    callouts: [
      "Pre-war building HVAC specialists",
      "Ductless mini split upgrades for buildings without central ductwork",
      "Same-day service from Harlem to Inwood",
    ],
    neighborhoods:
      "Harlem • East Harlem • West Harlem • Morningside Heights • Washington Heights • Inwood • Hamilton Heights • Sugar Hill",
  },
  {
    slug: "upper-east-side-upper-west-side",
    region: "Upper East Side & Upper West Side",
    headline: "HVAC Service on the Upper East Side & Upper West Side",
    description:
      "The Upper East and West Sides are dense with high-end co-ops, condos, and pre-war apartment buildings that require HVAC technicians who understand both the equipment and the building management expectations. We coordinate with supers and building staff, work cleanly, and document every service call.",
    callouts: [
      "Licensed and insured — meets building board and co-op requirements",
      "Maintenance programs for property managers",
      "Full residential and commercial HVAC coverage",
    ],
    neighborhoods:
      "Upper East Side • Yorkville • Lenox Hill • Carnegie Hill • Upper West Side • Lincoln Square • Manhattan Valley",
  },
  {
    slug: "midtown",
    region: "Midtown Manhattan",
    headline: "HVAC Service in Midtown Manhattan",
    description:
      "Midtown's mix of commercial buildings, hotels, and high-rise residential properties demands reliable HVAC contractors who can work around occupied spaces, meet building compliance standards, and respond fast. We handle commercial HVAC maintenance programs, emergency repairs, and full system installations for Midtown properties of all sizes.",
    callouts: [
      "Commercial HVAC maintenance programs available",
      "Emergency response for occupied commercial spaces",
      "All-brands service: Carrier, Trane, Lennox, Daikin, and more",
    ],
    neighborhoods:
      "Midtown East • Midtown West • Hell's Kitchen • Murray Hill • Kips Bay • Tudor City • Sutton Place • Turtle Bay",
  },
  {
    slug: "downtown-manhattan",
    region: "Downtown Manhattan",
    headline: "HVAC Service in Downtown Manhattan",
    description:
      "Downtown Manhattan — Chelsea, Greenwich Village, SoHo, Tribeca, and the Financial District — is one of the most densely packed commercial and residential zones in the country. We serve loft conversions, historic buildings, modern high-rises, and everything in between. Same-day service available throughout the downtown core.",
    callouts: [
      "Loft and high-rise HVAC installation specialists",
      "PTAC service for older residential buildings",
      "Same-day availability across all downtown neighborhoods",
    ],
    neighborhoods:
      "Chelsea • Gramercy • Flatiron • Union Square • Greenwich Village • West Village • SoHo • NoHo • Nolita • Tribeca • Lower East Side • Financial District • Battery Park City • Two Bridges",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function AreaSection({ area }: { area: typeof areas[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      id={area.slug}
      className={`content-block-flex flex-module fadeIn wow${vis}`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="inner inner--slim-1172">
        <div className="content-block-head wide">
          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
            {area.headline}
          </h2>
        </div>
        <div className="content-block-in wide">
          <div className="content-block-text content-entry p2 full-width">
            <p>{area.description}</p>
            <ul>
              {area.callouts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p>
              <strong>Neighborhoods served:</strong> {area.neighborhoods}
            </p>
            <p>
              Not sure if we cover your building?{" "}
              <a href="tel:6464934904" className="ia-link">Call (646) 493-4904</a>{" "}
              — we almost certainly do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ServiceAreasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  const heroVis = heroInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <div ref={heroRef} className={`hero-org flex-module fadeIn wow${heroVis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
              <span><a href="/">Home</a></span>
              <em>&gt;</em>
              <span className="post post-page current-item">Service Areas</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              We Serve All of Manhattan
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Coverage Area</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Top HVAC NYC serves every Manhattan neighborhood — from Inwood to Battery Park.
                  Our own licensed technicians cover every borough. No subcontracting.
                  Same-day scheduling available 7 days a week.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Jump to Area
              </div>
              <ul className="quick-links" role="list">
                {areas.map((area, i) => (
                  <li key={area.slug} className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                    <a className="ia-link ia-link--arrow" href={`#${area.slug}`}>
                      <i className="icon-link" />
                      <span>{area.region}</span>
                    </a>
                  </li>
                ))}
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.5s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:6464934904">
                    <i className="icon-link" />
                    <span>Call (646) 493-4904</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Area Sections ── */}
      {areas.map((area) => (
        <AreaSection key={area.slug} area={area} />
      ))}

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Not Sure If We Cover You?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Just Call — We Almost Certainly Do
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Our team covers all of Manhattan. Call <strong>(646) 493-4904</strong> and
                we&apos;ll confirm in 30 seconds and get you scheduled the same day.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <a className="btn btn--primary" href="tel:6464934904">
                  Call (646) 493-4904
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
