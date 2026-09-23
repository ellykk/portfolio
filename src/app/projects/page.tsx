import { ArrowLeft, ExternalLink, Lock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { projects, siteMeta } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: `All Projects | ${siteMeta.title}`,
  description:
    "Every project Kyle Panganiban has shipped, from AI platforms and automation pipelines to personal web apps.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4 pt-6 pb-4 sm:px-6 sm:pt-10">
      <main className="flex flex-col gap-5 sm:gap-6">
        <Card as="header" className="relative">
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
            <ThemeToggle />
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>

          <h1 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
            All Projects
          </h1>
          <p className="mt-2 text-[15px] leading-relaxed text-text-muted">
            {projects.length} projects, each with the full write-up. Client work
            is listed as a description only.
          </p>
        </Card>

        <ul className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug} className="flex">
              <Card as="article" className="flex w-full flex-col">
                <h2 className="text-xl font-semibold text-text">
                  {project.title}
                </h2>
                {project.org && (
                  <p className="mt-1 text-sm font-medium text-accent-text">
                    {project.org}
                  </p>
                )}

                <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
                  {project.summary}
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-text-muted marker:text-accent">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="Technologies"
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Chip>{tag}</Chip>
                    </li>
                  ))}
                </ul>

                {/* Pushed to the bottom so cards in a row line up. */}
                <div className="mt-auto pt-5">
                  {project.internal ? (
                    <p className="inline-flex items-center gap-1.5 text-sm text-text-muted">
                      <Lock
                        className="size-3.5 text-accent"
                        aria-hidden="true"
                      />
                      Internal company work, so there is no public demo or
                      source.
                    </p>
                  ) : (
                    project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        Visit project
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </a>
                    )
                  )}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
