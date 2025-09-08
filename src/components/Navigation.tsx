import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-elegant border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-xl font-bold cursor-pointer hover:text-primary transition-smooth"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-foreground">Keerthan M</span>
            <span className="text-primary">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.open('https://github.com/Keerthanm17', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => window.open('mailto:keerthanmgowda3@gmail.com', '_blank')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-elegant">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/30">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://github.com/Keerthanm17', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('mailto:keerthanmgowda3@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;