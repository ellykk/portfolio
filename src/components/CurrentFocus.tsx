import { currentFocus, quote } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CurrentFocus() {
  return (
    <>
      <Card as="section" aria-labelledby="focus-title">
        <SectionTitle id="focus-title">Current Focus</SectionTitle>
        <p className="text-[15px] leading-relaxed text-text-muted">
          {currentFocus.text}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {currentFocus.tags.map((tag) => (
            <li key={tag}>
              <Chip tone="accent">{tag}</Chip>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <blockquote className="border-l-2 border-primary pl-4 text-[15px] leading-relaxed text-text-muted italic">
          {quote}
        </blockquote>
      </Card>
    </>
  );
}
