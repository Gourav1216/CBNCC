import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const footerLinks = {
  Pages: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  Community: [
    { href: "#", label: "Join Us" },
    { href: "#", label: "Upcoming Events" },
    { href: "#", label: "Newsletter" },
    { href: "#", label: "Blog" },
  ],
};

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaEnvelope, href: "mailto:cbncc@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4285F4] to-[#EA4335] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">CBNCC</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm mb-6">
              CBNCC is a student-run technical community dedicated to learning, building, and growing together. We host workshops, hackathons, and events that empower the next generation of innovators.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-[#4285F4] flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} CBNCC — All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            Built with
            <span className="mx-1 flex gap-0.5">
              <span className="text-[#4285F4]">◼</span>
              <span className="text-[#EA4335]">◼</span>
              <span className="text-[#FBBC05]">◼</span>
              <span className="text-[#34A853]">◼</span>
            </span>
            by CBNCC Dev Team
          </div>
        </div>
      </div>
    </footer>
  );
}
