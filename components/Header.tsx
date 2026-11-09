import { siteConfig, whatsappUrl } from "@/lib/config";

const links = [
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#primera-visita", label: "Primera visita" },
  { href: "#equipo", label: "Equipo" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#turno", label: "Turnos" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-linea bg-porcelana/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className="h-9 w-9 shrink-0"
          >
            <rect width="64" height="64" rx="14" fill="#1B2430" />
            <path
              d="M32 17c-4-3-12-2.500-12 6 0 5 2.500 7 3 13 .5 6 1.500 11 4.500 11 3 0 2.500-9 4.500-9s1.500 9 4.500 9c3 0 4-5 4.500-11 .5-6 3-8 3-13 0-8.500-8-9-12-6Z"
              fill="#F6F7F5"
            />
            <circle cx="45" cy="19" r="4" fill="#B04A5E" />
          </svg>
          <span className="font-display text-xl leading-none">{siteConfig.name}</span>
        </a>

        <nav aria-label="Principal" className="hidden gap-8 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-encia">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-encia px-5 py-2.5 text-sm font-medium text-white hover:bg-encia-oscura sm:inline-flex"
        >
          Pedir turno
        </a>
      </div>

      <nav aria-label="Secciones" className="border-t border-linea md:hidden">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto whitespace-nowrap px-5 py-3 text-sm sm:px-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
