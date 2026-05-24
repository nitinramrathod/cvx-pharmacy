import type { Metadata } from "next";
import { ContactClient } from "./client";

export const metadata: Metadata = {
  title: "Contact Us — CVX Pharmacy Jalna",
  description:
    "Get in touch with CVX Pharmacy in Choudhary Nagar, Jalna. Call, WhatsApp, or fill out our contact form to book a clinical consultation.",
};

export default function ContactPage() {
  return <ContactClient />;
}
