import type { ChannelPageData } from "@/components/custom/channel/types";

const topHvacNyc: ChannelPageData = {
  slug: "top-hvac-nyc",

  navItems: [
    { href: "#channel",           label: "About Us"          },
    { href: "#helpful_resources", label: "Quick Links"       },
    { href: "#crafts",            label: "Our Services"      },
    { href: "#testimonials",      label: "Testimonials"      },
    { href: "#flex_feature",      label: "Emergency Service" },
    { href: "#get_in_touch",      label: "Get in Touch"      },
  ],

  hero: {
    title:           "NYC's HVAC Specialists",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(https://hvacairconditionersnyc.com/wp-content/uploads/2025/04/HVAC-Maintence-768x513.jpg) no-repeat center center / cover",
    description: (
      <p>
        Top HVAC NYC is a locally owned, fully licensed HVAC contractor serving
        all of Manhattan — from the Financial District to Inwood. We handle
        commercial and residential heating, cooling, and air quality with
        certified technicians, upfront pricing, and a satisfaction guarantee.
      </p>
    ),
  },

  learnMore: {
    title: "NYC HVAC Done Right",
    content: (
      <>
        <p>
          When your heating or AC stops working in New York, you need a company
          that shows up fast, diagnoses the problem honestly, and gets it fixed
          right. Top HVAC NYC has been serving Manhattan residents and businesses
          with that exact standard — licensed techs, top-brand equipment, and a
          commitment to quality on every call.
        </p>

        <h5>Licensed &amp; Insured</h5>
        <p>
          Every service is performed by a certified HVAC technician. We operate
          as a fully licensed and insured contractor within the regulatory
          framework of our industry — so you&rsquo;re covered from the first
          diagnosis to the final test.
        </p>

        <h5>Customer-Centric Service</h5>
        <p>
          We work around your schedule. Busy in the mornings? We can come
          evenings. Need same-day? We accommodate. Every service call is
          approached with your specific situation in mind — not a one-size-fits-all
          script.
        </p>

        <h5>Commercial &amp; Residential</h5>
        <p>
          We handle everything from a single apartment unit to a full commercial
          building. Property managers, businesses, and healthcare facilities all
          have access to our tailored maintenance agreements — designed around
          your building&rsquo;s unique HVAC demands.
        </p>

        <h5>Satisfaction Guaranteed</h5>
        <p>
          We stand behind every repair and installation with a warranty that
          gives you real peace of mind. If it&rsquo;s not right, we come back
          and make it right.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us Now — (646) 493-4904",    href: "tel:6464934904",   icon: "icon-message" },
      { title: "Contact Us Online",               href: "/contact-us",      icon: "icon-mail"    },
      { title: "Our Services",                    href: "/craft-catalog",   icon: "icon-link"    },
      { title: "Service Areas",                   href: "/service-areas",   icon: "icon-info"    },
      { title: "Frequently Asked Questions",      href: "/general-faqs",   icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        We provide the full range of HVAC services across all of Manhattan —
        from AC repair and installation to heating systems, duct work, indoor
        air quality, and preventive maintenance programs for homes and
        commercial buildings.
      </p>
    ),
    craftLinks: [
      { label: "AC Repair",                   href: "/craft-catalog/ac-repair"                   },
      { label: "AC Installation",             href: "/craft-catalog/ac-installation"             },
      { label: "Heating Repair",              href: "/craft-catalog/heating-repair"              },
      { label: "Heating Installation",        href: "/craft-catalog/heating-installation"        },
      { label: "Ductless Mini Split Systems", href: "/craft-catalog/ductless-mini-split"         },
      { label: "HVAC Maintenance",            href: "/craft-catalog/hvac-maintenance"            },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "Top HVAC NYC showed up the same day my AC went out in July. The tech was professional, diagnosed the issue quickly, gave me an upfront price, and had it running within two hours. No upselling, no surprises. I won&rsquo;t call anyone else.",
      name:     "Maria T.",
      position: "Upper West Side Resident",
    },
  },

  flexFeature: {
    imageSrc:    "/images/iStock-1220765707-443x559-1.jpg",
    title:       "HVAC Emergency in NYC?",
    body: (
      <p>
        If your heat goes out in winter or your AC fails in July, don&rsquo;t
        wait. Top HVAC NYC is available 7 days a week with same-day emergency
        response across all of Manhattan. Call{" "}
        <strong>(646) 493-4904</strong> — we pick up.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:6464934904",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule or have a question? Call us at{" "}
        <strong>(646) 493-4904</strong> or use our contact form and we&rsquo;ll
        respond fast — usually within the hour.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default topHvacNyc;
