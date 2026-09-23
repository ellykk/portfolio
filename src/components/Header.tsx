import { FileText, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  // The portraits have transparent backgrounds, so the tint behind them is
  // what keeps the subject readable in both themes.
  const photoClass =
    "size-36 shrink-0 rounded-2xl border border-border bg-primary-soft object-cover sm:size-44";

  return (
    <Card as="header" className="relative">
      <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        {/*
          Both photos are rendered and swapped with CSS, so the right one is
          already in place on first paint. The hidden one is `display: none`,
          which keeps it out of the accessibility tree.
        */}
        <Image
          src={profile.photo}
          alt={profile.photoAlt}
          width={384}
          height={384}
          quality={95}
          priority
          className={`${photoClass} ${profile.photoDark ? "dark:hidden" : ""}`}
        />
        {profile.photoDark && (
          <Image
            src={profile.photoDark}
            alt={profile.photoAlt}
            width={384}
            height={384}
            quality={95}
            priority
            className={`hidden ${photoClass} dark:block`}
          />
        )}

        <div className="min-w-0 flex-1 pr-12 sm:pr-14">
          <h1 className="text-3xl font-semibold text-text sm:text-4xl">
            {profile.displayName}
          </h1>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-text-muted">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="mt-2 text-base font-medium text-primary">
            {profile.title}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <LinkButton
              href={`mailto:${profile.email}`}
              variant="primary"
              icon={<Mail className="size-4" aria-hidden="true" />}
            >
              Send Email
            </LinkButton>
            <LinkButton
              href={profile.linkedin}
              external
              icon={<LinkedInIcon className="size-4" />}
            >
              LinkedIn
            </LinkButton>
            <LinkButton
              href={profile.github}
              external
              icon={<GitHubIcon className="size-4" />}
            >
              GitHub
            </LinkButton>
            <LinkButton
              href={profile.resume}
              external
              download
              icon={<FileText className="size-4" aria-hidden="true" />}
            >
              Resume
            </LinkButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
