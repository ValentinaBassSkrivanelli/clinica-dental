import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="on-dark bg-grafito text-porcelana">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-porcelana/70">{siteConfig.address}</p>
          </div>
          <a href="#top" className="text-sm underline underline-offset-4">
            Volver al inicio
          </a>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-porcelana/60">
          La información de este sitio es general y no reemplaza una consulta profesional. Cada
          tratamiento se define después de una revisión.
        </p>

        {siteConfig.demo && (
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-porcelana/60">
            Proyecto de demostración: la clínica, los profesionales, los datos de contacto y los
            testimonios son ficticios.
          </p>
        )}

        <p className="mt-6 text-xs text-porcelana/50">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
