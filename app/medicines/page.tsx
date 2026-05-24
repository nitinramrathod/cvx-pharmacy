import type { Metadata } from "next";
import { MedicinesClient } from "./client";

export const metadata: Metadata = {
  title: "Medicines & Products — CVX Pharmacy Jalna",
  description:
    "Browse CVX Pharmacy's range of medicines, wellness products, diagnostics, and OTC items. Chronic care, vitamins, supplements and more in Jalna.",
};

export default function MedicinesPage() {
  return <MedicinesClient />;
}
