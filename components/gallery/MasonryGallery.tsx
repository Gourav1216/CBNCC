"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  size: "sm" | "md" | "lg";
  bgColor: string;
  emoji: string;
}

const galleryItems: GalleryImage[] = [
  { id: 1, alt: "HackNite 2.0 Opening Ceremony", category: "Hackathon", size: "lg", bgColor: "#4285F4", emoji: "💻", src: "" },
  { id: 2, alt: "Cloud Study Jam Session", category: "Workshop", size: "sm", bgColor: "#34A853", emoji: "☁️", src: "" },
  { id: 3, alt: "Team Building Activity", category: "Community", size: "md", bgColor: "#FBBC05", emoji: "🤝", src: "" },
  { id: 4, alt: "AI Demo Day", category: "Workshop", size: "sm", bgColor: "#EA4335", emoji: "🤖", src: "" },
  { id: 5, alt: "Award Ceremony", category: "Community", size: "md", bgColor: "#4285F4", emoji: "🏆", src: "" },
  { id: 6, alt: "Android Workshop", category: "Workshop", size: "lg", bgColor: "#EA4335", emoji: "📱", src: "" },
  { id: 7, alt: "Open Source Sprint", category: "Hackathon", size: "sm", bgColor: "#34A853", emoji: "🛠️", src: "" },
  { id: 8, alt: "Keynote Talk", category: "Community", size: "md", bgColor: "#FBBC05", emoji: "🎤", src: "" },
  { id: 9, alt: "Project Exhibition", category: "Community", size: "sm", bgColor: "#4285F4", emoji: "🎯", src: "" },
];

const categories = ["All", "Hackathon", "Workshop", "Community"];

const sizeMap = { sm: "row-span-1", md: "row-span-2", lg: "row-span-2" };

export default function MasonryGallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div>
      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`gallery-filter-${cat.toLowerCase()}`}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === cat
                ? "bg-[#4285F4] text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                height: item.size === "sm" ? "200px" : item.size === "md" ? "280px" : "360px",
                background: `linear-gradient(135deg, ${item.bgColor}22, ${item.bgColor}55)`,
                borderColor: `${item.bgColor}30`,
                border: "1px solid",
              }}
              onClick={() => setLightbox(item)}
            >
              {/* Emoji placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-3">{item.emoji}</span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${item.bgColor}30`, color: item.bgColor }}
                >
                  {item.category}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <ZoomIn className="w-8 h-8 text-white" />
                <p className="text-white text-sm font-semibold text-center px-4">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-3xl p-10 max-w-md w-full flex flex-col items-center gap-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-8xl">{lightbox.emoji}</span>
              <h3 className="font-display font-bold text-xl text-gray-900 text-center">{lightbox.alt}</h3>
              <span
                className="text-sm font-semibold px-4 py-1.5 rounded-full"
                style={{
                  background: `${lightbox.bgColor}18`,
                  color: lightbox.bgColor,
                }}
              >
                {lightbox.category}
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
