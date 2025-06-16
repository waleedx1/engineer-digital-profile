
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Master of Science in Electrical Engineering",
      school: "Stanford University",
      year: "2018-2020",
      gpa: "3.8/4.0",
      focus: "Power Electronics & Renewable Energy"
    },
    {
      degree: "Bachelor of Science in Electrical Engineering",
      school: "University of California, Berkeley",
      year: "2014-2018",
      gpa: "3.7/4.0",
      focus: "Control Systems & Signal Processing"
    }
  ];

  const certifications = [
    "Professional Engineer (PE) License - California",
    "Certified Energy Manager (CEM)",
    "PMP - Project Management Professional"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                  <p className="text-blue-600 font-semibold mb-2">{edu.school}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 mb-2">
                    <span>{edu.year}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Focus:</strong> {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <Award className="mr-3 text-blue-600" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex items-center">
                  <BookOpen className="text-green-600 mr-4 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Continuing Education</h4>
              <p className="text-gray-700">
                Regularly attending workshops, conferences, and online courses to stay current 
                with the latest technologies in electrical engineering, renewable energy, and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
