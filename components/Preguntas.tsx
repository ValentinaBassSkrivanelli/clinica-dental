import Section from "./Section";
import { preguntas } from "@/lib/config";

export default function Preguntas() {
  return (
    <Section id="preguntas" title="Preguntas frecuentes">
      <div className="max-w-3xl border-t border-linea">
        {preguntas.map((p) => (
          <details key={p.pregunta} className="group border-b border-linea">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-display text-xl">
              {p.pregunta}
              <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                <span className="absolute inset-x-0 top-1/2 h-px bg-grafito" />
                <span className="absolute inset-y-0 left-1/2 w-px bg-grafito transition-transform group-open:scale-y-0" />
              </span>
            </summary>
            <p className="max-w-2xl pb-6 leading-relaxed text-grafito/80">{p.respuesta}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
