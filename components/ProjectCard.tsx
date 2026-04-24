import { ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "@/data/projects";
import { tagColor } from "@/lib/tagColor";

const ACCENTS = [
  "border-t-indigo-400",
  "border-t-violet-400",
  "border-t-emerald-400",
  "border-t-sky-400",
];

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <div
      className={`border border-gray-200 border-t-2 ${accent} rounded-xl p-6 flex flex-col gap-4 hover:shadow-md hover:border-gray-300 transition-all`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-gray-900">{project.title}</h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <GitBranch size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-1 rounded-md font-medium ${tagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
