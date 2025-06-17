
import { Microscope, Calendar, MapPin, Trophy } from "lucide-react";

export const Research = () => {
  const researchProjects = [
    {
      title: "Smart Grid Optimization Using Machine Learning",
      institution: "Stanford University - Power Systems Lab",
      period: "Sep 2019 - May 2020",
      supervisor: "Dr. Sarah Johnson",
      description: "Developed machine learning algorithms to optimize power distribution in smart grid networks, focusing on renewable energy integration and load balancing.",
      achievements: [
        "Improved grid efficiency by 12% through predictive load forecasting",
        "Published findings in IEEE Power & Energy Society Conference",
        "Developed Python-based simulation framework adopted by 3 other research groups"
      ],
      technologies: ["Python", "TensorFlow", "MATLAB", "Power System Simulation"]
    },
    {
      title: "Wireless Power Transfer for Electric Vehicles",
      institution: "UC Berkeley - Electric Vehicle Research Center",
      period: "Jan 2017 - Dec 2017",
      supervisor: "Prof. Michael Chen",
      description: "Investigated high-efficiency wireless charging systems for electric vehicles, focusing on coil design optimization and power transfer efficiency.",
      achievements: [
        "Achieved 85% power transfer efficiency in prototype system",
        "Designed novel coil geometry reducing electromagnetic interference by 30%",
        "Presented research at International Conference on Wireless Power Transfer"
      ],
      technologies: ["ANSYS Maxwell", "COMSOL", "PCB Design", "RF Electronics"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Research Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to cutting-edge research in electrical engineering and power systems
          </p>
        </div>
        
        <div className="space-y-12">
          {researchProjects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{project.institution}</p>
                  <p className="text-gray-600 mb-2">
                    <strong>Research Supervisor:</strong> {project.supervisor}
                  </p>
                </div>
                <div className="flex items-center text-blue-600 ml-4">
                  <Microscope size={32} />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {project.period}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Trophy size={20} className="mr-2 text-yellow-600" />
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-600 flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-white/70 text-gray-700 px-3 py-1 rounded-full text-sm border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
