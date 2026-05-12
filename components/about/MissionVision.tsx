"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Globe, Zap, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const values = [
  { icon: Zap, title: "Innovation", desc: "We push boundaries and embrace new ideas.", color: "#4285F4" },
  { icon: Users, title: "Collaboration", desc: "We believe the best work happens together.", color: "#EA4335" },
  { icon: Heart, title: "Inclusivity", desc: "Everyone is welcome, regardless of background.", color: "#34A853" },
  { icon: Globe, title: "Impact", desc: "We build solutions that matter to the world.", color: "#FBBC05" },
];

export default function MissionVision() {
  return (
    <div className="space-y-20">
      {/* Mission + Vision */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Mission */}
        <ScrollReveal delay={0} direction="left">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#4285F4] to-[#1D4ED8] text-white overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed text-base">
                To cultivate a thriving technical ecosystem within our college — empowering students
                to learn cutting-edge technologies, collaborate on real-world projects, and
                build a strong professional network through workshops, hackathons, and
                community engagement.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Vision */}
        <ScrollReveal delay={0.15} direction="right">
          <div className="relative p-8 rounded-3xl border-2 border-gray-100 bg-white overflow-hidden h-full group hover:border-[#EA4335]/20 transition-colors">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#EA4335]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#EA4335]/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#EA4335]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed text-base">
                To be the most impactful student technical community in the region — a launchpad
                for ideas, a bridge to industry, and a home for every student who dares to
                imagine, create, and lead the next wave of technological innovation.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Values Grid */}
      <div>
        <ScrollReveal>
          <h3 className="font-display text-2xl font-bold text-gray-900 text-center mb-8">
            Our Core Values
          </h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 text-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${v.color}18` }}
                >
                  <v.icon className="w-6 h-6" style={{ color: v.color }} />
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
