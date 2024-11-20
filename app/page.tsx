import Hero from "@/app/components/herosection/page";
import About from "@/app/components/about/page";
import Skills from "@/app/components/skills/page";
import Project from "@/app/components/portfolio/page";
import ContactMe from "@/app/components/contact/page";

export default function Home() {

  return (
    <div>

      <Hero />
      <About />
      <Skills />
      <Project />
      <ContactMe />

    </div>
  );
}
