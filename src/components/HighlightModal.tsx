"use client";

import { ExternalLink, PlayCircle, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Highlight } from "@/data/portfolio";

type HighlightModalProps = {
  highlight: Highlight | null;
  onClose: () => void;
};

export function HighlightModal({ highlight, onClose }: HighlightModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (highlight && !dialog.open) {
      dialog.showModal();
    } else if (!highlight && dialog.open) {
      dialog.close();
    }
  }, [highlight]);

  // Lock background scroll while the modal is open.
  useEffect(() => {
    if (!highlight) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [highlight]);

  function onBackdropClick(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={onBackdropClick}
      aria-labelledby="highlight-modal-title"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-border bg-surface p-0 text-text shadow-xl backdrop:bg-transparent"
    >
      {highlight && (
        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3
                id="highlight-modal-title"
                className="text-xl font-semibold text-balance text-text sm:text-2xl"
              >
                {highlight.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-text">
                {highlight.org}
                <span aria-hidden="true"> · </span>
                <span className="sr-only">, </span>
                {highlight.date}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close highlight"
              className="-mt-1 -mr-1 inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          {highlight.image && (
            <div className="mt-4 flex justify-center overflow-hidden rounded-xl border border-border bg-surface-muted p-2">
              <Image
                src={highlight.image}
                alt={`${highlight.title} — ${highlight.org}`}
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 90vw, 700px"
                className="h-auto max-h-[55vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
          )}

          {highlight.description && (
            <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
              {highlight.description}
            </p>
          )}

          {highlight.recording && (
            <a
              href={highlight.recording}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
            >
              <PlayCircle className="size-4 opacity-70" aria-hidden="true" />
              Watch the recording
            </a>
          )}

          {highlight.verify && (
            <a
              href={highlight.verify}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
            >
              Verify credential
              <ExternalLink
                className="size-3.5 opacity-70"
                aria-hidden="true"
              />
            </a>
          )}

          {highlight.pdf && (
            <a
              href={highlight.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
            >
              View original
              <ExternalLink
                className="size-3.5 opacity-70"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}
