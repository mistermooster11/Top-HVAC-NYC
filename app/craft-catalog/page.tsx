import CraftCatalogHero from "@/components/custom/craft-catalog/CraftCatalogHero";
import CraftCatalogClient from "@/components/custom/craft-catalog/CraftCatalogClient";

export const metadata = {
  title: "Our HVAC Services – Top HVAC NYC",
  description:
    "Top HVAC NYC provides heating, cooling, and air quality services across Manhattan. AC repair, heating repair, mini splits, ductless systems, and more — same-day service, upfront pricing.",
};

export default function CraftCatalogPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftCatalogHero />
      <CraftCatalogClient />
    </main>
  );
}
