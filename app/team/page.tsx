"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamCard from "@/components/team/TeamCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { teamMembers } from "@/data/team";

const categories = ["All", "Leadership", "Development", "Design", "Marketing", "Events"];

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Page Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              badge="Our Team"
              badgeColor="#34A853"
              title="Meet the People Behind CBNCC"
              subtitle="A diverse group of passionate students working together to build something extraordinary."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 sticky top-16 z-30 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`team-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#34A853] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section id="team-grid" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-medium">No members in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
