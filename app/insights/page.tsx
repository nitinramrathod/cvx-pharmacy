import type { Metadata } from "next";
import { InsightsClient } from "./client";

export const metadata: Metadata = {
  title: "Health Insights & Clinical Articles — CVX Pharmacy",
  description:
    "Evidence-based health articles, clinical pharmacology insights, and patient education resources from CVX Pharmacy, Jalna.",
};

export default function InsightsPage() {
  return <InsightsClient />;
}
