import { ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-200 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-gray-900">{project.title}</h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
              <GitBranch size={16} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
