import { experience, education, skills } from "@/data/resume";
import { Download } from "lucide-react";
import { tagColor } from "@/lib/tagColor";

export const metadata = {
  title: "Resume — Nick Wang",
};

const SKILL_CATEGORY_COLORS: Record<string, string> = {
  Languages: "text-indigo-600",
  "AI / ML": "text-violet-600",
  "Quant / Finance": "text-emerald-600",
  Infrastructure: "text-sky-600",
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-start justify-between mb-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">
            Background
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Resume</h1>
          <p className="text-gray-500">Experience, education, and skills.</p>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm text-gray-600 rounded-lg hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
        >
          <Download size={14} />
          PDF
        </a>
      </div>

      {/* Experience */}
      <section className="mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-6">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.role + item.company}
              className="grid grid-cols-[1fr_auto] gap-x-6 pl-4 border-l-2 border-indigo-100 hover:border-indigo-400 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{item.role}</h3>
                <p className="text-sm text-indigo-600 mb-2">{item.company}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-md font-medium ${tagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">{item.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-6">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="grid grid-cols-[1fr_auto] gap-x-6 pl-4 border-l-2 border-violet-100 hover:border-violet-400 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{item.degree}</h3>
                <p className="text-sm text-violet-600 mb-2">{item.institution}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.details}</p>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">{item.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-6">
          Skills
        </h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex gap-6">
              <span
                className={`text-sm font-medium w-36 shrink-0 pt-0.5 ${
                  SKILL_CATEGORY_COLORS[category] ?? "text-gray-500"
                }`}
              >
                {category}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {items.map((skill) => (
                  <span key={skill} className="text-sm text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
