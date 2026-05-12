"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import type { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const categoryColors: Record<string, string> = {
  Leadership: "#4285F4",
  Development: "#34A853",
  Design: "#FBBC05",
  Marketing: "#EA4335",
  Events: "#9333EA",
};

export default function TeamCard({ member, index }: TeamCardProps) {
  const catColor = categoryColors[member.category] ?? "#4285F4";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(66,133,244,0.15)] transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1.5"
    >
      {/* Top accent bar */}
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${catColor} 0%, ${catColor}80 100%)`,
        }}
      />

      <div className="p-6">
        {/* Avatar */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-md"
            style={{ background: `linear-gradient(135deg, ${catColor}, ${catColor}cc)` }}
          >
            {member.avatar}
          </div>
          {/* Category badge */}
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: `${catColor}18`, color: catColor }}
          >
            {member.category}
          </span>
        </div>

        {/* Name & Role */}
        <h3 className="font-display font-bold text-gray-900 text-lg leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-sm font-medium mb-3" style={{ color: catColor }}>
          {member.role}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mb-5">{member.bio}</p>

        {/* Social Links */}
        <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} GitHub`}
              className="w-8 h-8 rounded-xl bg-gray-50 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="w-8 h-8 rounded-xl bg-gray-50 hover:bg-[#0077B5] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} Twitter`}
              className="w-8 h-8 rounded-xl bg-gray-50 hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
          )}
          <a
            href="#"
            className="ml-auto flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-[#4285F4] transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            Profile
          </a>
        </div>
      </div>
    </motion.div>
  );
}
