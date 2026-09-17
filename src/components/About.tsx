import { about } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <Card as="section" aria-labelledby="about-title">
      <SectionTitle id="about-title">About</SectionTitle>
      <div className="space-y-3 text-[15px] leading-relaxed text-text-muted">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Card>
  );
}
