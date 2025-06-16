
import { Mail, Phone, MapPin, LinkedinIcon, GithubIcon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      <div className="max-w-6xl mx-auto px-4">
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
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-white/20 p-3 rounded-lg mr-4 group-hover:bg-white/30 transition-colors">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="text-white" size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-white"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-white"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Subject
                </label>
                <Input 
                  type="text" 
                  className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-white"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  rows={5}
                  className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-white resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 text-lg font-medium rounded-lg transition-colors duration-300"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
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
