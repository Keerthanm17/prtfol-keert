import { Button } from "@/components/ui/button";
import { Github, Mail, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 rounded-full bg-success/10 animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Keerthan</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              M
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Computer Science Student & AI Enthusiast
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about <span className="text-primary font-semibold">automation</span>, 
            <span className="text-accent font-semibold"> artificial intelligence</span>, and 
            <span className="text-success font-semibold"> data science</span>. 
            Building innovative solutions with modern web technologies and machine learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => window.open('https://github.com/Keerthanm17', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>

          {/* Key Stats */}
          <div className="flex justify-center items-center gap-16">
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-success mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;