import ShadeGuide from "./ShadeGuide";
import { siteConfig, whatsappUrl } from "@/lib/config";

export default function Hero() {
  return (
    <section className="pb-20 pt-12 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Ir al dentista puede ser una visita tranquila.
          </h1>
          <div>
            <p className="text-lg leading-relaxed text-grafito/80">
              En {siteConfig.name} primero te revisamos, después te explicamos qué
              encontramos y recién ahí te damos el presupuesto. Vos decidís cómo seguir.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-encia px-6 py-3.5 font-medium text-white hover:bg-encia-oscura"
              >
                Pedir turno por WhatsApp
              </a>
              <a
                href="#tratamientos"
                className="rounded-full border border-grafito/30 px-6 py-3.5 font-medium hover:border-grafito"
              >
                Ver tratamientos
              </a>
            </div>
          </div>
        </div>

        <div id="tratamientos" className="mt-16 lg:mt-20">
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            Elegí un tratamiento y mirá cómo es
          </h2>
          <p className="mb-8 mt-2 max-w-xl text-grafito/75">
            Cada muestra es como las que usamos para elegir el color de un diente. Tocá una
            para ver cuánto lleva y qué vas a sentir.
          </p>
          <ShadeGuide />
        </div>
      </div>
    </section>
  );
}
