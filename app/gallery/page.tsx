import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import MasonryGallery from "@/components/gallery/MasonryGallery";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the CBNCC photo gallery — moments captured from our hackathons, workshops, and community events.",
};

export default function GalleryPage() {
  return (
    <div className="pt-16">
      {/* Page Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              badge="Gallery"
              badgeColor="#FBBC05"
              title="Moments That Matter"
              subtitle="A collection of memories from our hackathons, workshops, and community gatherings."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section id="gallery-section" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MasonryGallery />
        </div>
      </section>
    </div>
  );
}
