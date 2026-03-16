import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-teal-400 mb-3">Nafees Ashfaq Ahamed</h3>
            <p className="text-slate-400 text-sm">
              Creating beautiful and functional digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.linkedin.com/in/nafees-ashfaq-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nafinafees007@gmail.com"
                className="w-9 h-9 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a href="mailto:nafinafees007@gmail.com" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">nafinafees007@gmail.com</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © 2026 Nafees. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
