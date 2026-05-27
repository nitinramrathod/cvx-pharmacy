import { SITE_CONFIG } from "@/constants";

export const runtime = "edge";

export async function GET() {
  const sitemapUrl = new URL("/sitemap.xml", SITE_CONFIG.url).toString();
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
