import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC FAQs — Top HVAC NYC",
  description:
    "Answers to the most common HVAC questions for Manhattan homeowners and building managers. Same-day service, upfront pricing, all major brands.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
