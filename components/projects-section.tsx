// import { ExternalLink, Github, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Campaigns Manager",
      description:
        "A Web App, made for a marketing company named Sales factory located in US. I was contributor as a Full Stack Developer.",
      image: "/skynet-app.jpg",
      technologies: ["React", "Node.js", "TypeScript", "Express.js", "PostgreSQL", "AWS"],
      metrics: {
        users: "5,000+",
        performance: "98% Lighthouse",
        growth: "+150% ventas",
      },
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/project",
      featured: true,
    },
    {
      title: "Marketing Bot AI",
      description:
        "A Web App, made for Sales Factory, is a Chat Bot AI for conversations about Marketing and more, I was contributor as a Front-End Developer.",
      image: "/clew.jpg",
      technologies: ["React", "Python", "Azure", "CosmosDB", "RAG Framework"],
      metrics: {
        users: "2,000+",
        performance: "95% Lighthouse",
        growth: "+200% productividad",
      },
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/project",
      featured: true,
    },
    {
      title: "Barcode Scanner",
      description:
        "An Android App, made for a company who sell his products to different clients like: pharmacies, supermarkets and others kind of shops.",
      image: "/multishop-app.jpg",
      technologies: ["React Native", "Node.js", "Express.js", "MySQL"],
      metrics: {
        users: "1,500+",
        performance: "96% Lighthouse",
        growth: "+300% precisión",
      },
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/project",
      featured: false,
    },
    {
      title: "Fedecamaras App",
      description:
        "A Mobile App, using Strapi as database, is an app for events and assemblies of the Fedecamaras company, I was contributor as a Full Stack dev.",
      image: "/fedecamaras.jpg",
      technologies: ["React Native", "Express", "Node.js", "Strapi", "PostgreSQL"],
      metrics: {
        users: "800+",
        performance: "94% Lighthouse",
        growth: "+180% engagement",
      },
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/project",
      featured: false,
    },
    {
      title: "Take Orders App",
      description:
        "An Android App for taking restaurant orders named QuickOrder, it is developing by me as on front-end as on back-end.",
      image: "/quickorder.jpg",
      technologies: ["React Native", "Express", "Node.js", "Sequelize", "PostgreSQL"],
      metrics: {
        users: "800+",
        performance: "94% Lighthouse",
        growth: "+180% engagement",
      },
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/project",
      featured: false,
    },
    {
      title: "Loserball App",
      description:
        "A Mobile App named Loserball, a betting app for an american company, I was contributor as a Full-Stack Developer.",
      image: "/loserball.jpg",
      technologies: ["React Native", "Express", "Node.js", "Sequelize", "PostgreSQL"],
      metrics: {
        users: "800+",
        performance: "94% Lighthouse",
        growth: "+180% engagement",
      },
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/project",
      featured: false,
    },
    {
      title: "Champsraise",
      description:
        "A Web App, for a company from the United States about campaigns and donations, I was contributor as a Front-End developer.",
      image: "/pelota-perdida.jpg",
      technologies: ["Next.js", "Tailwind"],
      metrics: {
        users: "800+",
        performance: "94% Lighthouse",
        growth: "+180% engagement",
      },
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/project",
      featured: false,
    },
    {
      title: "Evaluations Web Application",
      description:
        "A Web App, was a technical test for a software company. Developed by me as on Back-End as on Front-End.",
      image: "/evaluations.jpg",
      technologies: ["React", "Material UI", "Node.js", "Express.js", "Mongoose", "MongoDB"],
      metrics: {
        users: "800+",
        performance: "94% Lighthouse",
        growth: "+180% engagement",
      },
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/project",
      featured: false,
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-playfair)]">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my experience with diverse technologies and client-driven solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-lg shadow-sm group hover:shadow-xl transition-all duration-300 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    width={800}
                    height={290}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 rounded-tr-md rounded-tl-md object-cover transition-transform duration-300"
                  />
                  {project.featured && (
                    <span className="absolute top-4 left-4 inline-flex items-center rounded-md bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/50 rounded-lg">
                    <div className="text-center">
                      <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-medium">{project.metrics.users}</div>
                      <div className="text-xs text-muted-foreground">Usuarios</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-medium">{project.metrics.performance}</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-medium">{project.metrics.growth}</div>
                      <div className="text-xs text-muted-foreground">Impacto</div>
                    </div>
                  </div> */}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* <div className="flex gap-3">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
