import Section from "./Section";
import TurnoForm from "./TurnoForm";
import { mapsUrl, siteConfig, whatsappUrl } from "@/lib/config";

export default function Contacto() {
  return (
    <Section
      id="turno"
      title="Pedí tu turno"
      intro="Escribinos por WhatsApp o dejá tus datos acá. Te respondemos dentro de un día hábil para confirmar día y hora."
    >
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <dl className="grid content-start gap-6 text-sm">
          <div>
            <dt className="text-acero">WhatsApp</dt>
            <dd className="mt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-encia underline underline-offset-4"
              >
                {siteConfig.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-acero">Teléfono</dt>
            <dd className="mt-1 text-base">
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
            </dd>
          </div>
          <div>
            <dt className="text-acero">Correo</dt>
            <dd className="mt-1 text-base">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </dd>
          </div>
          <div>
            <dt className="text-acero">Dirección</dt>
            <dd className="mt-1 text-base">
              {siteConfig.address}
              <br />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-encia underline underline-offset-4"
              >
                Ver en Google Maps
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-acero">Horarios</dt>
            <dd className="mt-1 text-base">
              {siteConfig.hours.map((h) => (
                <p key={h.dias}>
                  {h.dias}: {h.horas}
                </p>
              ))}
            </dd>
          </div>
        </dl>

        <TurnoForm />
      </div>
    </Section>
  );
}
