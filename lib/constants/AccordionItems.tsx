
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "AC Repair",
    image: "/images/IMG_9750-1024x683.jpg",
    description:
      "If your AC is running but not cooling, cycling too frequently, or making unusual noise, we diagnose the exact cause before recommending any repair. Most repairs are completed same-day across all of Manhattan.",
    learnHref: "/craft-catalog/ac-repair",
    steps: [
      { label: "Diagnose", body: "Our tech identifies the root cause — refrigerant issue, failed capacitor, dirty coil, or something else — before quoting anything." },
      { label: "Quote Upfront", body: "Price confirmed before any work begins. What we quote is what you pay." },
      { label: "Repair It", body: "Most AC repairs — refrigerant recharge, capacitor or contactor replacement, coil cleaning — are completed same-day." },
      { label: "Test & Confirm", body: "We run a full system test before leaving to verify the repair and make sure you're cooling properly." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Heating Repair",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "We repair all heating system types — gas furnaces, heat pumps, boilers, and electric systems. Same-day emergency response available across all of Manhattan.",
    learnHref: "/craft-catalog/heating-repair",
    steps: [
      { label: "Diagnose", body: "We identify the exact problem — igniter, heat exchanger, gas valve, thermostat, or something else — and explain it in plain language." },
      { label: "Quote Upfront", body: "Full price before any work begins. You approve it. Then we start." },
      { label: "Repair It", body: "Our techs carry common parts on every truck. Most heating repairs are resolved on the first visit." },
      { label: "Test & Confirm", body: "We run the system through a full heating cycle to confirm the repair before we leave." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Ductless Mini Split Systems",
    image: "/images/IMG_9750-1024x683.jpg",
    description:
      "The right choice for NYC apartments and older buildings without central ductwork. Zone-level temperature control with minimal wall penetration. We install and repair all major brands.",
    learnHref: "/craft-catalog/ductless-mini-split",
    steps: [
      { label: "Assess the Space", body: "We evaluate your layout, insulation, and existing infrastructure to determine the right system size and configuration." },
      { label: "Quote Upfront", body: "Full quote before we schedule installation — no surprises." },
      { label: "Install", body: "Minimal wall penetration. We handle all refrigerant lines, electrical connections, and drain routing cleanly." },
      { label: "Commission & Test", body: "Full system test in both heating and cooling modes before handoff. We walk you through the controls." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "HVAC Maintenance",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "Regular tune-ups prevent breakdowns and extend system life. Our visits cover refrigerant check, coil cleaning, electrical inspection, filter replacement, drain line cleaning, and a full system test.",
    learnHref: "/craft-catalog/hvac-maintenance",
    steps: [
      { label: "Schedule", body: "Book a single visit or set up an ongoing maintenance agreement — we'll remind you when it's time." },
      { label: "Inspect & Clean", body: "Refrigerant levels, coil condition, electrical connections, filter, drain line — every component gets checked and cleaned." },
      { label: "Report", body: "We tell you the system's condition and flag anything that needs attention before it becomes a problem." },
      { label: "Test", body: "System runs in both heating and cooling modes to confirm everything is operating correctly." },
    ] as AccordionStep[],
  },
];
