import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  /** Fallback background color while TODO image is pending */
  bgColor: string;
  navItems: ServiceNavItem[];
  /** Short intro paragraph shown in CraftOverview left column */
  overviewContent: ReactNode;
  /** Quick links shown in CraftOverview right column */
  overviewQuickLinks: { label: string; href: string }[];
  /** Middle content sections rendered between overview and related services */
  sections: { id: string; heading: string; content: ReactNode }[];
  /** "Related Services" links at page bottom */
  relatedServices: { label: string; href: string }[];
};

const PHONE_DISPLAY = "(646) 493-4904";
const PHONE_TEL = "tel:6464934904";

export const servicePages: Record<string, ServicePageData> = {

  /* ─── HEATING REPAIR ─────────────────────────────────────────────────── */
  "heating-repair": {
    title: "Heating Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          When your heating system fails, you need fast, reliable help — especially
          in a New York winter. Our certified technicians diagnose and repair heating
          systems of all types across Manhattan, restoring comfort to your home or
          business quickly.
        </p>
        <p>
          We service gas furnaces, heat pumps, boilers, and electric heating systems.
          If your heat went out overnight, call us first — same-day response is
          available seven days a week.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs You Need Heating Repair",
        content: (
          <>
            <p>
              Your heating system needs professional attention if you&rsquo;re
              experiencing: no heat or insufficient warmth, unusual noises (banging,
              rattling, or squealing), frequent cycling on and off, a sudden spike in
              energy bills, or unusual odors from your vents or unit. Ignoring early
              warning signs typically leads to costlier repairs — or full system
              failure on the coldest night of the year.
            </p>
            <p>
              We service all major brands including Carrier, Trane, Lennox, Rheem,
              Goodman, and Bryant. Whatever brand is installed, we have the tools
              and knowledge to diagnose and fix it.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle Heating Repairs",
        content: (
          <p>
            We start with a full diagnostic — not a guess. Our tech identifies the
            exact cause of the failure, explains it in plain language, and gives you
            a price before any repair begins. Most common repairs (igniter replacement,
            heat exchanger cleaning, blower motor repair, thermostat calibration) are
            completed on the same visit. We carry common parts on the truck so
            you&rsquo;re not waiting days for a parts order.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Heating Maintenance",  href: "/craft-catalog/heating-maintenance"  },
      { label: "Heating Installation", href: "/craft-catalog/heating-installation" },
      { label: "Furnace Service",      href: "/craft-catalog/furnace-service"      },
      { label: "Heat Pumps",           href: "/craft-catalog/heat-pumps"           },
    ],
  },

  /* ─── HEATING MAINTENANCE ────────────────────────────────────────────── */
  "heating-maintenance": {
    title: "Heating Maintenance",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Preventive maintenance is the single most cost-effective investment you can
          make in your heating system. A properly maintained furnace or heat pump runs
          more efficiently, lasts longer, and is far less likely to fail when you need
          it most.
        </p>
        <p>
          Top HVAC NYC performs comprehensive heating maintenance for residential and
          commercial properties across Manhattan — keeping your system running cleanly
          through every New York winter.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When to Schedule Maintenance",
        content: (
          <p>
            Annual maintenance is recommended before heating season begins — ideally
            in early fall. If you&rsquo;ve skipped maintenance for more than two years,
            schedule a tune-up regardless of season. Signs that immediate maintenance
            is overdue: higher-than-normal energy bills, uneven heating, unusual system
            sounds, or a system that short-cycles. Don&rsquo;t wait until a breakdown
            to find out something has been wearing down for months.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "What Our Maintenance Visit Covers",
        content: (
          <p>
            Our heating maintenance checklist covers: inspection and cleaning of the
            heat exchanger, burners, and flue; filter replacement; electrical connection
            tightening; blower motor and belt inspection; thermostat calibration and
            testing; lubrication of moving parts; and a full system test cycle. We
            document everything and let you know if anything needs attention before the
            next season.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Heating Repair",       href: "/craft-catalog/heating-repair"       },
      { label: "Heating Installation", href: "/craft-catalog/heating-installation" },
      { label: "HVAC Maintenance",     href: "/craft-catalog/hvac-maintenance"     },
      { label: "Furnace Service",      href: "/craft-catalog/furnace-service"      },
    ],
  },

  /* ─── HEATING INSTALLATION ───────────────────────────────────────────── */
  "heating-installation": {
    title: "Heating Installation",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Installing a new heating system is a significant investment — and proper
          sizing makes the difference between an efficient, comfortable system and
          one that runs up bills without delivering results. We only install the best
          brands on the market.
        </p>
        <p>
          Top HVAC NYC handles full heating installations for Manhattan homes and
          commercial spaces, from initial load calculation through final system test.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When to Consider a New Installation",
        content: (
          <p>
            If your system is over 15 years old, requiring frequent repairs, or
            consistently underperforming, replacement often makes more financial sense
            than continued repair. We&rsquo;ll give you an honest breakdown of repair
            versus replacement costs — no pressure either way. New systems also qualify
            for energy efficiency tax credits that can meaningfully offset the upfront cost.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Our Installation Process",
        content: (
          <p>
            We start by calculating your home or building&rsquo;s heat load room by room
            so the new system is properly sized. We install the brands that best match
            your budget and efficiency goals, handle all permits required, and do a full
            commissioning test before leaving. You get a complete walkthrough of your new
            system before we close the job.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Heating Repair",       href: "/craft-catalog/heating-repair"       },
      { label: "Heating Maintenance",  href: "/craft-catalog/heating-maintenance"  },
      { label: "Heat Pumps",           href: "/craft-catalog/heat-pumps"           },
      { label: "Furnace Service",      href: "/craft-catalog/furnace-service"      },
    ],
  },

  /* ─── HEAT PUMPS ─────────────────────────────────────────────────────── */
  "heat-pumps": {
    title: "Heat Pumps",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Heat pumps provide both heating and cooling from a single system — moving
          heat rather than generating it, which makes them significantly more efficient
          than traditional furnaces in moderate climates. If your building has a heat
          pump, we handle all maintenance, repair, and replacement work.
        </p>
        <p>
          Our HVAC technicians are experienced in all heat pump types including
          air-source, mini-split, and dual-fuel hybrid systems.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Heat Pump Issues to Watch For",
        content: (
          <p>
            Common heat pump problems: not reaching the set temperature in heating or
            cooling mode, running in emergency heat more than briefly, ice buildup on
            the outdoor unit outside of normal defrost cycles, unusual noise, or
            unexplained electricity spikes. Heat pumps require different diagnostic
            approaches than gas furnaces — make sure the tech you call has specific
            heat pump experience.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Heat Pump Service",
        content: (
          <p>
            We service all major heat pump brands. Our maintenance visits cover:
            refrigerant charge inspection, coil cleaning (indoor and outdoor), reversing
            valve testing, defrost cycle verification, and a full run cycle in both
            heating and cooling modes. For new installations, we properly size the unit
            for your space and handle the complete electrical and refrigerant work.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Heating Repair",       href: "/craft-catalog/heating-repair"       },
      { label: "Heating Installation", href: "/craft-catalog/heating-installation" },
      { label: "AC Repair",            href: "/craft-catalog/ac-repair"            },
      { label: "Ductless Mini Split",  href: "/craft-catalog/ductless-mini-split"  },
    ],
  },

  /* ─── FURNACE SERVICE ────────────────────────────────────────────────── */
  "furnace-service": {
    title: "Furnace Service",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Your furnace is the heating powerhouse of your home or building. If it
          starts to fail, your entire heating system collapses. We service gas
          furnaces of all brands and configurations — repair, maintenance, and
          replacement.
        </p>
        <p>
          Don&rsquo;t let a declining furnace compromise your comfort or safety.
          Our techs identify failing components before they become emergencies.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Warning Signs Your Furnace Needs Service",
        content: (
          <p>
            Call us if your furnace is: failing to ignite or producing a yellow or
            flickering flame (instead of steady blue), making banging or scraping
            noises at startup, cycling on and off rapidly, producing a burning or
            sulfuric smell, or if carbon monoxide detectors have triggered. A cracked
            heat exchanger — which can allow carbon monoxide to enter living spaces —
            is a serious safety issue requiring immediate professional inspection.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Our Furnace Service Approach",
        content: (
          <p>
            We service gas furnaces using a complete diagnostic approach: burner and
            igniter inspection, heat exchanger crack testing, flue inspection for proper
            venting, filter and blower evaluation, gas pressure testing, and a full heat
            cycle run. We carry common furnace parts on the truck — igniters, capacitors,
            flame sensors — so most repairs are completed same visit.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Heating Repair",       href: "/craft-catalog/heating-repair"       },
      { label: "Heating Maintenance",  href: "/craft-catalog/heating-maintenance"  },
      { label: "Heating Installation", href: "/craft-catalog/heating-installation" },
      { label: "HVAC Maintenance",     href: "/craft-catalog/hvac-maintenance"     },
    ],
  },

  /* ─── DUCTLESS MINI SPLIT ────────────────────────────────────────────── */
  "ductless-mini-split": {
    title: "Ductless Mini Split AC Systems",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Ductless mini split systems are ideal for New York apartments, condos, and
          older buildings without central ductwork. They deliver precise zone-level
          temperature control with no duct losses and minimal wall penetration.
        </p>
        <p>
          We install and repair all major mini split brands including Mitsubishi,
          Carrier, Daikin, and LG — and we do it right the first time.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Is a Mini Split Right for Your Space?",
        content: (
          <p>
            Mini splits are the right solution when: your building has no existing
            ductwork, you&rsquo;re adding a space that can&rsquo;t be reached by existing
            ducts, you want zone-level temperature control, or you want a more
            energy-efficient alternative to window units. They&rsquo;re also ideal for
            server rooms, home offices, and any space with specific climate requirements.
            Note: we do not install window air conditioner units.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Mini Split Installation & Repair",
        content: (
          <p>
            For new installations, we select the correct BTU capacity for your space,
            mount the indoor air handler and outdoor condenser, run the refrigerant line
            set and electrical connections, and commission the system fully. For repairs,
            we diagnose common mini split issues — refrigerant leaks, communication errors,
            drainage problems — and fix them on-site whenever possible.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "AC Repair",         href: "/craft-catalog/ac-repair"         },
      { label: "AC Installation",   href: "/craft-catalog/ac-installation"   },
      { label: "Heat Pumps",        href: "/craft-catalog/heat-pumps"        },
      { label: "HVAC Maintenance",  href: "/craft-catalog/hvac-maintenance"  },
    ],
  },

  /* ─── AC REPAIR ──────────────────────────────────────────────────────── */
  "ac-repair": {
    title: "AC Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          When your air conditioner stops cooling in a New York summer, every hour
          counts. We handle all kinds of AC repair requirements — residential and
          commercial — across Manhattan, with same-day response available 7 days a week.
        </p>
        <p>
          We service all major brands and models. If it&rsquo;s running but not cooling,
          or won&rsquo;t turn on at all, call us first.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Common AC Problems We Fix",
        content: (
          <p>
            If your AC is running but not cooling, cycling too frequently, making unusual
            noise, leaking water, or tripping your circuit breaker, those are all signs of
            a repairable problem — not necessarily a full replacement. Most AC repairs
            (refrigerant recharge, capacitor replacement, contactor failure, dirty coil
            cleaning, clogged drain line) are completed in a single visit. We diagnose at
            the source and tell you exactly what&rsquo;s wrong before touching anything.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "How We Repair Your AC",
        content: (
          <p>
            Our tech performs a full system diagnostic: checking refrigerant charge,
            testing electrical components, inspecting the condenser and evaporator coils,
            checking the capacitor and contactor, and measuring airflow. Once we know
            what&rsquo;s wrong, we give you the price. Most repairs take 1–3 hours. If a
            part needs ordering, we tell you upfront so you can plan accordingly.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "AC Installation",     href: "/craft-catalog/ac-installation"     },
      { label: "HVAC Maintenance",    href: "/craft-catalog/hvac-maintenance"    },
      { label: "Ductless Mini Split", href: "/craft-catalog/ductless-mini-split" },
      { label: "Indoor Air Quality",  href: "/craft-catalog/indoor-air-quality"  },
    ],
  },

  /* ─── AC INSTALLATION ────────────────────────────────────────────────── */
  "ac-installation": {
    title: "AC Installation",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A properly installed AC system keeps your home or business comfortable for
          15–20 years. Our installations only include the best brands — Carrier, Trane,
          Lennox, Rheem, Goodman, and Bryant — so the system is built to last and
          performs exactly as designed.
        </p>
        <p>
          We size systems correctly for your space, handle all required permits, and do
          a full commissioning test before we leave. Note: we do not install window AC
          units.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When to Replace vs. Repair",
        content: (
          <p>
            If your system is under 10 years old and repair cost is under 50% of
            replacement cost, repair usually makes sense. We&rsquo;ll give you the
            honest breakdown without steering you toward a sale you don&rsquo;t need.
            Typical replacement indicators: system over 15 years old, R-22 refrigerant
            (phased out and expensive to service), compressor failure on an older unit,
            or multiple major component failures in a single season.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Our AC Installation Process",
        content: (
          <p>
            We calculate your space&rsquo;s cooling load before recommending a system.
            We select the unit that matches your budget and efficiency goals, install the
            indoor air handler and outdoor condenser, connect refrigerant lines and
            electrical, pull required permits, and run a full system cycle test. You get
            a complete walkthrough of your new system before we close the job.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "AC Repair",           href: "/craft-catalog/ac-repair"           },
      { label: "HVAC Maintenance",    href: "/craft-catalog/hvac-maintenance"    },
      { label: "Ductless Mini Split", href: "/craft-catalog/ductless-mini-split" },
      { label: "Indoor Air Quality",  href: "/craft-catalog/indoor-air-quality"  },
    ],
  },

  /* ─── HVAC MAINTENANCE ───────────────────────────────────────────────── */
  "hvac-maintenance": {
    title: "HVAC Maintenance",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Regular HVAC maintenance keeps your systems running at peak efficiency,
          prevents breakdowns, and extends equipment life significantly. Our
          maintenance team cleans your AC units, furnace, and heating systems from
          top to bottom — covering everything on the manufacturer&rsquo;s checklist.
        </p>
        <p>
          We offer single-visit tune-ups and ongoing maintenance agreements for
          residential and commercial properties throughout Manhattan.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "How Often to Schedule Maintenance",
        content: (
          <p>
            Service AC systems in spring; heating systems in fall. Commercial systems
            running year-round often benefit from quarterly inspections. If you&rsquo;ve
            skipped more than two years, schedule a tune-up now — issues caught early cost
            a fraction of what they cost after a full breakdown.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "What's Included",
        content: (
          <p>
            Our full maintenance visit covers: refrigerant level check, coil cleaning
            (evaporator and condenser), electrical inspection and tightening, capacitor
            and contactor testing, filter inspection and replacement, drain pan and drain
            line cleaning, thermostat calibration, blower motor inspection, and a complete
            system test in both heating and cooling modes.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "AC Repair",            href: "/craft-catalog/ac-repair"            },
      { label: "Heating Repair",       href: "/craft-catalog/heating-repair"       },
      { label: "Maintenance Program",  href: "/craft-catalog/maintenance-program"  },
      { label: "Indoor Air Quality",   href: "/craft-catalog/indoor-air-quality"   },
    ],
  },

  /* ─── INDOOR AIR QUALITY ─────────────────────────────────────────────── */
  "indoor-air-quality": {
    title: "Indoor Air Quality",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          The air inside your home or office can carry allergens, dust, mold spores,
          bacteria, and pollutants that your HVAC system either traps or recirculates.
          We offer a full suite of indoor air quality services — from duct cleaning and
          sealing to air scrubbers and UV germicidal lights.
        </p>
        <p>
          Better indoor air quality means healthier occupants and a more efficient HVAC
          system.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs Your Air Quality Needs Attention",
        content: (
          <p>
            You may have an air quality issue if: occupants have increased allergy
            symptoms, there are persistent musty or dusty odors, visible dust
            accumulates near vents, or the building has never had ducts inspected.
            Older pre-war and post-war Manhattan buildings can accumulate years of
            contaminants in poorly sealed ductwork.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Our Air Quality Services",
        content: (
          <p>
            We assess your situation and recommend the right combination: duct cleaning
            for accumulated debris, duct sealing to prevent air leakage and outside
            infiltration, duct replacement for deteriorated systems, air scrubbers to
            neutralize airborne contaminants, and UV germicidal lights to eliminate mold
            and bacteria at the source inside your HVAC system.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Duct Cleaning",       href: "/craft-catalog/duct-cleaning"       },
      { label: "Duct Sealing",        href: "/craft-catalog/duct-sealing"        },
      { label: "Duct Replacement",    href: "/craft-catalog/duct-replacement"    },
      { label: "Air Scrubber",        href: "/craft-catalog/air-scrubber"        },
    ],
  },

  /* ─── DUCT REPLACEMENT ───────────────────────────────────────────────── */
  "duct-replacement": {
    title: "Duct Replacement",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Deteriorated, incorrectly sized, or improperly installed ductwork undermines
          your entire HVAC system — wasting energy, reducing comfort, and degrading air
          quality. Duct replacement gives you a clean, efficient, properly sealed system
          from the start.
        </p>
        <p>
          We handle complete duct replacement for residential and commercial properties
          throughout Manhattan.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Ductwork Needs Replacement",
        content: (
          <p>
            Ductwork has a lifespan of 10–15 years under normal conditions. Signs it
            may need replacement: visible damage, disconnected sections, flexible duct
            that has collapsed or kinked, incorrect sizing for your system, or an older
            building where original duct materials have deteriorated. Inefficient ductwork
            can account for 20–30% energy loss on a central system — making replacement
            a genuine cost-saving investment.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Our Duct Replacement Process",
        content: (
          <p>
            We assess the existing ductwork layout, measure for proper sizing relative
            to your system&rsquo;s airflow requirements, remove the old material, and
            install new properly sealed ducts. All connections are sealed with mastic
            or foil tape. We test system airflow before and after to confirm the
            improvement.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Duct Sealing",        href: "/craft-catalog/duct-sealing"        },
      { label: "Duct Cleaning",       href: "/craft-catalog/duct-cleaning"       },
      { label: "Indoor Air Quality",  href: "/craft-catalog/indoor-air-quality"  },
      { label: "HVAC Maintenance",    href: "/craft-catalog/hvac-maintenance"    },
    ],
  },

  /* ─── DUCT SEALING ───────────────────────────────────────────────────── */
  "duct-sealing": {
    title: "Duct Sealing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Leaky ducts are one of the most common causes of HVAC inefficiency — and one
          of the most overlooked. Conditioned air escaping through unsealed joints means
          your system works harder to maintain temperature, raising energy bills without
          improving comfort.
        </p>
        <p>
          We seal duct systems for residential and commercial properties across Manhattan,
          improving system efficiency in a single visit.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs You Have Duct Leaks",
        content: (
          <p>
            If certain rooms are consistently harder to heat or cool, your energy bills
            are unusually high, or there are visible gaps at duct joints, you likely have
            duct leakage. In older Manhattan buildings, original duct connections made with
            standard duct tape eventually fail — leaving gaps that bleed conditioned air
            into walls and ceiling spaces.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "How We Seal Your Ductwork",
        content: (
          <p>
            We inspect all accessible duct joints and connections, then seal gaps and
            leaks with professional-grade mastic sealant or foil-backed tape — materials
            rated to last the life of the ductwork. We measure airflow before and after to
            confirm the improvement is real.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Duct Cleaning",       href: "/craft-catalog/duct-cleaning"       },
      { label: "Duct Replacement",    href: "/craft-catalog/duct-replacement"    },
      { label: "Indoor Air Quality",  href: "/craft-catalog/indoor-air-quality"  },
      { label: "HVAC Maintenance",    href: "/craft-catalog/hvac-maintenance"    },
    ],
  },

  /* ─── DUCT CLEANING ──────────────────────────────────────────────────── */
  "duct-cleaning": {
    title: "Duct Cleaning",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Over years of operation, HVAC ducts accumulate dust, debris, allergens, and
          sometimes mold — all of which circulate through your space every time the system
          runs. Professional duct cleaning removes this buildup at the source.
        </p>
        <p>
          Our duct cleaning service improves both air quality and system efficiency for
          homes and businesses throughout Manhattan.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When to Schedule Duct Cleaning",
        content: (
          <p>
            Duct cleaning is recommended every 3–5 years, and sooner if: you notice
            visible dust blowing from vents, occupants have unexplained respiratory
            symptoms, there has been recent construction or renovation, or you&rsquo;ve
            moved into a space and don&rsquo;t know the system&rsquo;s history. New York
            City apartments often accumulate particulate matter faster than suburban homes
            due to density and street-level pollution.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Our Duct Cleaning Process",
        content: (
          <p>
            We use commercial-grade negative-pressure equipment that creates suction
            throughout the duct system while agitating and dislodging accumulated debris.
            All registers and grilles are removed and cleaned separately. The system blower
            and air handler are also inspected and cleaned. We seal everything back up and
            run the system to verify improved airflow and cleaner output.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Duct Sealing",        href: "/craft-catalog/duct-sealing"        },
      { label: "Duct Replacement",    href: "/craft-catalog/duct-replacement"    },
      { label: "Air Scrubber",        href: "/craft-catalog/air-scrubber"        },
      { label: "Indoor Air Quality",  href: "/craft-catalog/indoor-air-quality"  },
    ],
  },

  /* ─── AIR SCRUBBER ───────────────────────────────────────────────────── */
  "air-scrubber": {
    title: "Air Scrubber",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Air scrubbers are installed directly into your HVAC system and actively
          neutralize contaminants — including allergens, bacteria, viruses, mold spores,
          volatile organic compounds, and odors — as they circulate through your air
          handler.
        </p>
        <p>
          Unlike standard filters that passively trap particles, air scrubbers actively
          clean the air and surfaces throughout your space.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Who Benefits Most From an Air Scrubber?",
        content: (
          <p>
            Air scrubbers are especially valuable for: households with allergy or asthma
            sufferers, spaces with persistent odors, older buildings with known air quality
            concerns, and healthcare or professional environments requiring clean-air
            standards. Top HVAC NYC installs UV air disinfection and purification systems
            directly into existing HVAC equipment — including systems that dehumidify and
            clean circulating air with ozone while keeping your space at the right
            temperature.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Installation & Maintenance",
        content: (
          <p>
            Air scrubber installation is typically completed in a single visit. We mount
            the unit inside the air handler or duct system, connect it to your existing
            HVAC power supply, and test the system. Most units require an annual lamp
            replacement — we can include that in your regular maintenance schedule.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "UV Germicidal Lights", href: "/craft-catalog/uv-germicidal-lights" },
      { label: "Indoor Air Quality",   href: "/craft-catalog/indoor-air-quality"   },
      { label: "Duct Cleaning",        href: "/craft-catalog/duct-cleaning"        },
      { label: "HVAC Maintenance",     href: "/craft-catalog/hvac-maintenance"     },
    ],
  },

  /* ─── MAINTENANCE PROGRAM ────────────────────────────────────────────── */
  "maintenance-program": {
    title: "Maintenance Program",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Our commercial and property management maintenance programs are designed for
          buildings, businesses, and property managers who need consistent, reliable HVAC
          service without the hassle of scheduling individual calls. From furnace
          installation to PTAC repair and emergency HVAC coverage, we handle it all under
          one agreement.
        </p>
        <p>
          We have a special package designed for healthcare facilities with more stringent
          air quality and system reliability requirements.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Is a Maintenance Agreement Right for You?",
        content: (
          <p>
            Maintenance agreements make sense for: property managers overseeing multiple
            units, commercial building owners, restaurant and retail operators, healthcare
            and professional office environments, and any building with multiple HVAC
            systems that need regular attention. With a maintenance agreement, you have
            priority scheduling, predictable costs, and the assurance that someone is
            actively watching your systems — not just responding when things break.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "What Our Programs Cover",
        content: (
          <p>
            Our maintenance programs can include: scheduled seasonal tune-ups for all
            heating and cooling equipment, PTAC unit maintenance, water heater inspections,
            emergency service coverage, priority response times, and pest control support
            to keep HVAC equipment clean and functional. We tailor the scope to your
            building&rsquo;s specific equipment and your risk tolerance for emergency downtime.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "HVAC Maintenance",    href: "/craft-catalog/hvac-maintenance"    },
      { label: "Heating Maintenance", href: "/craft-catalog/heating-maintenance" },
      { label: "AC Repair",           href: "/craft-catalog/ac-repair"           },
      { label: "Indoor Air Quality",  href: "/craft-catalog/indoor-air-quality"  },
    ],
  },

  /* ─── UV GERMICIDAL LIGHTS ───────────────────────────────────────────── */
  "uv-germicidal-lights": {
    title: "UV Germicidal Lights",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          UV germicidal lights are installed inside your HVAC system to eliminate mold,
          bacteria, and viruses that can grow on your coils and circulate through your
          ductwork. They keep your air conditioning unit free from microbial growth —
          improving both air quality and system efficiency.
        </p>
        <p>
          We install, repair, and replace UV germicidal lighting systems for residential
          and commercial HVAC across Manhattan.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Why UV Germicidal Lights Matter",
        content: (
          <p>
            Evaporator coils in air conditioning systems are constantly wet from
            condensation — making them ideal breeding grounds for mold and bacteria.
            UV-C light installed near the coil continuously irradiates microbial growth,
            preventing buildup that degrades coil performance and air quality. This is
            especially important in dense urban environments like Manhattan, where
            buildings recirculate the same air repeatedly.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Installation & Lamp Replacement",
        content: (
          <p>
            UV germicidal lamp installation is completed in a single visit. We position
            the lamp for maximum coil coverage, wire it into the air handler&rsquo;s
            power supply, and verify proper operation. Lamps typically require replacement
            every 12 months — we can schedule this as part of your annual maintenance
            visit. We can also assess whether existing UV lamps in your system are still
            functioning effectively (lamps often appear lit but lose germicidal efficacy
            before the bulb visibly burns out).
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Air Scrubber",        href: "/craft-catalog/air-scrubber"        },
      { label: "Indoor Air Quality",  href: "/craft-catalog/indoor-air-quality"  },
      { label: "HVAC Maintenance",    href: "/craft-catalog/hvac-maintenance"    },
      { label: "Duct Cleaning",       href: "/craft-catalog/duct-cleaning"       },
    ],
  },

  /* ─── THERMOSTATS ────────────────────────────────────────────────────── */
  "thermostats": {
    title: "Thermostats",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A thermostat is a crucial element of any HVAC system. Keeping your heating and
          air conditioning running properly depends on a thermostat that works accurately.
          We service, repair, and upgrade thermostats for all system types across Manhattan.
        </p>
        <p>
          From basic programmable models to smart thermostats with app control, we install
          and configure the right option for your setup.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Thermostat Problems We Handle",
        content: (
          <p>
            Common thermostat issues: not responding to temperature changes, display not
            functioning, HVAC system not turning on or off when expected, inaccurate
            temperature readings, or a smart thermostat that has lost connection to your
            system. Sometimes what appears to be a major HVAC problem is actually a
            thermostat calibration or wiring issue — we always check the thermostat as
            part of any diagnostic call.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Thermostat Service & Upgrades",
        content: (
          <p>
            We diagnose thermostat issues on-site and repair or replace as needed. For
            smart thermostat upgrades, we handle full installation including wiring
            compatibility check, c-wire installation if required, app setup, and a system
            test to confirm everything is communicating correctly. Properly programmed
            smart thermostats can reduce energy use meaningfully over a full season.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "HVAC Maintenance",  href: "/craft-catalog/hvac-maintenance"  },
      { label: "Zone Systems",      href: "/craft-catalog/zone-systems"      },
      { label: "AC Repair",         href: "/craft-catalog/ac-repair"         },
      { label: "Heating Repair",    href: "/craft-catalog/heating-repair"    },
    ],
  },

  /* ─── ZONE SYSTEMS ───────────────────────────────────────────────────── */
  "zone-systems": {
    title: "Zone Systems",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          HVAC zone systems divide your building into independently controlled temperature
          zones — each with its own thermostat and dampers in the ductwork. Different rooms
          or floors can be set to different temperatures without conditioning the whole
          building uniformly.
        </p>
        <p>
          We handle zone system installation, maintenance, and repairs across Manhattan —
          including air duct obstruction clearing to restore proper zone performance.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: `Call ${PHONE_DISPLAY}`, href: PHONE_TEL    },
      { label: "Contact Us Online",     href: "/contact-us" },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Zone Systems Make Sense",
        content: (
          <p>
            Zone systems are especially valuable for: multi-story buildings where upper
            floors overheat while lower floors stay cool, spaces with large windows or
            skylights that absorb significant solar heat, buildings with dramatically
            different occupancy patterns by area, and any situation where certain rooms
            are consistently uncomfortable despite normal thermostat settings. If the air
            duct is obstructed, our duct cleaning service ensures optimal indoor air quality
            while your zone system stabilizes temperatures where you need it.
          </p>
        ),
      },
      {
        id: "our_process",
        heading: "Zone System Service",
        content: (
          <p>
            Zone system service involves inspecting and testing all zone dampers, checking
            zone control boards and wiring, verifying thermostat accuracy in each zone,
            and testing the bypass damper that regulates system pressure when some zones
            are closed. We repair failed damper motors, replace malfunctioning zone control
            boards, and can add zones to systems that were only partially zoned at
            installation.
          </p>
        ),
      },
    ],
    relatedServices: [
      { label: "Thermostats",        href: "/craft-catalog/thermostats"        },
      { label: "Duct Cleaning",      href: "/craft-catalog/duct-cleaning"      },
      { label: "HVAC Maintenance",   href: "/craft-catalog/hvac-maintenance"   },
      { label: "Indoor Air Quality", href: "/craft-catalog/indoor-air-quality" },
    ],
  },

};
