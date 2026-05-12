import type { Metadata } from "next";
import MissionVision from "@/components/about/MissionVision";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about CBNCC — our mission, vision, club overview, and the values that drive our technical community.",
};

const timeline = [
  { year: "2019", label: "Club Founded", desc: "CBNCC was established by a group of 12 passionate students." },
  { year: "2020", label: "First Hackathon", desc: "Hosted HackNite 1.0 with 80+ participants." },
  { year: "2022", label: "GDG Partnership", desc: "Became an official Google Developer Group partner campus." },
  { year: "2024", label: "200+ Members", desc: "Reached a milestone of 200 active community members." },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Page Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              badge="About Us"
              badgeColor="#4285F4"
              title="Who We Are"
              subtitle="CBNCC is a student-driven technical community committed to creating a vibrant ecosystem where curiosity meets creation."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MissionVision />
        </div>
      </section>

      {/* Club Overview */}
      <section id="club-overview" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              badge="Our Story"
              badgeColor="#EA4335"
              title="The CBNCC Journey"
              subtitle="From a small group of enthusiasts to a thriving community — here's how we grew."
            />
          </ScrollReveal>
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div
                    className={`flex flex-col md:flex-row items-center gap-6 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="inline-block px-6 py-4 bg-white rounded-2xl shadow-md border border-gray-100">
                        <div className="text-2xl font-bold text-[#4285F4] mb-1">{item.year}</div>
                        <div className="font-semibold text-gray-900 mb-1">{item.label}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                    <div className="hidden md:flex w-8 h-8 rounded-full bg-[#4285F4] border-4 border-white shadow-md z-10 flex-shrink-0 items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
