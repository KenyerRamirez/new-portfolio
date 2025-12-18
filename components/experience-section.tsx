import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Banco Sofitasa",
      position: "Full Stack Developer",
      period: "December 2024 - Present",
      location: "In-person -Táchira, Venezuela",
      description:
        "I develop MVC applications for different bank departments and REST APIs that clients such as Garzón, Speedy, Zebra, and others used to manage their accounts and perform various transactions. Due to my strong performance and contributions, I was moved into the role of API Specialist, where I work with my team to implement security measures and deliver robust solutions.",
      technologies: ["React", ".NET", "SQL Server", "C#", "ISS", "JavaScript"],
      achievements: [
        "Accelerated software development timelines by implementing Agile Scrum.",
        "Contributed ideas for REST API security measures that were adopted, influencing key decision-making processes.",
        "Mastered new development technologies such as .NET, driving innovation by transitioning software development from vanilla PHP to .NET.",
      ],
    },
    {
      company: "Hamal Solutions",
      position: "Full Stack Developer",
      period: "September 2023 - March 2025",
      location: "Hybrid - Táchira, Venezuela",
      description:
        "I worked on projects like a Marketing Manager for a company from US, after that project I worked on a AI agent using RAG and Azure. I didn't work on those projects only, I worked on projects for web and mobile development using node and react/react native. I learned about agile scrum, META, Amazon and Google APIs, tools for backend like strapi and sequelize, and a little bit of AWS. Almost all the projects were for US clients so I improved my English a skills.",
      technologies: [
        "React",
        "Python",
        "PostgreSQL",
        "MySQL",
        "React Native",
        "Node.js",
        "AWS",
        "Azure",
        "Strapi",
      ],
      achievements: [
        "I figured out the way for creating Google and Meta Ads from the web app, using their APIs.",
        "I learned hooks for React and I implemented them on the projects for improving their performance and development.",
        "I was considered for front-end development on many projects due to my creative skills and good practices.",
      ],
    },
    {
      company: "Multishop",
      position: "Full Stack Mobile Developer",
      period: "June 2023 - September 2023",
      location: "Remote - Táchira, Venezuela",
      description:
        "I worked for a short time developing a mobile app for the stock management through a codebar scanner, using the phone's camera.",
      technologies: [
        "React Native",
        "JavaScript",
        "Node.js",
        "Express",
        "MySQL",
      ],
      achievements: [
        "I achieved make the work easier for the stock management on the worker side.",
        "I improved my coding skills with Javascript's frameworks.",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg text-primary font-medium mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-medium text-foreground mb-2">
                      Main Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
