
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Coursework } from "@/components/Coursework";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { Publications } from "@/components/Publications";
import { Portfolio } from "@/components/Portfolio";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Coursework />
      <Experience />
      <Research />
      <Publications />
      <Portfolio />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default Index;
