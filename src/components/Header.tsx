import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <Card as="header" className="relative">
      <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src={profile.photo}
          alt={profile.photoAlt}
          width={128}
          height={128}
          priority
          className="size-28 shrink-0 rounded-2xl border border-border object-cover sm:size-32"
        />

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
          </div>
        </div>
      </div>
    </Card>
  );
}
