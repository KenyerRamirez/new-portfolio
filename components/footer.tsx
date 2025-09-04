"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-[family-name:var(--font-playfair)]">
              Kenyer Ramirez
            </h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer focused on creating cool digitals experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/KenyerRamirez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kenyer-ram%C3%ADrez-825216198/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Index
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experiencie
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Full Stack Web Development</li>
              <li>React/Next.js and React Native Applications</li>
              <li>Backend, APIs and Microservices</li>
              <li>Mobile/Web App Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          {/* <p className="text-muted-foreground flex items-center justify-center">
            Developed with <Heart className="w-4 h-4 mx-1 text-red-500" /> by me
          </p> */}
          <p className="text-sm text-muted-foreground mt-2">© 2025 Ramussdev Portfolio.</p>
        </div>
      </div>
    </footer>
  )
}
