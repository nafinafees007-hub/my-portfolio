import Image from "next/image"
import { Check, Rocket, Smartphone, TrendingUp, Award } from "lucide-react"

const skills = [
  {
    title: "User Research",
    description: "I conduct user research to understand real problems and create solutions that truly matter.",
  },
  {
    title: "Design Systems",
    description: "Building scalable UI kits and style guides to streamline development handoff.",
  },
  {
    title: "Wireframing",
    description: "I use wireframing to outline core functionality and ensure every screen has a purpose.",
  },
]

const journeyCards = [
  {
    icon: Rocket,
    title: "Starting My Design Journey",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Smartphone,
    title: "User-Friendly Interfaces",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: TrendingUp,
    title: "On Learning & Improvement",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Award,
    title: "Growing",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-teal-50/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About <span className="text-teal-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto mb-16">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-photo.jpg"
                alt="Nafees Ashfaq Ahamed"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {"I'm a Web Designer who loves creating simple, intuitive, and visually appealing websites. I focus on understanding user needs and transforming them into engaging, functional web designs through creativity, research, and thoughtful problem-solving."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"I believe great design feels natural — it guides users effortlessly and makes complex tasks easier. Whether I'm working on mobile apps, web interfaces, or conceptual layouts, my goal is always the same: create designs that are clean, user-friendly, and delightful to interact with."}
            </p>

            {/* Skills List */}
            <div className="space-y-4 pt-4">
              {skills.map((skill) => (
                <div key={skill.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {journeyCards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <h4 className="text-sm font-medium text-foreground">{card.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
