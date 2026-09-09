import React from "react";
import ImageOverlaySection from "@components/ImageOverlaySection";
import { images as assetsImage } from "@assets/index";
import { eventsData, EventItem } from "@utilities/data/eventsData";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ImageOverlaySection
        description="Stay updated with our upcoming public meetings, workshops, and grassroots campaigns across the country."
        heading="Events & Programs"
        imageUrl={assetsImage.Overlay}
      />

      <div className="px-4 lg:px-12 py-12 lg:py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-theme uppercase tracking-wider">
            All Events
          </h1>
          <div className="w-20 h-1 bg-primary-theme mx-auto mt-3 rounded-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsData.map((event: EventItem) => (
            <a
              key={event.id}
              href={`/event/${event.slug}`}
              className="flex flex-col group cursor-pointer bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="aspect-video w-full overflow-hidden">
                {event.imageUrl ? (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold uppercase leading-snug mb-4 group-hover:text-primary-theme transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-primary-theme" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-primary-theme" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
                  {event.description}
                </p>
                
                <div className="mt-auto inline-block px-6 py-2 border-2 border-primary-theme text-primary-theme uppercase tracking-widest text-sm font-bold group-hover:bg-primary-theme group-hover:text-white transition-colors text-center rounded-md">
                  View Details
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}