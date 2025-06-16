
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a dedicated Electrical Engineer with a passion for creating innovative 
              solutions that make a real-world impact. My expertise spans across power systems, 
              control systems, and embedded electronics.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Throughout my career, I've worked on diverse projects ranging from renewable 
              energy systems to industrial automation. I thrive on solving complex technical 
              challenges and continuously learning new technologies.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not designing circuits or coding, you can find me exploring the latest 
              advancements in IoT and sustainable technology, or working on personal electronics 
              projects in my home lab.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-700">Certifications</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-700">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
