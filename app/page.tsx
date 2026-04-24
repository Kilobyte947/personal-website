import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero — subtle gradient wash */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50/40 to-transparent"
        />
        <section className="relative max-w-3xl mx-auto px-6 pt-24 pb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-4">
            Available for internships · 2025
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-5">
            Hi, I&apos;m Nick Wang.
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-xl">
            CS student at [Your University], interested in{" "}
            <span className="text-blue-600 font-medium">software engineering</span>,{" "}
            <span className="text-blue-600 font-medium">AI</span>, and{" "}
            <span className="text-emerald-600 font-medium">quantitative finance</span>.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-200">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-200">·</span>
            <a
              href="mailto:nickwang947@gmail.com"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Mail size={14} />
              Email
            </a>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
            >
              View Projects
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-blue-200 text-blue-700 bg-white text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </section>
      </div>

      {/* About */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-6">
          About
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I&apos;m a third-year CS student with a focus on systems, machine learning, and their
            applications to finance. I enjoy building things that are fast, correct, and
            well-reasoned — whether that&apos;s a distributed system, a trading strategy, or an
            AI-powered tool.
          </p>
          <p>
            Outside of classes, I do research in the university ML lab on transformer-based
            forecasting for financial time series. I&apos;m actively looking for internships in
            software engineering, quantitative research, or AI roles.
          </p>
          <p>
            When I&apos;m not at a computer, I enjoy chess, distance running, and reading about
            mathematics.
          </p>
        </div>
      </section>
    </div>
  );
}
