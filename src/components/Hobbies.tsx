
import { Camera, Gamepad2, Plane, Music, Mountain, Code2 } from "lucide-react";

export const Hobbies = () => {
  const hobbies = [
    {
      title: "Electronics Projects",
      icon: Code2,
      description: "Building Arduino and Raspberry Pi projects, from home automation systems to IoT devices",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Photography",
      icon: Camera,
      description: "Capturing landscapes and urban architecture, with a focus on geometric patterns and lighting",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Hiking & Outdoor Adventures",
      icon: Mountain,
      description: "Exploring nature trails and mountain peaks, combining physical activity with peaceful reflection",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Aviation Enthusiast",
      icon: Plane,
      description: "Private pilot license holder, passionate about aircraft systems and aerodynamics",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Music Production",
      icon: Music,
      description: "Creating electronic music and experimenting with synthesizers and audio engineering",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Gaming & Technology",
      icon: Gamepad2,
      description: "PC gaming enthusiast and hardware builder, staying current with latest tech innovations",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hobbies & Interests
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond engineering, I pursue diverse interests that fuel creativity and maintain work-life balance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div 
              key={hobby.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={hobby.image} 
                  alt={hobby.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${hobby.color} text-white p-3 rounded-lg shadow-lg`}>
                    <hobby.icon size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{hobby.title}</h3>
                <p className="text-gray-600 leading-relaxed">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Life Philosophy</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            I believe in continuous learning and maintaining a balance between technical expertise and creative expression. 
            My diverse interests not only provide personal fulfillment but also inspire innovative approaches to engineering challenges. 
            Whether I'm debugging code, capturing the perfect shot, or exploring mountain trails, each experience contributes to my 
            growth as both an engineer and an individual.
          </p>
        </div>
      </div>
    </section>
  );
};
