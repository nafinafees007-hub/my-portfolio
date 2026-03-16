import Image from "next/image"

const projects = [
  {
    title: "Online Grocery Store",
    description: "Online Grocery Store Website built with HTML, CSS, and JavaScript for easy product browsing and smooth checkout.",
    image: "/images/grocery-project.jpg",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-teal-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured <span className="text-teal-600">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mt-4"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and creative designs across various platforms
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border max-w-md hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-56 bg-gradient-to-br from-teal-50 to-cyan-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-teal-600 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
