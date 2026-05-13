import type { ReactNode } from "react";

export type NavItem = { href: string; label: string };

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  href: string;
  imgSrc: string;
  alt: string;
};

export type ProgramsPageData = {
  navItems: NavItem[];
  hero: {
    bgImage: string;
    title: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

export const programsData: ProgramsPageData = {
  navItems: [
    { href: "#flex-module-3", label: "Service Details" },
    { href: "#flex-module-4", label: "Service Areas"  },
  ],

  hero: {
    bgImage: "/images/IMG_9750-1024x683.jpg",
    title: "Our HVAC Services",
    description: (
      <p>
        Top HVAC NYC handles the full range of heating, cooling, and air quality
        services for Manhattan homes and commercial buildings — from emergency AC
        repair to annual maintenance programs.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          Every job starts with an honest diagnosis. We assess the problem, explain
          the solution in plain language, and give you the price before any work begins.
          Our technicians carry the tools and parts needed to resolve most issues on the
          first visit — no return trips, no wasted time.
        </p>
        <p>
          We work in apartments, condos, co-ops, commercial spaces, and multi-unit
          buildings. Licensed and insured. Same-day service available. Call{" "}
          <a href="tel:6464934904">(646) 493-4904</a> to get started.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "AC Repair",
      content: (
        <p>
          If your AC is running but not cooling, cycling too frequently, or making unusual
          noise, we diagnose the exact cause before recommending any repair. Most AC repairs
          — refrigerant recharge, capacitor replacement, contactor failure, coil cleaning —
          are completed same-day. We service all major brands across Manhattan, 7 days a week.
        </p>
      ),
      learnMoreHref: "/craft-catalog/ac-repair",
    },
    {
      title: "Heating Repair",
      content: (
        <p>
          We repair heating systems of all types — gas furnaces, heat pumps, boilers, and
          electric systems. If your heat went out or is underperforming, our technicians
          identify the exact problem, give you the price upfront, and restore your system
          fast. Same-day emergency response available across all of Manhattan.
        </p>
      ),
      learnMoreHref: "/craft-catalog/heating-repair",
    },
    {
      title: "AC Installation",
      content: (
        <p>
          We size new AC systems correctly for your space — not just what&rsquo;s easiest
          to install. Proper sizing means better efficiency, fewer repairs, and longer
          equipment life. We work with Carrier, Trane, Lennox, Rheem, Goodman, and Bryant.
          Permits handled. Full commissioning test included. Note: we do not install window
          AC units.
        </p>
      ),
      learnMoreHref: "/craft-catalog/ac-installation",
    },
    {
      title: "Heating Installation",
      content: (
        <p>
          New heating system installations for Manhattan residences and commercial spaces.
          We calculate heat load properly, select the right equipment for your budget and
          efficiency goals, handle all required permits, and do a full commissioning test.
          Brands include Day &amp; Night, Bryant, Carrier, Trane, Lennox, and more.
        </p>
      ),
      learnMoreHref: "/craft-catalog/heating-installation",
    },
    {
      title: "Ductless Mini Split Systems",
      content: (
        <p>
          The right choice for NYC apartments and older buildings without central ductwork.
          Mini splits deliver zone-level temperature control with no duct losses and minimal
          wall penetration. We install and repair all major brands including Mitsubishi,
          Carrier, and Daikin. Note: we do not install window AC units.
        </p>
      ),
      learnMoreHref: "/craft-catalog/ductless-mini-split",
    },
    {
      title: "HVAC Maintenance",
      content: (
        <p>
          Regular tune-ups prevent breakdowns and extend system life. Our visits cover
          refrigerant check, coil cleaning, electrical inspection, filter replacement,
          drain line cleaning, thermostat calibration, and a complete system test in both
          heating and cooling modes. Available as single visits or ongoing agreements.
        </p>
      ),
      learnMoreHref: "/craft-catalog/hvac-maintenance",
    },
    {
      title: "Indoor Air Quality",
      content: (
        <p>
          We offer a full suite of air quality services: duct replacement, duct sealing,
          duct cleaning, and air scrubbers that actively neutralize allergens, bacteria,
          viruses, and odors in your circulating air. For buildings with specific air
          quality concerns — including healthcare facilities — we also install UV germicidal
          lighting systems directly into existing HVAC equipment.
        </p>
      ),
      learnMoreHref: "/craft-catalog/indoor-air-quality",
    },
    {
      title: "Maintenance Program",
      content: (
        <p>
          For property managers, businesses, and building owners who need consistent HVAC
          coverage without scheduling individual calls. Our programs include scheduled
          tune-ups, PTAC maintenance, emergency response priority, and water heater
          inspections. Special packages available for healthcare facilities.
        </p>
      ),
      learnMoreHref: "/craft-catalog/maintenance-program",
    },
  ],

  // No external partners — trade client
  partners: [],
};

export default programsData;
