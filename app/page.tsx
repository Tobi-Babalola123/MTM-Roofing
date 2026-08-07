import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import WhyMTM from "@/components/sections/WhyMTM";
import Projects from "@/components/sections/Projects";
import FinalCTA from "@/components/sections/FinalCTA";
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyMTM />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <FAQ />
      <FinalCTA />

      <Footer />

      <main></main>
    </>
  );
}
