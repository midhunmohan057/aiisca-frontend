import { useState, useEffect } from "react";
import ImageOverlaySection from "@components/ImageOverlaySection";
import { images } from "@assets/index";
import EventCard from "./EventCard";
import { eventsData } from "@utilities/data/eventsData";

export default function Page() {
  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const currentTimestamp = new Date().getTime();
  const upcomingEvent = eventsData.find(event => new Date(event.date).getTime() > currentTimestamp);
  const previousEvents = eventsData.filter(event => new Date(event.date).getTime() <= currentTimestamp);

  useEffect(() => {
    if (upcomingEvent) {
      const interval = setInterval(() => {
        const diff = new Date(upcomingEvent.date).getTime() - new Date().getTime();
        if (diff < 0) {
          clearInterval(interval);
          setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          return;
        }
        setRemainingTime({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [upcomingEvent]);

  const handleReadMore = (id: string) => {
    // Vike intercepts this automatically for fast client-side routing
    window.location.href = `/events/${id}`; 
  };

  return (
    <>
      <ImageOverlaySection
        description="Join our initiatives and programs..."
        heading="Highlighted Events"
        imageUrl={images.Overlay}
      />
      <div className="px-4 py-10 max-w-7xl mx-auto">
        
        <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-12 h-1 bg-primary-theme rounded"></span>
          Upcoming Events
        </h2>

        {upcomingEvent ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <EventCard
              id={upcomingEvent._id}
              imageUrl={upcomingEvent.imageUrl}
              title={upcomingEvent.title}
              description={upcomingEvent.description}
              date={upcomingEvent.date}
              location={upcomingEvent.location || "Savitribai Resource Centre, Mumbai"}
              label="Upcoming"
              onReadMore={() => handleReadMore(upcomingEvent._id)}
            />
          </div>
        ) : (
          <p className="text-gray-500 mb-12">No upcoming events</p>
        )}

        <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-12 h-1 bg-primary-theme rounded"></span>
          Previous Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previousEvents.map((event) => (
            <EventCard
              id={event._id}
              key={event._id}
              imageUrl={event.imageUrl}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location || "Savitribai Resource Centre, Mumbai"}
              label="Past"
              onReadMore={() => handleReadMore(event._id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}