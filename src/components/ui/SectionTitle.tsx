type SectionTitleProps = {
  id: string;
  children: React.ReactNode;
};

export function SectionTitle({ id, children }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className="mb-4 flex items-center gap-3 text-xl font-semibold text-text"
    >
      <span
        className="inline-block h-5 w-1 rounded-full bg-accent"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}
