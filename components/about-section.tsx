import { Star } from "lucide-react"

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

  const experienceLevels = [
    { area: "Frontend Development", level: 5, years: "2+ years" },
    { area: "Backend Development", level: 4, years: "2+ years" },
    { area: "DevOps & Cloud", level: 2, years: "1+ years" },
    { area: "Mobile Development", level: 4, years: "2+ years" },
  ]

  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < level ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
      />
    ))
  }

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
                {"I'm"} a software engineer with almost 3 years of experience building innovative digital solutions. I specialize in full-stack development with a strong focus on user experience and scalability.
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

                <div className="mt-6 space-y-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Experience Level</h4>
                  {experienceLevels.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{item.area}</span>
                        <span className="text-xs text-gray-500">{item.years}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {renderStars(item.level)}
                        <span className="ml-2 text-sm text-gray-600">({item.level}/5)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
