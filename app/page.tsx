import Hero from "@/components/layouts/Hero";
import About from "@/components/layouts/About";
import Projects from "@/components/layouts/Projects";
import TechnicalExpertise from "@/components/layouts/TechnicalExpertise";
import Career from "@/components/layouts/Career";
import Contact from "@/components/layouts/Contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />

      <Projects />

      <TechnicalExpertise />
      <Career />
      <Contact />
    </main>
  );
}
