"use client"

import { Github, Linkedin, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleClickDownload = () => {
    window.location.href =
      "https://drive.usercontent.google.com/download?id=1JfGP7qPxx3o9cuYYxgC_xo_27BhL8dVZ&export=download&authuser=0&confirm=t&uuid=10ce29ad-bf42-490f-8632-ddf1ca50aaa0&at=AN8xHoomQBA6oDSWjGw63t5-fokg:1757547715850";
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              width={128}
              height={128}
              src="/profile-picture.png"
              alt="Foto profesional"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-playfair)]">
            Full Stack
            <span className="text-primary block">Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            I create exceptional digital experiences using modern technologies, specializing in React, Node.js, .NET, and scalable architectures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection("proyectos")} 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              See Projects
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/KenyerRamirez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kenyer-ram%C3%ADrez-825216198/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <button className="cursor-pointer text-muted-foreground hover:text-primary transition-colors" onClick={handleClickDownload}>
              <Download className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
