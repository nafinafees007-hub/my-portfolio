import Image from "next/image"

const experiences = [
  {
    company: "Hitachi System India Pvt Ltd",
    role: "IT Infrastructure and Networking Intern",
    description: "IT Infrastructure and Networking Intern supporting network systems, troubleshooting, and infrastructure maintenance.",
    duration: "2-Months",
    image: "/images/experience-hitachi.jpg",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-teal-50/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Work <span className="text-teal-600">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mt-4"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and creative designs across various platforms
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex justify-center">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border max-w-md hover:shadow-xl transition-shadow"
            >
              {/* Experience Image */}
              <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-teal-50 to-cyan-50">
                <Image
                  src={exp.image}
                  alt={exp.role}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
              </div>

              {/* Experience Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{exp.company}</h3>
                <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                {/* Duration */}
                <div className="flex gap-3">
                  <span className="text-xs font-medium text-teal-600">Duration</span>
                  <span className="text-xs font-medium text-teal-600">{exp.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
