import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

export function Footer() {
  const year = new Date().getFullYear();
  const iconClass =
    "inline-flex size-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface-muted hover:text-primary";

  return (
    <footer className="flex flex-col items-center justify-between gap-3 px-2 py-6 text-sm text-text-muted sm:flex-row">
      <p>
        <span className="font-medium text-text">{profile.fullName}</span>
        <span aria-hidden="true"> · </span>
        <span className="sr-only">, </span>© {year}
      </p>
      <nav aria-label="Social links" className="flex gap-1">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className={iconClass}
        >
          <GitHubIcon className="size-[18px]" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className={iconClass}
        >
          <LinkedInIcon className="size-[18px]" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Send email"
          className={iconClass}
        >
          <Mail className="size-[18px]" aria-hidden="true" />
        </a>
      </nav>
    </footer>
  );
}
