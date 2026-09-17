"use client";

import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/portfolio";
import { Chip } from "@/components/ui/Chip";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  function onBackdropClick(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={onBackdropClick}
      aria-labelledby="project-modal-title"
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-border bg-surface p-0 text-text shadow-xl backdrop:bg-transparent"
    >
      {project && (
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                id="project-modal-title"
                className="text-2xl font-semibold text-text"
              >
                {project.title}
              </h3>
              {project.org && (
                <p className="mt-1 text-sm font-medium text-accent-text">
                  {project.org}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="-mt-1 -mr-1 inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
            {project.summary}
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-text-muted marker:text-accent">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Chip>{tag}</Chip>
              </li>
            ))}
          </ul>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Visit project
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}
