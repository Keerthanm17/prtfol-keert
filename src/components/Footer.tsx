import { Button } from "@/components/ui/button";
import { Github, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold mb-4">
              <span className="text-foreground">Keerthan M</span>
              <span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Computer Science student passionate about AI, data science, and building innovative solutions 
              that make a difference in the world.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('https://github.com/Keerthanm17', '_blank')}
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('mailto:keerthanmgowda3@gmail.com', '_blank')}
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "Projects", id: "projects" },
                { label: "Experience", id: "experience" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="md:col-span-1">
            <h3 className="text-foreground font-semibold mb-4">Tech Focus</h3>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">
                <span className="text-primary font-medium">AI & ML:</span> Python, TensorFlow
              </div>
              <div className="text-muted-foreground">
                <span className="text-accent font-medium">Web Dev:</span> React, Next.js, Node.js
              </div>
              <div className="text-muted-foreground">
                <span className="text-success font-medium">Data:</span> SQL, Analytics, Visualization
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary font-medium">Other:</span> IoT, Cloud, Security
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/30">
          <div className="text-muted-foreground text-sm mb-4 sm:mb-0">
            <div className="flex items-center">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>using React, TypeScript & Tailwind</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-muted-foreground text-xs">
              © 2024 Keerthan M. All rights reserved.
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;