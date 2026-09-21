import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  external?: boolean;
  /** Ask the browser to save the file instead of navigating to it. */
  download?: boolean;
};

export function LinkButton({
  href,
  children,
  variant = "outline",
  icon,
  external = false,
  download = false,
}: LinkButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-px active:translate-y-0";
  const variants = {
    primary:
      "bg-primary text-on-primary shadow-sm hover:bg-primary-hover",
    outline:
      "border border-border bg-surface text-text hover:border-primary hover:text-primary",
  };
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(download ? { download: "" } : {})}
      {...externalProps}
    >
      {icon}
      <span>{children}</span>
      {external && (
        <ExternalLink className="size-3.5 opacity-70" aria-hidden="true" />
      )}
    </a>
  );
}
