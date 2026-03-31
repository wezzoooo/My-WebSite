import About from "@/components/aboutMeSection/about";
import Contact from "@/components/contactMeSection/contact";
import CvButton from "@/components/CVBtn/CvButton";
import Hero from "@/components/heroSection/hero";
import Navbar from "@/components/navbar/navbar";
import Projects from "@/components/projectsSection/projects";
import Skills from "@/components/skillsSection/skills";

export default function Home() {
  return (
    <main className="relative">

      {/* Navbar */}
      <Navbar />
      <CvButton />

      {/* Content */}
      <div className="flex flex-col gap-10 md:gap-16 pt-16 md:pt-24">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </div>

    </main>
  );
}
