"use client";

import { useState, type FormEvent } from "react";
import { tratamientos } from "@/lib/config";

type Status = "idle" | "sending" | "ok" | "error";

const campo =
  "w-full rounded-md border border-linea bg-white px-3 py-3 text-base placeholder:text-acero/70 focus:border-encia";

export default function TurnoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/turnos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(
          json.error ??
            "No pudimos enviar tu pedido. Revisá los datos e intentá de nuevo, o escribinos por WhatsApp.",
        );
        return;
      }

      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
      setError("No pudimos conectar con el servidor. Intentá de nuevo o escribinos por WhatsApp.");
    }
  }

  if (status === "ok") {
    return (
      <div role="status" className="border border-linea bg-white p-8">
        <h3 className="font-display text-2xl">Recibimos tu pedido de turno</h3>
        <p className="mt-3 max-w-md text-grafito/80">
          Te escribimos por WhatsApp o te llamamos dentro de un día hábil para confirmar día y
          hora.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-medium text-encia underline underline-offset-4"
        >
          Pedir otro turno
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 border border-linea bg-white/60 p-6 sm:p-8">
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
          Nombre y apellido
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          className={campo}
        />
      </div>

      <div>
        <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium">
          Teléfono o WhatsApp
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          maxLength={20}
          autoComplete="tel"
          placeholder="Con código de área, por ejemplo 387 000 0000"
          className={campo}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="motivo" className="mb-1.5 block text-sm font-medium">
            Motivo de la consulta
          </label>
          <select id="motivo" name="motivo" defaultValue="" className={campo}>
            <option value="">Control o no estoy seguro</option>
            {tratamientos.map((t) => (
              <option key={t.id} value={t.nombre}>
                {t.nombre}
              </option>
            ))}
            <option value="Urgencia">Tengo dolor o una urgencia</option>
          </select>
        </div>

        <div>
          <label htmlFor="franja" className="mb-1.5 block text-sm font-medium">
            Horario que te queda mejor
          </label>
          <select id="franja" name="franja" defaultValue="" className={campo}>
            <option value="">Me da igual</option>
            <option value="Mañana">A la mañana</option>
            <option value="Tarde">A la tarde</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
          ¿Querés contarnos algo más? (opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          maxLength={1000}
          placeholder="Por ejemplo: desde cuándo te molesta, o la obra social que tenés"
          className={campo}
        />
      </div>

      {/* Campo trampa para bots: las personas no lo ven ni lo completan. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="empresa">Empresa</label>
        <input id="empresa" name="empresa" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="border-l-2 border-encia bg-encia/5 px-4 py-3 text-sm text-encia-oscura"
        >
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-encia px-7 py-3.5 font-medium text-white hover:bg-encia-oscura disabled:opacity-60"
        >
          {status === "sending" ? "Enviando pedido" : "Pedir turno"}
        </button>
        <p className="max-w-xs text-xs text-acero">
          Usamos tus datos solo para responder este pedido.
        </p>
      </div>
    </form>
  );
}
