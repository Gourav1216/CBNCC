"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";
import { events } from "@/data/events";

const tabs = ["upcoming", "past"] as const;

export default function EventsGrid() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const filtered = events.filter((e) => e.status === activeTab);

  return (
    <div>
      {/* Tab Switcher */}
      <div className="flex items-center gap-2 mb-10 p-1 bg-gray-100 rounded-2xl w-fit mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            id={`events-tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={`relative px-7 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 capitalize ${
              activeTab === tab
                ? "text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="events-tab-pill"
                className="absolute inset-0 bg-[#4285F4] rounded-xl shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab} Events</span>
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-medium">No {activeTab} events yet.</p>
          <p className="text-sm mt-1">Check back soon!</p>
        </div>
      )}
    </div>
  );
}
