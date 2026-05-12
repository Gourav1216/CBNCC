import Hero from "@/components/home/Hero";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const perks = [
  "Access to exclusive workshops and bootcamps",
  "Connect with industry professionals",
  "Build real-world projects for your portfolio",
  "Get mentored by senior members",
  "Participate in national hackathons",
  "Internship & placement opportunities",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEvents />

      {/* About Teaser */}
      <section id="about-teaser" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA4335]/10 text-[#EA4335] text-xs font-semibold mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                  About CBNCC
                </div>
                <h2 className="font-display text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Why join{" "}
                  <span className="text-[#4285F4]">our community?</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  CBNCC is more than a club — it's a family of passionate technologists.
                  We provide the environment, resources, and mentorship to help you grow
                  from a curious student into a confident creator.
                </p>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors"
                >
                  Learn About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right — Perks list */}
            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {perks.map((perk, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <CheckCircle className="w-5 h-5 text-[#34A853] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{perk}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        id="cta-banner"
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        }}
      >
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to level up?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Join CBNCC today and be part of a community that builds, learns, and grows together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#4285F4] hover:bg-[#3b78e7] text-white font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-[0_8px_24px_rgba(66,133,244,0.4)]"
              >
                Join CBNCC
              </Link>
              <Link
                href="/events"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-200"
              >
                View Events
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
