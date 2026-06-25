// src/components/ProjectCard.jsx
// Purpose: Reusable project card with sample data for preview

import { SquareArrowOutUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const sampleProjects = [
  {
    id: 1,
    title: "StarDust - News Aggregation With Recommendation System",
    description:
      "A real-time news web app that displays news in cards with a personalized recommendation system.",
    tags: ["React", "Node.js", "MongoDB"],
    liveLink: "https://stardust-demo.vercel.app",
    sourceLink: "https://github.com/ayushpakar/stardust",
  },
  {
    id: 2,
    title: "Portfolio Website — Zibai Theme",
    description:
      "Personal developer portfolio with elegant jade-green theme, smooth scroll, and responsive design.",
    tags: ["React", "Tailwind CSS", "Vite"],
    liveLink: "https://ayushpakar.vercel.app",
    sourceLink: "https://github.com/ayushpakar/portfolio",
  },
  {
    id: 3,
    title: "TaskFlow — Collaborative Task Manager",
    description:
      "Drag-and-drop task management app with real-time collaboration and deadline reminders.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    liveLink: null,
    sourceLink: "https://github.com/ayushpakar/taskflow",
  },
];

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleProjects.map((project) => (
        <div key={project.id} className="card group overflow-hidden p-0">
          {/* Image Placeholder */}
          <div
            className="h-48 flex justify-center items-center font-heading text-surface text-xl font-bold px-4 text-center"
            style={{ background: "var(--gradient-card)" }}
          >
            {project.title}
          </div>

          {/* Content */}
          <div className="flex flex-col px-5 py-5 gap-3">
            <h3 className="font-heading text-deep text-lg font-bold leading-snug group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-sm font-body text-deep/60 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary/20 text-deep/70 px-3 py-1 rounded-full text-xs font-body border border-secondary/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-1">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-body text-primary hover:text-accent transition-colors"
                >
                  <SquareArrowOutUpRight size={16} />
                  Live Demo
                </a>
              )}
              {project.sourceLink && (
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-body text-deep/40 hover:text-primary transition-colors"
                >
                  <FaGithub size={16} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
