import type { Metadata } from "next";
import { AboutPageClient } from "./client";

export const metadata: Metadata = {
  title: "About CVX Pharmacy — Clinical Pharmacy, Jalna",
  description: "Learn about CVX Pharmacy's story, mission, clinical approach, and team. Founded in 2025 in Jalna, Maharashtra to bring evidence-based pharmaceutical care."
};

export default function AboutPage() {
  return <AboutPageClient />;
}
