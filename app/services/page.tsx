import type { Metadata } from "next";
import { ServicesPageClient } from "./client";
export const metadata: Metadata = {
  title: "Clinical Pharmacy Services — CVX Pharmacy Jalna",
  description: "Explore CVX Pharmacy's comprehensive clinical services: MTM, diabetes care, hypertension monitoring, rational medicine use, lifestyle counseling, and more."
};
export default function ServicesPage() { return <ServicesPageClient />; }
