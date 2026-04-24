import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Hi, I&apos;m Nick Wang.
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          CS student at [Your University], interested in{" "}
          <span className="text-gray-900 font-medium">software engineering</span>,{" "}
          <span className="text-gray-900 font-medium">AI</span>, and{" "}
          <span className="text-gray-900 font-medium">quantitative finance</span>.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4 mb-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <span className="text-gray-200">·</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-200">·</span>
          <a
            href="mailto:nickwang947@gmail.com"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Mail size={14} />
            Email
          </a>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View Projects
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {/* About */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
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
