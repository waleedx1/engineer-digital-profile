
import { ArrowDown, Mail, LinkedinIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            alt="Professional headshot"
            className="w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          John <span className="text-blue-600">Smith</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
          Electrical Engineer
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Passionate about designing innovative electrical systems and circuits. 
          Specializing in power electronics, automation, and renewable energy solutions 
          with 5+ years of industry experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </Button>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
            >
              <LinkedinIcon size={24} />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
            >
              <GithubIcon size={24} />
            </a>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};
