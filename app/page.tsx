import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Urgencias from "@/components/Urgencias";
import PrimeraVisita from "@/components/PrimeraVisita";
import Equipo from "@/components/Equipo";
import Opiniones from "@/components/Opiniones";
import Preguntas from "@/components/Preguntas";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="contenido">
        <Hero />
        <Urgencias />
        <PrimeraVisita />
        <Equipo />
        <Opiniones />
        <Preguntas />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
