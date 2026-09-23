"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectModal } from "@/components/ProjectModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function open(project: Project, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActive(project);
  }

  function close() {
    setActive(null);
    // Return focus to the card that opened the modal.
    triggerRef.current?.focus();
  }

  return (
    <Card as="section" aria-labelledby="projects-title">
      <div className="flex items-center justify-between">
        <SectionTitle id="projects-title">Projects</SectionTitle>
        <Link
          href="/projects"
          className="mb-4 inline-flex items-center gap-1 text-xs font-medium text-text-muted transition-colors hover:text-primary"
        >
          View All
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <button
              type="button"
              onClick={(event) => open(project, event.currentTarget)}
              aria-haspopup="dialog"
              className="group w-full rounded-xl border border-border bg-surface-muted p-4 text-left transition-all duration-200 hover:-translate-y-px hover:border-primary/50 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-sans text-[15px] font-semibold text-text">
                  {project.title}
                  {project.org && (
                    <span className="ml-2 text-xs font-medium text-accent-text">
                      {project.org}
                    </span>
                  )}
                </h3>
                <ArrowUpRight
                  className="size-4 shrink-0 text-text-muted transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-1 text-sm text-text-muted">{project.summary}</p>
              <ul
                className="mt-3 flex flex-wrap gap-1.5"
                aria-label="Technologies"
              >
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Chip>{tag}</Chip>
                  </li>
                ))}
              </ul>
            </button>
          </li>
        ))}
      </ul>

      <ProjectModal project={active} onClose={close} />
    </Card>
  );
}
