import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail, MapPin, Clock } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CBNCC — reach out to join the club, propose an event, or just say hello.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "cbncc@college.edu",
    color: "#4285F4",
  },
  {
    icon: MapPin,
    label: "Find Us",
    value: "CBNCC Lab, Block C, Campus",
    color: "#EA4335",
  },
  {
    icon: Clock,
    label: "Club Hours",
    value: "Mon–Fri, 10 AM – 5 PM",
    color: "#34A853",
  },
];

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub", hoverClass: "hover:bg-gray-800" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", hoverClass: "hover:bg-[#E1306C]" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn", hoverClass: "hover:bg-[#0077B5]" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", hoverClass: "hover:bg-[#1DA1F2]" },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Page Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4285F4]/10 text-[#4285F4] text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              Contact Us
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Let's get in touch
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Questions, collaborations, or just want to say hi? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section id="contact-section" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left — Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map(({ icon: Icon, label, value, color }) => (
                      <div
                        key={label}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-200"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${color}18` }}
                        >
                          <Icon className="w-5 h-5" style={{ color }} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-400 mb-0.5">{label}</div>
                          <div className="text-sm font-medium text-gray-900">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Socials */}
              <ScrollReveal direction="left" delay={0.15}>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    {socials.map(({ icon: Icon, href, label, hoverClass }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={`w-11 h-11 rounded-xl bg-gray-100 ${hoverClass} hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200 hover:scale-110`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Map placeholder */}
              <ScrollReveal direction="left" delay={0.25}>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10 border border-gray-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-[#4285F4] mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-500">CBNCC Campus</p>
                    <p className="text-xs text-gray-400">Block C, Technical Lab</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="bg-white rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-gray-100 p-8 sm:p-10">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    Send a Message
                  </h2>
                  <p className="text-sm text-gray-400 mb-8">
                    We typically reply within 24–48 hours.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
