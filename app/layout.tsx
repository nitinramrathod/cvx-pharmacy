import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { Toaster } from "react-hot-toast";
import { SITE_CONFIG } from "@/constants";

const sora = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["300","400","500","600","700","800"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["300","400","500","600"] });

export const metadata: Metadata = {
  title: { default: `${SITE_CONFIG.name} | Advanced Clinical Pharmacy & Patient Care`, template: `%s | ${SITE_CONFIG.name}` },
  description: SITE_CONFIG.description,
  keywords: ["clinical pharmacy Jalna","medication therapy management","CVX Pharmacy","NCD care Jalna","diabetes pharmacy","hypertension pharmacy","pharmacist consultation","pharmacy Jalna Maharashtra"],
  authors: [{ name: "CVX Pharmacy" }],
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website", locale: "en_IN", url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} | Advanced Clinical Pharmacy`,
    description: SITE_CONFIG.description, siteName: SITE_CONFIG.name
  },
  twitter: { card: "summary_large_image", title: `${SITE_CONFIG.name} | Advanced Clinical Pharmacy`, description: SITE_CONFIG.description },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#060b1a" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${dmSans.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
          <Toaster position="top-right" toastOptions={{ duration: 4000, style: { background: "hsl(var(--card))", color: "hsl(var(--card-foreground))", border: "1px solid hsl(var(--border))", borderRadius: "12px" } }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
