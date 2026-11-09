import Section from "./Section";
import { pasos } from "@/lib/config";

export default function PrimeraVisita() {
  return (
    <Section
      id="primera-visita"
      title="Cómo es tu primera visita"
      intro="Dura alrededor de una hora y no empezamos ningún tratamiento sin que lo hayas entendido y aceptado."
    >
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {pasos.map((paso, i) => (
          <li key={paso.titulo} className="border-t-2 border-grafito pt-5">
            <span className="font-display text-3xl text-encia">{i + 1}</span>
            <h3 className="mt-3 font-display text-xl">{paso.titulo}</h3>
            <p className="mt-2 text-grafito/75">{paso.texto}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
