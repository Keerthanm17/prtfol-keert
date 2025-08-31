import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Briefcase, Trophy, Users } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      title: "Data Science Intern",
      company: "Vidrava Technologies LTD",
      location: "Remote",
      period: "Aug 2025 - Ongoing",
      type: "Internship",
      description: "Working on advanced data analytics projects, developing machine learning models, and implementing AI-driven solutions for business intelligence.",
      skills: ["Python", "Machine Learning", "Data Analytics", "AI", "Statistical Analysis"],
      icon: Building,
      gradient: "from-primary to-primary-glow"
    }
  ];

  const volunteerExperience = [
    {
      title: "VTU Level Sports Event Organizer",
      organization: "VTU Sports Department",
      location: "Bengaluru, India",
      period: "Jan 2024",
      description: "Successfully organized and managed VTU-level sports event, handling coordination, logistics, and athlete engagement for multi-disciplinary competitions.",
      skills: ["Event Management", "Leadership", "Coordination", "Team Management"],
      icon: Trophy,
      gradient: "from-success to-success/80"
    },
    {
      title: "e-Sports Event Coordinator",
      organization: "MVJ College of Engineering",
      location: "Karnataka, India",
      period: "Oct 2023",
      description: "Led the organization of college-level e-sports tournaments, managing tournament setup, participant registration, and event execution.",
      skills: ["Event Planning", "Digital Coordination", "Team Leadership", "Technical Setup"],
      icon: Users,
      gradient: "from-accent to-accent-glow"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Experience & <span className="text-primary">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and leadership roles that have shaped my technical and organizational skills
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Briefcase className="h-6 w-6 text-primary mr-3" />
            Professional Experience
          </h3>
          
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <Card 
                key={exp.title}
                className="p-8 gradient-card border-border/50 hover:shadow-elegant transition-smooth"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${exp.gradient} shadow-glow flex-shrink-0`}>
                    <exp.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h4>
                        <p className="text-primary font-medium text-lg">{exp.company}</p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        <Badge variant="outline" className="mb-2">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-3">{exp.period}</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary/10 hover:text-primary transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Users className="h-6 w-6 text-accent mr-3" />
            Leadership & Volunteer Experience
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {volunteerExperience.map((exp, index) => (
              <Card 
                key={exp.title}
                className="p-6 gradient-card border-border/50 hover:shadow-elegant transition-smooth"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.gradient} shadow-glow`}>
                    <exp.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-foreground mb-2">{exp.title}</h4>
                <p className="text-accent font-medium mb-2">{exp.organization}</p>
                
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{exp.location}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Event Participants Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Leadership Roles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Event Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;