import { experience } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  return (
    <Card as="section" aria-labelledby="experience-title">
      <SectionTitle id="experience-title">Experience</SectionTitle>
      <ol className="relative ml-2 space-y-6 border-l border-border pl-6">
        {experience.map(({ role, org, period }) => (
          <li key={`${role}-${org}`} className="relative">
            <span
              className="absolute top-1.5 -left-[31px] size-2.5 rounded-full bg-primary ring-4 ring-surface"
              aria-hidden="true"
            />
            <h3 className="font-sans text-[15px] font-semibold text-text">
              {role}
            </h3>
            <p className="text-sm text-text-muted">{org}</p>
            <p className="mt-0.5 text-xs font-medium tracking-wide text-accent-text">
              {period}
            </p>
          </li>
        ))}
      </ol>
    </Card>
  );
}
