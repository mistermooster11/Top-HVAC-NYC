import { notFound } from "next/navigation";
import CraftHero       from "@/components/custom/craft-catalog/CraftHero";
import ChannelSidebar  from "@/components/custom/channel/ChannelSidebar";
import CraftOverview   from "@/components/custom/craft-catalog/CraftOverview";
import RelatedCrafts   from "@/components/custom/craft-catalog/RelatedCrafts";
import PrimaryButton   from "@/components/custom/buttons/PrimaryButton";
import { servicePages } from "@/data/craft-catalog/service-pages";

/**
 * Hero background images sourced from hvacairconditionersnyc.com
 * (scraped 2026-05-19 — see public/json/hvacairconditionersnyc.json)
 */
const SERVICE_BG: Record<string, string> = {
  "heating-repair":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Heating-Repair.png",
  "heating-maintenance":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/HVAC-Maintence-1.jpg",
  "heating-installation":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Heating-Installation.jpg",
  "heat-pumps":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/heating-pumps.jpg",
  "furnace-service":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Furnace-Service.png",
  "ductless-mini-split":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Ductless-Mini-Split-AC-System.png",
  "ac-repair":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/AC-Repair.png",
  "ac-installation":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/AC-Installation.png",
  "hvac-maintenance":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/HVAC-Maintenance.jpg",
  "indoor-air-quality":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Duct-Cleaning.png",
  "duct-replacement":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Duct-Replacement-Installation-768x1152.jpg",
  "duct-sealing":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Duct-Sealing.jpg",
  "duct-cleaning":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Duct-Cleaning.png",
  "air-scrubber":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Air-Scrubber-768x576.jpg",
  "maintenance-program":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/HVAC-Maintenance-Program.jpg",
  "uv-germicidal-lights":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/UV-Germicidal-Lights.png",
  thermostats:
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Thermostat.png",
  "zone-systems":
    "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/Zone-Systems.png",
};

/** Fallback hero image when no dedicated photo exists for a slug */
const FALLBACK_BG =
  "https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/HVAC-Maintence.jpg";

/* Pre-render all known service slugs at build time */
export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return {
    title: `${data.title} — Top HVAC NYC`,
    description: `Professional ${data.title.toLowerCase()} service in Manhattan, NYC. Upfront pricing, same-day scheduling, licensed & insured.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title={data.title}
        bgImage={SERVICE_BG[slug] ?? FALLBACK_BG}
        breadcrumbs={[
          { label: "Services", href: "/craft-catalog" },
          { label: data.title },
        ]}
      />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={data.navItems} />

          <div className="channel-container">

            {/* ── Overview ─────────────────────────────────────────────── */}
            <div id="overview">
              <CraftOverview
                overviewContent={data.overviewContent}
                quickLinks={data.overviewQuickLinks}
              />
            </div>

            {/* ── Middle sections ──────────────────────────────────────── */}
            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="section-page">
                <div className="content-block">
                  <div className="inner inner--slim-1172 cleared">
                    <h2 className="h3 fadeInUpS wow is-visible">
                      {section.heading}
                    </h2>
                    <div className="cleared">
                      <div className="content-entry p2 fadeInUpS wow is-visible">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ── CTA banner ───────────────────────────────────────────── */}
            <div className="banner-craft ia-bg-sky fadeInUp wow is-visible">
              <div className="inner">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2.4rem", flexWrap: "wrap" }}>
                  <div className="content-entry p3" style={{ flex: 1, minWidth: "24rem" }}>
                    <p>
                      <strong>Ready to book?</strong>{" "}
                      Call{" "}
                      <a href="tel:6464934904">(646) 493-4904</a>{" "}
                      for same-day scheduling, or{" "}
                      <a href="/contact-us">send us a message online</a>.
                      We give you a price before we start — no surprises.
                    </p>
                  </div>
                  <PrimaryButton
                    label="Call (646) 493-4904"
                    href="tel:6464934904"
                    dark={true}
                  />
                </div>
              </div>
            </div>

            {/* ── Related Services ─────────────────────────────────────── */}
            <div id="related_services">
            <RelatedCrafts
              description={
                <p>
                  Top HVAC NYC handles every type of heating, cooling, and air
                  quality system across Manhattan. Explore our other services below.
                </p>
              }
              crafts={data.relatedServices}
            />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
