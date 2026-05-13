import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Tips & Homeowner Guides — Top HVAC NYC",
  description:
    "Practical HVAC advice for Manhattan homeowners and building managers — AC maintenance tips, heating guides, mini split info, and more from Top HVAC NYC.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
