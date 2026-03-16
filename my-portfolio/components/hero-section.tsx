import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(240, 253, 250, 0.8) 0%, rgba(204, 251, 241, 0.4) 25%, rgba(255, 255, 255, 0.9) 50%, rgba(207, 250, 254, 0.3) 75%, rgba(240, 253, 250, 0.6) 100%)",
      }}
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-50/60 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-foreground">{"Hello I'm "}</span>
              <span className="text-teal-500">Nafees</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ashfaq Ahamed
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-md">
              {"I'm a Frontend Developer focused on building responsive, user-friendly web applications. I transform complex ideas into clean, efficient, and interactive interfaces using modern web technologies, ensuring great performance and seamless user experiences aligned with business goals."}
            </p>

            {/* Download Resume Button */}
            <Button
              asChild
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-sm font-medium mb-6"
            >
              <a href="/Resume.pdf" download="Nafees_Ashfaq_Ahamed_Resume.pdf">
                Download Resume
              </a>
            </Button>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/nafees-ashfaq-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:border-teal-500 hover:text-teal-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
              {/* White circle background - offset to bottom-right */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-full bg-white shadow-lg" />
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Nafees Ashfaq Ahamed - Frontend Developer"
                  fill
                  className="object-cover object-top grayscale"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to next section">
          <ArrowDown className="text-teal-500" size={24} />
        </a>
      </div>
    </section>
  )
}
