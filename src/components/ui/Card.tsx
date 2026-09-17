import type { ComponentPropsWithoutRef, ElementType } from "react";

type CardProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Card<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: CardProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={`rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-black/[0.03] transition-colors dark:shadow-none sm:p-7 ${className}`}
      {...props}
    />
  );
}
