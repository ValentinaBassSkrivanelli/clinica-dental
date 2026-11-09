import Section from "./Section";
import { opiniones } from "@/lib/config";

export default function Opiniones() {
  const [principal, ...otras] = opiniones;

  return (
    <Section id="opiniones" title="Lo que cuentan nuestros pacientes">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <blockquote>
          <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            “{principal.texto}”
          </p>
          <footer className="mt-6 text-sm text-acero">
            <span className="font-medium text-grafito">{principal.autor}</span>,{" "}
            {principal.tratamiento}
          </footer>
        </blockquote>

        <div className="grid gap-8">
          {otras.map((opinion) => (
            <blockquote key={opinion.autor} className="border-t border-linea pt-5">
              <p className="leading-relaxed text-grafito/85">“{opinion.texto}”</p>
              <footer className="mt-3 text-sm text-acero">
                <span className="font-medium text-grafito">{opinion.autor}</span>,{" "}
                {opinion.tratamiento}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
