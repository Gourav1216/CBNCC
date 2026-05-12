"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Clock, Users, ArrowRight, Tag } from "lucide-react";
import type { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
  index: number;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventCard({ event, index }: EventCardProps) {
  const isPast = event.status === "past";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(66,133,244,0.14)] transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1.5 flex flex-col"
    >
      {/* Image / Color header */}
      <div
        className="h-40 relative overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${event.color}22 0%, ${event.color}44 100%)`,
        }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(${event.color} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        {/* Date badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow"
          style={{ background: event.color }}
        >
          {new Date(event.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
          })}
        </div>
        {/* Status */}
        {isPast ? (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gray-900/60 text-gray-200 text-xs font-semibold backdrop-blur-sm">
            Concluded
          </div>
        ) : (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#34A853]/90 text-white text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Upcoming
          </div>
        )}
        {/* Category tag */}
        <span
          className="relative z-10 px-4 py-1.5 rounded-full text-sm font-bold"
          style={{ background: `${event.color}30`, color: event.color }}
        >
          {event.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: `${event.color}18` }}
          >
            <Tag className="w-4 h-4" style={{ color: event.color }} />
          </div>
          <h3 className="font-display font-bold text-gray-900 text-lg leading-snug">
            {event.title}
          </h3>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
          {event.description}
        </p>

        {/* Meta info */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" style={{ color: event.color }} />
            <span>{formatDate(event.date)}</span>
            <Clock className="w-3.5 h-3.5 flex-shrink-0 ml-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: event.color }} />
            <span>{event.location}</span>
          </div>
          {isPast && event.attendees && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Users className="w-3.5 h-3.5 flex-shrink-0 text-[#34A853]" />
              <span>{event.attendees} attended</span>
            </div>
          )}
        </div>

        {/* CTA */}
        {!isPast && event.registrationUrl && (
          <Link
            href={event.registrationUrl}
            className="group/btn mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{ background: event.color }}
          >
            Register Now
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        )}
        {isPast && (
          <button
            className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
          >
            View Recap
          </button>
        )}
      </div>
    </motion.article>
  );
}
