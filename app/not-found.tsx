import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found — CVX Pharmacy" };

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#060b1a] text-center px-4">
      <div className="relative">
        <div className="absolute inset-0 -m-20 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="font-display font-bold text-8xl md:text-[10rem] text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 leading-none mb-4">
            404
          </p>
          <h1 className="font-display font-bold text-2xl md:text-3xl text-slate-900 dark:text-white mb-3">
            Page Not Found
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
