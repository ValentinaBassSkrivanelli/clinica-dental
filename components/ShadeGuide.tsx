"use client";

import { useState } from "react";
import { tratamientos } from "@/lib/config";

// Los tratamientos se muestran como una guía de tonos dental: las muestras de color
// que usa el dentista para elegir el color de un diente. Al tocar una, "se saca" de la guía
// y debajo aparece la información del tratamiento. El movimiento responde a la acción de la persona.
export default function ShadeGuide() {
  const [activo, setActivo] = useState(0);
  const t = tratamientos[activo];

  return (
    <div>
      <div className="-mx-5 overflow-x-auto px-5 pb-8 sm:mx-0 sm:px-0">
        <div className="min-w-[46rem] md:min-w-0">
          {/* Barra de acero de la que cuelgan las muestras */}
          <div
            aria-hidden="true"
            className="h-3 rounded-full bg-gradient-to-b from-[#93A3B3] to-acero"
          />
          <ul className="grid grid-cols-8 gap-2 md:gap-3">
            {tratamientos.map((item, i) => {
              const seleccionado = i === activo;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-pressed={seleccionado}
                    onClick={() => setActivo(i)}
                    style={{ backgroundColor: item.tono }}
                    className={`relative flex h-36 w-full items-end justify-center rounded-b-[2.5rem] rounded-t-md border border-linea px-1 pb-5 text-sm font-medium transition-transform duration-200 sm:h-44 ${
                      seleccionado
                        ? "translate-y-4 border-grafito/40 shadow-[0_10px_18px_-10px_rgba(27,36,48,0.45)]"
                        : "hover:translate-y-1"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-linea bg-porcelana"
                    />
                    {item.nombre}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        aria-live="polite"
        className="border border-linea bg-white p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-14"
      >
        <div>
          <h3 className="font-display text-3xl tracking-tight">{t.nombre}</h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-grafito/80">{t.resumen}</p>
          <a
            href="#turno"
            className="mt-6 inline-block font-medium text-encia underline underline-offset-4 hover:text-encia-oscura"
          >
            Pedir turno para {t.nombre.toLowerCase()}
          </a>
        </div>

        <dl className="mt-8 grid gap-5 lg:mt-0">
          <div className="border-t border-linea pt-4">
            <dt className="text-sm text-acero">Cuándo conviene</dt>
            <dd className="mt-1">{t.cuando}</dd>
          </div>
          <div className="border-t border-linea pt-4">
            <dt className="text-sm text-acero">Cuánto lleva</dt>
            <dd className="mt-1">
              {t.duracion}. Visitas: {t.visitas.toLowerCase()}.
            </dd>
          </div>
          <div className="border-t border-linea pt-4">
            <dt className="text-sm text-acero">Qué vas a sentir</dt>
            <dd className="mt-1">{t.molestia}</dd>
          </div>
        </dl>
      </div>

      <p className="mt-4 text-sm text-acero">
        Es información general. El profesional define el tratamiento y los tiempos después
        de revisarte.
      </p>
    </div>
  );
}
