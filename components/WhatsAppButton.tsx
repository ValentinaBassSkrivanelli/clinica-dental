import { whatsappUrl } from "@/lib/config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir turno por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-grafito px-4 py-3 text-sm font-medium text-porcelana shadow-lg hover:bg-acero"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M9 9.2c.3 2.4 2.7 4.8 5.6 5.6l1.2-1.4-2-1-.9.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.9-1-2L9 9.2Z" />
      </svg>
      WhatsApp
    </a>
  );
}
