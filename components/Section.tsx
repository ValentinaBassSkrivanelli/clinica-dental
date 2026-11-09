import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-linea py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-xl text-lg text-grafito/75">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
