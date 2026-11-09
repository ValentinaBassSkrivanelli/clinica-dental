# Clínica Dental Lerma

Sitio web para una clínica dental de Salta, hecho con Next.js (App Router), TypeScript y Tailwind CSS 3. Es un proyecto de demostración para portafolio: la clínica, los profesionales, los teléfonos y los testimonios son ficticios.

## Cómo correrlo

Necesitás Node.js 18.18 o superior.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrí http://localhost:3000.

## Qué incluye

- **Guía de tonos de tratamientos:** los ocho tratamientos se muestran como las muestras de color que usan los dentistas. Al tocar una "se saca" de la guía y aparece cuándo conviene, cuánto lleva y qué se siente (`components/ShadeGuide.tsx`)
- Aviso de urgencias con teléfono, ubicado justo después del inicio
- Cómo es la primera visita, equipo, opiniones y preguntas frecuentes
- Formulario de turnos con motivo y horario preferido, que envía mails (API route en Node)
- Botón flotante de WhatsApp
- Imagen para compartir el link por WhatsApp (`app/opengraph-image.tsx`)
- Ícono de pestaña, metadatos SEO y datos estructurados `Dentist`

## Cómo personalizarlo

| Qué cambiar | Dónde |
| --- | --- |
| Nombre, teléfono, WhatsApp, dirección, horarios | `lib/config.ts` (`siteConfig`) |
| Tratamientos (texto y tono de color), equipo, pasos, preguntas, opiniones | `lib/config.ts` |
| Colores | `tailwind.config.ts` |
| Tipografías | `app/layout.tsx` (Bricolage Grotesque y Figtree) |
| Textos del inicio | `components/Hero.tsx` |

### Para usarlo con un cliente real

1. En `lib/config.ts` poné `demo: false`. Se oculta el aviso de demostración, se permite que Google indexe el sitio y se activan los datos estructurados.
2. Reemplazá equipo, matrículas y testimonios por datos reales. Los testimonios necesitan permiso de cada paciente.
3. **Revisá con la clínica todo el contenido de salud.** Las descripciones de tratamientos, tiempos, cobertura de obras sociales y promesas como "con anestesia no duele" son textos generales de ejemplo. Cada clínica tiene que confirmarlos y ajustarlos a su forma de trabajar y a la normativa de publicidad de su colegio profesional.
4. Configurá `NEXT_PUBLIC_SITE_URL` con el dominio final.

## Formulario de turnos

El formulario envía un POST a `app/api/turnos/route.ts`, que valida los datos, frena bots con un campo trampa y un límite por IP, y manda el mail con [Resend](https://resend.com). Los pedidos marcados como urgencia llevan `URGENCIA` en el asunto.

1. Creá una cuenta en Resend y una API key.
2. Completá en `.env.local`: `RESEND_API_KEY` y `CONTACT_TO_EMAIL`.
3. Para enviar desde tu propio dominio, verificalo en Resend y completá `CONTACT_FROM_EMAIL`.

Sin esas variables, en desarrollo el formulario responde "ok" y muestra el aviso en la consola. En producción devuelve un error para que no se pierdan pedidos sin que nadie se entere.

## Publicarlo en Vercel

1. Subí la carpeta a un repositorio de GitHub.
2. En Vercel, elegí "Add New Project" e importá el repositorio.
3. Cargá las variables de entorno de `.env.example`.
4. Desplegá. Cada cambio que subas a GitHub se publica solo.

## Checklist antes de mostrarlo en tu portafolio

- Correr Lighthouse (Chrome DevTools) en celular y guardar la captura de los puntajes
- Probar la guía de tratamientos en un celular real, deslizando hacia los costados
- Probar el formulario con Resend configurado
- Sacar capturas de escritorio y celular para tu página de proyectos
- Escribir 3 líneas sobre el problema que resuelve: una clínica que quiere que los pacientes pidan turno sin miedo ni dudas sobre el costo
