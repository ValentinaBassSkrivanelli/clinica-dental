import Section from "./Section";
import { equipo } from "@/lib/config";

export default function Equipo() {
  return (
    <Section
      id="equipo"
      title="Quién te va a atender"
      intro="Tres profesionales, cada uno con su especialidad. Desde la primera visita sabés con quién vas a trabajar."
    >
      <div className="grid gap-10 md:grid-cols-3">
        {equipo.map((persona) => (
          <article key={persona.nombre} className="border-t border-linea pt-5">
            <h3 className="font-display text-2xl">{persona.nombre}</h3>
            <p className="mt-1 text-sm font-medium text-encia">{persona.especialidad}</p>
            <p className="text-sm text-acero">Matrícula {persona.matricula}</p>
            <p className="mt-4 text-grafito/75">{persona.bio}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
