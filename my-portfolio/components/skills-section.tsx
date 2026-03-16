import { Code2, Palette, Layers, Database, Grid3X3, Sparkles } from "lucide-react"
import Image from "next/image"

const skills = [
  {
    icon: Code2,
    title: "HTML5",
    description: "Creating semantic and responsive web structures using HTML5.",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-700",
  },
  {
    icon: Palette,
    title: "CSS",
    description: "Designing responsive and visually consistent layouts using CSS.",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-700",
  },
  {
    icon: Layers,
    title: "JAVASCRIPT",
    description: "Creating dynamic and interactive web experiences using JavaScript.",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-700",
  },
  {
    icon: Database,
    title: "MYSQL",
    description: "Managing structured databases and queries using MySQL.",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-700",
  },
  {
    icon: Grid3X3,
    title: "Design Systems",
    description: "Building scalable component libraries and style guides.",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-700",
  },
  {
    icon: Sparkles,
    title: "Color Theory",
    description: "Skilled in using color theory to enhance visual hierarchy.",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-700",
  },
]

const tools = [
  {
    title: "Figma",
    description: "Skilled in Figma for creating intuitive UI/UX designs, interactive prototype.",
    image: "/images/tools/figma.png",
  },
  {
    title: "Adobe Photoshop",
    description: "Skilled in Photoshop for image editing, Posters Designs etc..!",
    image: "/images/tools/photoshop.png",
  },
  {
    title: "Adobe Illustrator",
    description: "Skilled in Illustrator for creating vector graphics, icons, and logos.",
    image: "/images/tools/illustrator.png",
  },
  {
    title: "Canva",
    description: "Skilled in Canva for designing social media graphics, presentations..!",
    image: "/images/tools/canva.png",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & <span className="text-teal-600">Tools</span>
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mt-4"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of design skills and tools to bring ideas to life
          </p>
        </div>

        {/* Skills */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-xl font-bold text-center mb-8">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${skill.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <skill.icon className={`w-6 h-6 ${skill.iconColor}`} />
                </div>
                <h4 className="font-bold text-foreground mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 relative mb-4">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-bold text-foreground mb-2">{tool.title}</h4>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
