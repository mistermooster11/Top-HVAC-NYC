import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Top HVAC NYC",
  description: "Privacy policy for Top HVAC NYC. Learn how we collect, use, and protect your information.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
