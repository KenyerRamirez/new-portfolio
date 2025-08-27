"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Send, CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await emailjs.send(
        "service_6z5fibk",
        "template_458xqv4",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          subject: formData.subject,
          message: formData.message,
        },
        "CR9_0SSiYWvGN2qa6"
      );
      console.log("Email sent successfully:", result);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally{
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ user_name: "", user_email: "", subject: "", message: "" })
    }

    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-[family-name:var(--font-playfair)]">
            {"Let's work together!"}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Do you have a project in mind? {"I'd"} like to listen to your ideas and help you to bring them to life.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg shadow-sm">
                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">kenyer_2002@hotmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Venezuela</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg shadow-sm">
                <div className="p-6">
                  <h3 className="font-semibold mb-3">Availability</h3>
                  <p className="text-muted-foreground mb-4">
                    Currently {"I'm"} available for projects and full time opportunities.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Open to work</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg shadow-sm">
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-semibold">Hit me up!</h3>
              </div>
              <div className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Message sent!</h3>
                    <p className="text-muted-foreground">Thank you for your message, {"I'll"} answer you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          id="user_name"
                          name="user_name"
                          type="text"
                          required
                          value={formData.user_name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          id="user_email"
                          name="user_email"
                          type="email"
                          required
                          value={formData.user_email}
                          onChange={handleChange}
                          placeholder="you@email.com"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Talk to me about your project..."
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="cursor-pointer w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
