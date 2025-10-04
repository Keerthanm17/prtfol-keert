import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Phone, MapPin, Send, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "keerthanmgowda3@gmail.com",
      action: () => window.open('mailto:keerthanmgowda3@gmail.com'),
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91-9449634240",
      action: () => window.open('+91-9449634240'),
      gradient: "from-success to-success/80"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Keerthanm17",
      action: () => window.open('https://github.com/Keerthanm17', '_blank'),
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karnataka, India",
      action: () => {},
      gradient: "from-muted to-muted-foreground/20"
    }
  ];

  const interests = [
    "Artificial Intelligence", "Machine Learning", "Data Science", 
    "Automation", "IoT Development", "Web Technologies", 
    "Cloud Computing", "Cybersecurity", "Open Source"
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities in AI, data science, and innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            {contactInfo.map((contact, index) => (
              <Card 
                key={contact.label}
                className="p-4 gradient-card border-border/50 hover:shadow-elegant transition-smooth cursor-pointer group"
                onClick={contact.action}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.gradient} shadow-glow group-hover:scale-110 transition-smooth`}>
                    <contact.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Actions & Interests */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="p-8 gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('mailto:keerthanmgowda3@gmail.com?subject=Hello%20Keerthan&body=Hi%20Keerthan,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss...', '_blank')}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://github.com/Keerthanm17', '_blank')}
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in collaboration or have a project in mind?
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('mailto:keerthanmgowda3@gmail.com', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </Card>

            {/* Interests & Expertise */}
            <Card className="p-8 gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-6">Areas of Interest</h3>
              
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <Badge 
                    key={interest} 
                    variant="secondary"
                    className="px-3 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-smooth cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-muted/20 border border-border/30">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">Open to opportunities</span> in data science, 
                  AI/ML engineering, full-stack development, and research collaborations. 
                  Always excited to work on innovative projects that push the boundaries of technology.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center gradient-card border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether it's developing cutting-edge AI solutions, building scalable web applications, 
              or exploring innovative IoT projects, I'm always excited to take on new challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('mailto:keerthanmgowda3@gmail.com?subject=Project%20Collaboration&body=Hi%20Keerthan,%0A%0AI%20have%20an%20exciting%20project%20idea...', '_blank')}
              >
                <Send className="mr-2 h-5 w-5" />
                Start a Project
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.open('https://github.com/Keerthanm17', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                Explore My Work
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;