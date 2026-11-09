import { siteConfig } from "@/lib/config";

export default function Urgencias() {
  return (
    <section aria-labelledby="urgencias-titulo" className="bg-encia/10 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 id="urgencias-titulo" className="font-display text-2xl tracking-tight sm:text-3xl">
            ¿Dolor fuerte, hinchazón o un golpe en un diente?
          </h2>
          <p className="mt-3 max-w-xl text-grafito/80">
            Llamanos y te damos el primer turno disponible del día, dentro del horario del
            consultorio. Si la hinchazón te dificulta respirar o tragar, andá directamente a una
            guardia.
          </p>
        </div>
        <div>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="inline-block rounded-full bg-grafito px-7 py-4 text-lg font-medium text-porcelana hover:bg-black"
          >
            Llamar al {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
