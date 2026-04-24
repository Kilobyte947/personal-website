import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Nick Wang",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
        Work
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Projects</h1>
      <p className="text-gray-500 mb-12">Things I&apos;ve built across systems, AI, and finance.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
