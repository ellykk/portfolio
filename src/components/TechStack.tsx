import { techStack } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TechStack() {
  return (
    <Card as="section" aria-labelledby="tech-title">
      <SectionTitle id="tech-title">Tech Stack</SectionTitle>
      <div className="space-y-4">
        {techStack.map(({ group, items }) => (
          <div key={group}>
            <h3 className="mb-2 font-sans text-xs font-semibold tracking-wide text-text-muted uppercase">
              {group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
