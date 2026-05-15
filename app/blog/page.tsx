"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Blog Posts (placeholder — replace with real content or CMS) ─ */
// [TODO: Replace all placeholder posts with real content from Top HVAC NYC before launch]

const posts = [
  {
    id: "ac-not-cooling",
    title: "Why Your AC Is Running But Not Cooling (And What to Do About It)",
    excerpt:
      "If your AC is on but the air isn't getting cold, it's usually one of four things. Here's how to tell the difference — and which ones you can check yourself before calling a tech.",
    category: "AC Tips",
    date: "May 2026",
    href: "/blog/ac-not-cooling",
  },
  {
    id: "mini-split-vs-central-ac",
    title: "Ductless Mini Split vs. Central AC: Which Is Right for a Manhattan Apartment?",
    excerpt:
      "Most Manhattan buildings don't have the ductwork for central air. Here's an honest breakdown of your options — and why mini splits are usually the right call in older NYC buildings.",
    category: "Homeowner Guide",
    date: "April 2026",
    href: "/blog/mini-split-vs-central-ac",
  },
  {
    id: "heat-pump-nyc",
    title: "Do Heat Pumps Actually Work in NYC Winters? Honest Answer.",
    excerpt:
      "Heat pumps have gotten a lot of attention lately. We explain how they perform in New York winters, what the limitations are, and when they make financial sense.",
    category: "How It Works",
    date: "March 2026",
    href: "/blog/heat-pump-nyc",
  },
  {
    id: "hvac-maintenance-schedule",
    title: "How Often Should You Service Your HVAC System in NYC?",
    excerpt:
      "Twice a year is the standard recommendation, but NYC buildings have specific conditions — high occupancy, older equipment, variable building management — that change the math. Here's the real answer.",
    category: "Maintenance",
    date: "February 2026",
    href: "/blog/hvac-maintenance-schedule",
  },
  {
    id: "signs-hvac-needs-repair",
    title: "7 Signs Your HVAC System Needs Repair (Before It Breaks Down Completely)",
    excerpt:
      "Most HVAC failures don't come out of nowhere. These are the warning signs that usually show up weeks before a full breakdown — and what each one means.",
    category: "Homeowner Guide",
    date: "January 2026",
    href: "/blog/signs-hvac-needs-repair",
  },
  {
    id: "indoor-air-quality-nyc",
    title: "Indoor Air Quality in NYC: What You're Breathing and How to Fix It",
    excerpt:
      "NYC apartments have unique air quality challenges — old buildings, limited ventilation, and dense occupancy. Here's what actually helps and what's marketing noise.",
    category: "Air Quality",
    date: "December 2025",
    href: "/blog/indoor-air-quality-nyc",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function PostCard({ post, delay }: { post: typeof posts[number]; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`user-grid-item user-grid-item--three fadeInUpS wow${vis}`}
      style={{ animationDelay: delay }}
    >
      <div className="user-grid-item-info">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span
            className="p3 ia-medium"
            style={{
              padding: "0.3rem 1rem",
              background: "var(--ia-sky, #EFEFEF)",
              borderRadius: "4px",
              fontSize: "1.2rem",
            }}
          >
            {post.category}
          </span>
          <span className="p3 ia-dark" style={{ fontSize: "1.2rem", opacity: 0.6 }}>{post.date}</span>
        </div>
        <h3 className="h6 ia-margin-1">
          {/* [TODO: Enable links when blog CMS is wired up] */}
          {post.title}
        </h3>
        <p className="p3 ia-regular ia-dark" style={{ marginBottom: "1.2rem" }}>
          {post.excerpt}
        </p>
        <a className="ia-link ia-link--arrow" href={post.href}>
          <i className="icon-link" />
          <span>Read More</span>
        </a>
        {/* [TODO: Wire each href to real blog post pages] */}
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -60px 0px" });
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
              <span className="post post-page current-item">Blog</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              HVAC Tips &amp; Homeowner Guides
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>From the Top HVAC NYC Team</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Practical advice from the technicians who service heating and cooling systems
                  across Manhattan every day. No filler — just the honest information
                  homeowners and building managers actually need.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
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

      {/* ── Post Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Latest Articles
          </h2>
          {/* [TODO: Replace placeholder posts with real content from client or CMS] */}
          <div className="user-grid-list user-grid-list--small">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} delay={`${(i % 3) * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Have an HVAC Emergency?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            We Pick Up Fast — Call Now
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(646) 493-4904</strong> and we&apos;ll give you an ETA on the spot.
                Same-day service available 7 days a week across all of Manhattan.
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
