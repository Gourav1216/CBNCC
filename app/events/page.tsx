import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import EventsGrid from "@/components/events/EventsGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming and past events from CBNCC — hackathons, workshops, study jams, and more.",
};

export default function EventsPage() {
  return (
    <div className="pt-16">
      {/* Page Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              badge="Events"
              badgeColor="#EA4335"
              title="Learn. Hack. Grow."
              subtitle="From hands-on workshops to 48-hour hackathons — there's always something exciting happening at CBNCC."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Events Grid with Tabs */}
      <section id="events-section" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <EventsGrid />
        </div>
      </section>

      {/* Submit Event CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Have an idea for an event?
            </h3>
            <p className="text-gray-500 mb-8">
              We're always open to new workshops, talks, and collaboration ideas from our community.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 bg-[#EA4335] text-white font-semibold rounded-full hover:bg-[#d93025] transition-colors shadow-md"
            >
              Propose an Event
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
