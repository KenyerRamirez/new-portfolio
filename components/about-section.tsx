export function AboutSection() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "SQL Server",
    "C#",
    "ASP.NET",
    "Cypress"
  ]

  const skills = [
    "Frontend, Backend, APIs, and Microservices Development",
    "Application Design",
    "Software Architecture",
    "Agile Methodologies (e.g., Scrum)",
    "Team Leadership",
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a software engineer with almost 3 years of experience building innovative digital solutions. I specialize in full-stack development with a strong focus on user experience and scalability.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My goal is to transform complex ideas into intuitive, efficient applications that deliver real value to both users and businesses.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Skills:</h3>
                <ul className="space-y-2">
                  {skills.map((skill, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">My Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span key={index} className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Frontend Development</span>
                    <span className="text-primary">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Backend Development</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>DevOps & Cloud</span>
                    <span className="text-primary">25%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
