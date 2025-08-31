import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", level: "Advanced", color: "bg-primary" },
    { name: "Java", level: "Advanced", color: "bg-accent" },
    { name: "SQL", level: "Intermediate", color: "bg-success" }, 
    { name: "Next.js", level: "Intermediate", color: "bg-accent" },
    { name: "Machine Learning", level: "Intermediate", color: "bg-accent" },
    { name: "Data Science", level: "Intermediate", color: "bg-success" },
    { name: "Arduino", level: "Intermediate", color: "bg-primary" },
    { name: "NodeMCU", level: "Intermediate", color: "bg-accent" },
  ];

  const certifications = [
    {
      title: "Java Programming Certification",
      issuer: "IIT Bombay",
      date: "2023",
      type: "Programming"
    },
    {
      title: "Python Training Certification",
      issuer: "IIT Bombay",
      date: "2023",
      type: "Programming"
    },
    {
      title: "Data Science Internship",
      issuer: "Codsoft",
      date: "2025",
      type: "Internship"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate computer science student with a focus on AI, automation, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <Card className="p-8 gradient-card border-border/50">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h4 className="text-xl font-semibold text-foreground">
                  B.E in Computer Science and Engineering
                </h4>
                <p className="text-primary font-medium">MVJ College of Engineering</p>
                <div className="flex items-center text-muted-foreground text-sm mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">Karnataka, India</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Nov 2022 - Present</span>
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="text-success border-success">
                    CGPA: 8.95
                  </Badge>
                </div>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-lg font-semibold text-foreground">
                  Pre-University Education
                </h4>
                <p className="text-accent font-medium">Jnana Bharathi Pre University College</p>
                <div className="flex items-center text-muted-foreground text-sm mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">Kunigal, India</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Apr 2020 - Apr 2022</span>
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="text-accent border-accent">
                    Percentage: 93.6%
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Current Focus */}
          <Card className="p-8 gradient-card border-border/50">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-2xl font-semibold">Current Focus</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Data Science Internship</h4>
                <p className="text-foreground font-medium">Vidrava Technologies LTD</p>
                <p className="text-muted-foreground">Aug 2025 - Ongoing</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Working on advanced data analytics, machine learning models, and AI-driven solutions.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-lg font-semibold text-accent mb-3">Core Subjects</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['Operating Systems', 'Data Structures', 'Artificial Intelligence', 'Machine Learning', 'Database Management', 'Blockchain'].map((subject) => (
                    <Badge key={subject} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills */}
        <Card className="p-8 gradient-card border-border/50 mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="group hover:scale-105 transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Badge 
                    variant="secondary" 
                    className="w-full justify-center py-3 text-sm font-medium hover:shadow-glow"
                  >
                    {skill.name}
                  </Badge>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="p-6 gradient-card border-border/50 hover:shadow-elegant transition-smooth"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="h-6 w-6 text-primary" />
                <Badge variant="outline">{cert.type}</Badge>
              </div>
              <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
              <p className="text-primary text-sm font-medium">{cert.issuer}</p>
              <p className="text-muted-foreground text-xs mt-1">{cert.date}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;