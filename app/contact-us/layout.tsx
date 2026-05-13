import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Top HVAC NYC | (646) 493-4904",
  description:
    "Schedule HVAC service or ask a question. Call (646) 493-4904 or fill out our online form — Top HVAC NYC serves all of Manhattan, same-day available.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
