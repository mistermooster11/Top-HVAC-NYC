import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Before & After Gallery — Top HVAC NYC",
  description:
    "See real AC repairs, heating repairs, and mini split installations by Top HVAC NYC technicians across Manhattan. Upfront pricing, same-day service.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
