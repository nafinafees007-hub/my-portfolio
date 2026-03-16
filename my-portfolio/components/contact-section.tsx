import { Mail, Phone, MapPin, Linkedin, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-teal-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In <span className="text-teal-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mt-4"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            {"Have a project in mind? Let's work together to create something amazing"}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Contact Information */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-lg font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:nafinafees007@gmail.com" className="flex items-center gap-4 hover:bg-muted/50 rounded-lg p-2 -m-2 transition-colors">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">nafinafees007@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 9994447597</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Tiruchirappalli</p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Me */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">Follow Me</h3>
            <a
              href="https://www.linkedin.com/in/nafees-ashfaq-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-3">{"Let's Create Together"}</h3>
            <p className="text-teal-100 text-sm mb-6 max-w-md">
              {"I'm always excited to work on new projects and collaborate with creative minds. Whether you need a complete design overhaul or just want to discuss ideas, feel free to reach out!"}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Available for freelance</p>
                <p className="text-sm text-teal-200">{"Let's schedule a call"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
