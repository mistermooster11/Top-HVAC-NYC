import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Service Areas — Manhattan, NYC | Top HVAC NYC",
  description:
    "Top HVAC NYC serves all Manhattan neighborhoods — Upper East Side, Upper West Side, Midtown, Chelsea, Tribeca, SoHo, Financial District, and more. Same-day available.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
