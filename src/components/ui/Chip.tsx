type ChipProps = {
  children: React.ReactNode;
  tone?: "default" | "accent";
};

export function Chip({ children, tone = "default" }: ChipProps) {
  const tones = {
    default:
      "border-border bg-surface-muted text-text hover:border-primary/40",
    accent: "border-accent/40 bg-accent-soft text-text hover:border-accent",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
