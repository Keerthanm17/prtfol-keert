import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Bot, Cpu, Cloud, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Smart Heritage Tourism Guide",
      description: "A comprehensive full-stack application that leverages machine learning to provide personalized heritage tourism experiences with multilingual support and intelligent recommendations.",
      tech: ["Next.js", "Machine Learning", "Python", "React", "TensorFlow", "i18n"],
      features: [
        "Custom ML model for personalized recommendations",
        "Multilingual support with real-time translation",
        "Interactive heritage site exploration",
        "AI-powered chatbot guide",
        "Responsive web interface"
      ],
      icon: Bot,
      gradient: "from-primary to-primary-glow",
      link: "https://indian-tourist.netlify.app/",
      github: "https://github.com/Keerthanm17/heritage-guide"
    },
    {
      title: "Smart Agriculture System with IoT",
      description: "An IoT-based smart agriculture monitoring system that integrates Arduino sensors with cloud infrastructure to optimize crop management through real-time data analytics.",
      tech: ["Arduino", "Node.js", "MQTT", "IoT", "Cloud", "Data Analytics"],
      features: [
        "Real-time soil and environmental monitoring",
        "Automated irrigation control",
        "MQTT protocol for device communication",
        "Cloud-based data storage and analytics",
        "Mobile-responsive dashboard"
      ],
      icon: Cpu,
      gradient: "from-success to-success/80",
      link: "https://soil-crop.netlify.app/",
      github: "https://github.com/Keerthanm17/Crop"
    },
    {
      title: "Event Management System with AI Assistant",
      description: "A cloud-based multi-user event management platform featuring an AI assistant for automated planning, scheduling, and resource optimization with collaborative tools.",
      tech: ["Cloud Computing", "AI", "React", "Node.js", "MongoDB", "WebSocket"],
      features: [
        "AI-powered event planning assistant",
        "Multi-user collaboration tools",
        "Real-time updates and notifications",
        "Resource optimization algorithms",
        "Integrated calendar and scheduling"
      ],
      icon: Cloud,
      gradient: "from-accent to-accent-glow",
      link: "#",
      github: "#"
    },
    {
      title: "Encryption & Decryption Security Suite",
      description: "A comprehensive web-based cryptographic toolkit implementing multiple encryption algorithms including AES, DES, SHA, and PBKDF2 with an intuitive user interface.",
      tech: ["Cryptography", "JavaScript", "Web Security", "AES", "DES", "SHA"],
      features: [
        "Multiple encryption algorithms (AES, DES, SHA)",
        "PBKDF2 key derivation function",
        "Real-time encryption/decryption",
        "Secure key generation",
        "Educational cryptography examples"
      ],
      icon: Shield,
      gradient: "from-destructive to-destructive/80",
      link: "https://encr-decr.netlify.app/",
      github: "https://github.com/Keerthanm17/encr-"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI, IoT, cloud computing, and cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden gradient-card border-border/50 hover:shadow-elegant transition-smooth"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} shadow-glow`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => project.github && project.github !== "#" ? window.open(project.github, '_blank') : null}
                      disabled={!project.github || project.github === "#"}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => project.link && project.link !== "#" ? window.open(project.link, '_blank') : null}
                      disabled={!project.link || project.link === "#"}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/10 hover:text-primary transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => project.link && project.link !== "#" ? window.open(project.link, '_blank') : null}
                    disabled={!project.link || project.link === "#"}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => project.github && project.github !== "#" ? window.open(project.github, '_blank') : null}
                    disabled={!project.github || project.github === "#"}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            variant="glass" 
            size="lg"
            onClick={() => window.open('https://github.com/Keerthanm17', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;