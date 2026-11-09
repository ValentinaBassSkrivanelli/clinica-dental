// Todo el contenido del sitio vive acá. Para adaptarlo a otra clínica,
// editá este archivo y los colores de tailwind.config.ts.

export interface Tratamiento {
  id: string;
  nombre: string;
  // Color del "tono" en la guía, de más claro a más oscuro, como una guía de color dental real
  tono: string;
  resumen: string;
  cuando: string;
  visitas: string;
  duracion: string;
  molestia: string;
}

export interface Profesional {
  nombre: string;
  especialidad: string;
  matricula: string;
  bio: string;
}

export interface Paso {
  titulo: string;
  texto: string;
}

export interface Opinion {
  texto: string;
  autor: string;
  tratamiento: string;
}

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

export const siteConfig = {
  // true: muestra el aviso de proyecto de demostración y pide a los buscadores no indexar el sitio.
  // Ponelo en false cuando el sitio sea de un cliente real.
  demo: true,

  name: "Clínica Dental Lerma",
  short: "Dental Lerma",
  city: "Salta",
  region: "Salta, Argentina",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Clínica dental en Salta. Limpieza, caries, blanqueamiento, ortodoncia, implantes y odontología para niños. Primero revisamos, después te explicamos y te damos el presupuesto.",

  phoneDisplay: "+54 387 000-0000",
  phoneHref: "+543870000000",
  // Formato internacional sin signos. Para celulares argentinos: 549 + código de área + número
  whatsapp: "5493870000000",
  whatsappMessage: "Hola, quisiera pedir un turno.",
  email: "turnos@clinica-ejemplo.com.ar",
  address: "Calle Ejemplo 456, Salta Capital",
  hours: [
    { dias: "Lunes a viernes", horas: "8:30 a 12:30 y 15:00 a 19:30" },
    { dias: "Sábados", horas: "9:00 a 13:00, con turno" },
  ],
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address,
)}`;

// Los ocho tratamientos se muestran como tonos de una guía de color dental.
// La información es general: cada caso lo define el profesional después de revisar.
export const tratamientos: Tratamiento[] = [
  {
    id: "limpieza",
    nombre: "Limpieza",
    tono: "#FBF9F3",
    resumen:
      "Sacamos el sarro y las manchas que el cepillado no elimina, y revisamos cómo están las encías.",
    cuando: "Una vez cada seis meses, o si las encías te sangran al cepillarte.",
    visitas: "Una",
    duracion: "Unos 40 minutos",
    molestia: "Casi nunca duele. Puede haber sensibilidad leve.",
  },
  {
    id: "caries",
    nombre: "Caries",
    tono: "#F7F2E6",
    resumen:
      "Limpiamos la parte dañada y la rellenamos con resina del color de tu diente.",
    cuando:
      "Si ves una mancha oscura, sentís dolor con lo dulce o lo frío, o se te rompió un trozo.",
    visitas: "Una por pieza",
    duracion: "De 30 a 60 minutos",
    molestia: "Se trabaja con anestesia local.",
  },
  {
    id: "blanqueo",
    nombre: "Blanqueo",
    tono: "#F2EBD9",
    resumen:
      "Aclaramos el color de tus dientes con un gel profesional, cuidando el esmalte y las encías.",
    cuando:
      "Si tus dientes están sanos y querés aclararlos. Antes revisamos que no haya caries ni encías inflamadas.",
    visitas: "De una a tres",
    duracion: "Una a tres sesiones",
    molestia: "Puede haber sensibilidad pasajera.",
  },
  {
    id: "ortodoncia",
    nombre: "Ortodoncia",
    tono: "#EDE3CC",
    resumen:
      "Alineamos los dientes con brackets metálicos, brackets estéticos o alineadores transparentes.",
    cuando: "Dientes apiñados o separados, o mordida desalineada, a cualquier edad.",
    visitas: "Un control por mes",
    duracion: "De 12 a 24 meses, según el caso",
    molestia: "Hay molestias los primeros días después de cada ajuste.",
  },
  {
    id: "implantes",
    nombre: "Implantes",
    tono: "#E8DCC0",
    resumen:
      "Reemplazamos un diente perdido con una raíz de titanio y una corona que se ve y funciona como un diente propio.",
    cuando:
      "Cuando falta una pieza y el hueso y las encías están sanos. Lo evaluamos con una radiografía.",
    visitas: "De tres a cuatro",
    duracion: "De 3 a 6 meses hasta colocar la corona",
    molestia: "La cirugía se hace con anestesia local.",
  },
  {
    id: "endodoncia",
    nombre: "Endodoncia",
    tono: "#E3D5B6",
    resumen:
      "Tratamos el nervio de un diente infectado para conservarlo en lugar de extraerlo.",
    cuando: "Dolor fuerte y espontáneo, dolor que no te deja dormir o una infección.",
    visitas: "De una a tres",
    duracion: "Una a tres visitas",
    molestia: "Con anestesia, el tratamiento no duele.",
  },
  {
    id: "ninos",
    nombre: "Niños",
    tono: "#DECEAC",
    resumen:
      "Controles, selladores y cuidado de los dientes de leche, con consultas cortas donde explicamos cada paso antes de hacerlo.",
    cuando:
      "Desde que sale el primer diente. Se recomienda una primera visita alrededor del año.",
    visitas: "Un control cada seis meses",
    duracion: "De 20 a 30 minutos",
    molestia: "Le mostramos cada instrumento antes de usarlo.",
  },
  {
    id: "estetica",
    nombre: "Estética",
    tono: "#D8C7A3",
    resumen:
      "Carillas y coronas para dientes desgastados, astillados o con un color que el blanqueo no corrige.",
    cuando: "Si te molesta la forma, el tamaño o el color de uno o más dientes.",
    visitas: "De dos a tres",
    duracion: "De 2 a 3 semanas",
    molestia: "Se hace con anestesia local durante el tallado.",
  },
];

export const pasos: Paso[] = [
  {
    titulo: "Charlamos",
    texto:
      "Nos contás qué te molesta, qué tratamientos tuviste y hace cuánto no ibas al dentista. Sin apuro.",
  },
  {
    titulo: "Revisamos",
    texto:
      "Miramos dientes, encías y mordida. Si hace falta, sacamos una radiografía en el mismo consultorio.",
  },
  {
    titulo: "Te mostramos el plan",
    texto:
      "Te explicamos qué hay que hacer, en qué orden y cuánto cuesta. Vos decidís cómo seguir.",
  },
  {
    titulo: "Empezamos cuando quieras",
    texto:
      "Si hay dolor, lo resolvemos ese mismo día. Si no, te damos el próximo turno cuando te quede cómodo.",
  },
];

// Personas ficticias: reemplazar por el equipo real de la clínica.
export const equipo: Profesional[] = [
  {
    nombre: "Dra. Camila Torres",
    especialidad: "Odontología general y estética",
    matricula: "0000",
    bio: "Atiende controles, caries y blanqueamientos. Siempre te muestra en una foto qué ve antes de proponer un tratamiento.",
  },
  {
    nombre: "Dr. Mateo Ibarra",
    especialidad: "Ortodoncia e implantes",
    matricula: "0000",
    bio: "Planifica cada caso con escaneo digital y te enseña cómo va a quedar la sonrisa antes de empezar.",
  },
  {
    nombre: "Dra. Sofía Benítez",
    especialidad: "Odontopediatría y endodoncia",
    matricula: "0000",
    bio: "Atiende a niños y adolescentes, y resuelve dolores fuertes con tratamientos de conducto.",
  },
];

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Va a dolerme?",
    respuesta:
      "Trabajamos con anestesia local y esperamos a que haga efecto antes de empezar. Si en algún momento sentís molestia, levantás la mano y paramos.",
  },
  {
    pregunta: "¿Trabajan con obras sociales y prepagas?",
    respuesta:
      "Trabajamos con algunas. Escribinos con el nombre de la tuya y tu número de afiliado, y te confirmamos qué cubre antes de que vengas.",
  },
  {
    pregunta: "¿Cuánto cuesta la primera consulta?",
    respuesta:
      "El valor de la consulta de diagnóstico te lo informamos cuando pedís el turno. Si el tratamiento sigue después, el presupuesto completo te lo damos por escrito antes de empezar.",
  },
  {
    pregunta: "¿Puedo pagar en cuotas?",
    respuesta:
      "Dividimos los tratamientos largos en etapas para que puedas organizar los pagos. Consultanos las opciones al recibir el presupuesto.",
  },
  {
    pregunta: "¿Atienden urgencias?",
    respuesta:
      "Sí, dentro del horario del consultorio. Llamanos y te damos el primer turno disponible del día. Si tenés hinchazón que te dificulta respirar o tragar, andá directamente a una guardia.",
  },
  {
    pregunta: "¿Desde qué edad puedo traer a mi hijo?",
    respuesta:
      "Desde que sale el primer diente. Se recomienda una primera visita alrededor del año, para que conozca el consultorio y revisemos cómo crecen sus dientes.",
  },
];

// Testimonios ficticios: reemplazar por opiniones reales, con permiso de cada paciente.
export const opiniones: Opinion[] = [
  {
    texto:
      "Hacía ocho años que no iba al dentista porque me daba miedo. Me explicaron todo antes de tocarme y salí sin haber sentido nada.",
    autor: "Romina G.",
    tratamiento: "Limpieza y arreglo de caries",
  },
  {
    texto:
      "Mi hija de cuatro años entró sola al consultorio. Le mostraron cada cosa y se fue pidiendo volver.",
    autor: "Pablo S.",
    tratamiento: "Control de niños",
  },
  {
    texto:
      "Me dieron el presupuesto por escrito y por etapas. Pude organizarme y no hubo sorpresas al final.",
    autor: "Andrea V.",
    tratamiento: "Implante",
  },
];
