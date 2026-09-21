"use client";

import { Award, BadgeCheck, Expand } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { highlights, type Highlight } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HighlightModal } from "@/components/HighlightModal";

const INTERVAL_MS = 5000;

/** A highlight only opens a modal when there is something to show. */
function hasMedia(highlight: Highlight) {
  return Boolean(highlight.image || highlight.pdf);
}

export function Highlights() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState<Highlight | null>(null);
  const cardRef = useRef<HTMLButtonElement>(null);
  const count = highlights.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    // Hovering the card, focusing the carousel, or an open modal all hold it.
    if (paused || active || count < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    const id = window.setInterval(() => go(index + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [index, paused, active, count, go]);

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  }

  function closeModal() {
    setActive(null);
    // Return focus to the card that opened the modal.
    cardRef.current?.focus();
  }

  const current = highlights[index];
  const isLeadership = current.kind === "leadership";
  const Icon = isLeadership ? Award : BadgeCheck;
  const clickable = hasMedia(current);

  const cardClass =
    "flex min-h-36 w-full flex-col justify-between rounded-xl border border-border bg-surface-muted p-5 text-left";
  const cardBody = (
    <>
      <div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-accent-text uppercase">
          <Icon className="size-4" aria-hidden="true" />
          {isLeadership ? "Leadership" : "Certificate"}
        </span>
        <p className="mt-2 font-heading text-lg leading-snug font-semibold text-text">
          {current.title}
        </p>
      </div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <p className="text-sm text-text-muted">
          {current.org}
          <span aria-hidden="true"> · </span>
          <span className="sr-only">, </span>
          {current.date}
        </p>
        {clickable && (
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-text-muted transition-colors group-hover:text-primary"
          >
            <Expand className="size-3.5" />
            Click to view
          </span>
        )}
      </div>
    </>
  );

  return (
    <Card as="section" aria-labelledby="highlights-title">
      <SectionTitle id="highlights-title">Highlights</SectionTitle>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Leadership roles and certificates"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="rounded-xl"
      >
        <div aria-live="polite" aria-atomic="true">
          {clickable ? (
            <button
              ref={cardRef}
              type="button"
              onClick={() => setActive(current)}
              aria-haspopup="dialog"
              className={`group ${cardClass} transition-all duration-200 hover:-translate-y-px hover:border-primary/50 hover:shadow-sm`}
            >
              {cardBody}
            </button>
          ) : (
            <div className={cardClass}>{cardBody}</div>
          )}
        </div>

        <div className="mt-2 flex items-center justify-center">
          {highlights.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show highlight ${i + 1} of ${count}`}
              aria-current={i === index ? "true" : undefined}
              className="group flex h-8 min-w-8 items-center justify-center px-1"
            >
              <span
                aria-hidden="true"
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-border group-hover:bg-text-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <HighlightModal highlight={active} onClose={closeModal} />
    </Card>
  );
}
