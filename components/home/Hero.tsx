"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Zap, Users, Calendar } from "lucide-react";

const stats = [
  { label: "Active Members", value: "200+", icon: Users, color: "#4285F4" },
  { label: "Events Hosted", value: "50+", icon: Calendar, color: "#EA4335" },
  { label: "Projects Built", value: "80+", icon: Code2, color: "#34A853" },
  { label: "Awards Won", value: "12+", icon: Zap, color: "#FBBC05" },
];

const floatingCards = [
  { label: "Cloud Computing", color: "#4285F4", delay: 0 },
  { label: "AI / ML", color: "#EA4335", delay: 0.4 },
  { label: "Web Dev", color: "#34A853", delay: 0.8 },
  { label: "Android", color: "#FBBC05", delay: 1.2 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(66,133,244,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(66,133,244,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#4285F4] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#EA4335] rounded-full opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
              Student Technical Community
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Build.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #4285F4, #EA4335)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Learn.
              </span>
              <br />
              Innovate.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl"
            >
              CBNCC is where curious minds become creators. Join our community to attend hackathons,
              workshops, and study jams that shape tomorrow's tech leaders.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/events"
                id="hero-cta-events"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#4285F4] hover:bg-[#3b78e7] text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-[0_8px_24px_rgba(66,133,244,0.4)]"
              >
                Explore Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                id="hero-cta-about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right — Floating cards */}
          <div className="relative hidden lg:flex justify-center items-center h-96">
            {floatingCards.map((card, i) => {
              const positions = [
                { top: "10%", left: "10%" },
                { top: "10%", right: "10%" },
                { bottom: "10%", left: "10%" },
                { bottom: "10%", right: "10%" },
              ];
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: card.delay + 0.4, duration: 0.5 }}
                  style={{
                    ...positions[i],
                    position: "absolute",
                    animationDelay: `${card.delay}s`,
                  }}
                  className="animate-float"
                >
                  <div
                    className="px-5 py-3 rounded-2xl backdrop-blur-sm border border-white/20 text-white text-sm font-semibold shadow-xl"
                    style={{ background: `${card.color}30` }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mb-2"
                      style={{ background: card.color }}
                    />
                    {card.label}
                  </div>
                </motion.div>
              );
            })}

            {/* Center emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              className="w-36 h-36 rounded-3xl bg-gradient-to-br from-[#4285F4] to-[#EA4335] flex items-center justify-center shadow-2xl"
            >
              <Code2 className="w-16 h-16 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}25` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-gray-400">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
