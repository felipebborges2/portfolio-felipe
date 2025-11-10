import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Languages from "@/components/sections/Languages";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";


export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Languages />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
