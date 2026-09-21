"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Gallery() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons);
    return () => window.removeEventListener("resize", updateButtons);
  }, [updateButtons]);

  // Click-and-drag panning for mouse users; touch already scrolls natively.
  const drag = useRef<{ x: number; left: number } | null>(null);

  function startDrag(e: React.PointerEvent<HTMLUListElement>) {
    const track = trackRef.current;
    if (!track || e.pointerType === "touch") return;
    drag.current = { x: e.clientX, left: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  }

  function moveDrag(e: React.PointerEvent<HTMLUListElement>) {
    const track = trackRef.current;
    if (!track || !drag.current) return;
    track.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  }

  function endDrag(e: React.PointerEvent<HTMLUListElement>) {
    const track = trackRef.current;
    if (!track || !drag.current) return;
    drag.current = null;
    track.releasePointerCapture(e.pointerId);
  }

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("li");
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  const arrowClass =
    "inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-text transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-text";

  return (
    <Card as="section" aria-labelledby="gallery-title">
      <div className="flex items-center justify-between">
        <SectionTitle id="gallery-title">Gallery</SectionTitle>
        <div className="mb-4 flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Scroll gallery left"
            className={arrowClass}
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Scroll gallery right"
            className={arrowClass}
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={updateButtons}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="scrollbar-none -mx-1 flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-1 select-none active:cursor-grabbing"
      >
        {gallery.map((image, i) => (
          <li
            key={image.src}
            className="relative aspect-[4/3] w-[85%] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-surface-muted sm:w-[60%] md:w-[45%] lg:w-[38%]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 400px"
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
