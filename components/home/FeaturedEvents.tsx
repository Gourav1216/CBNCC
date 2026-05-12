"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { events } from "@/data/events";

export default function FeaturedEvents() {
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 3);

  return (
    <section id="featured-events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4285F4]/10 text-[#4285F4] text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              Upcoming Events
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              What's happening next?
            </h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-[#4285F4] font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {upcoming.map((event, i) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(66,133,244,0.12)] border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Color bar */}
              <div
                className="h-1.5"
                style={{ background: event.color }}
              />
              <div className="p-6">
                {/* Tag & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${event.color}18`, color: event.color }}
                  >
                    {event.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
                    Upcoming
                  </div>
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2 leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{event.description}</p>
                <div className="space-y-1.5 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" style={{ color: event.color }} />
                    {new Date(event.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5" style={{ color: event.color }} />
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
