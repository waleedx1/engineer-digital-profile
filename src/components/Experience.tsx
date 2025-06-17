
import { Briefcase, MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Electrical Engineer",
      company: "Tesla Energy",
      location: "Palo Alto, CA",
      period: "2021 - Present",
      description: "Leading design and development of power electronics systems for energy storage solutions. Managing cross-functional teams and overseeing project delivery for utility-scale battery systems.",
      achievements: [
        "Designed power conversion systems improving efficiency by 15%",
        "Led team of 8 engineers on $50M energy storage project",
        "Reduced system costs by 20% through innovative circuit design"
      ]
    },
    {
      title: "Electrical Engineer",
      company: "General Electric",
      location: "San Francisco, CA",
      period: "2019 - 2021",
      description: "Developed control systems for renewable energy applications and industrial automation. Specialized in grid integration and power quality solutions.",
      achievements: [
        "Implemented SCADA systems for 10+ wind farms",
        "Optimized grid connection protocols reducing downtime by 30%",
        "Mentored junior engineers and led technical training sessions"
      ]
    },
    {
      title: "Junior Electrical Engineer",
      company: "Schneider Electric",
      location: "Fremont, CA",
      period: "2018 - 2019",
      description: "Supported design and testing of electrical protection systems. Gained hands-on experience with power system analysis and circuit protection coordination.",
      achievements: [
        "Conducted power system studies for industrial clients",
        "Developed automated testing procedures saving 25% time",
        "Collaborated on protection system upgrades for critical facilities"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line - centered */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-300 hidden lg:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot - centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
              
              {/* Content */}
              <div className={`lg:w-1/2 ${
                index % 2 === 0 ? 'lg:ml-auto lg:pl-12' : 'lg:pr-12'
              }`}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                    </div>
                    <Briefcase className="text-blue-600 flex-shrink-0 ml-4" size={24} />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
