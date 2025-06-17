
import { Mail, Phone, MapPin, LinkedinIcon, GithubIcon } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.smith@email.com",
      href: "mailto:john.smith@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Interested in collaborating on electrical engineering projects or discussing 
            innovative solutions? I'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 mb-12">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="bg-white/20 p-4 rounded-lg mr-6 group-hover:bg-white/30 transition-colors">
                  <info.icon className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">{info.label}</p>
                  <p className="text-white font-semibold text-lg">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="text-white group-hover:text-blue-200" size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2024 John Smith. Built with passion for electrical engineering and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};
