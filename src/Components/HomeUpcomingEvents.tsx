import { useState, useEffect } from "react";
import SectionHeader from "@components/SectionHeader";
import ViewAllLink from "@components/ViewAllLink";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { eventsData } from "@utilities/data/eventsData";

export default function HomeUpcomingEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);

  useEffect(() => {
    // Simple client-side check to see if event is in the future
    const now = new Date().getTime();
    const futureEvents = eventsData.filter((event) => {
      return new Date(event.date).getTime() > now;
    });
    setUpcomingEvents(futureEvents);
  }, []);

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <SectionHeader title="Upcoming Events" color="black" />
        <ViewAllLink href="/events" text="View All" />
      </div>

      <div className="w-full">
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* We will map real event cards here once you add future events to your data sheet */}
          </div>
        ) : (
          <div className="w-full max-w-sm rounded-2xl border border-gray-100 shadow-sm p-10 text-center bg-white">
            <HiOutlineCalendarDays className="mx-auto text-5xl text-primary-theme mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No Upcoming Events
            </h3>
            <p className="text-sm text-gray-500">
              Stay tuned! New events will be announced soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}