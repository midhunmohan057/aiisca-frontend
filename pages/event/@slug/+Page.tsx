import React, { useEffect } from 'react';
import { useData } from 'vike-react/useData';
import type { EventData } from './+data';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Footer from '@components/Footer';

export default function Page() {
  const { event } = useData<EventData>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [event]);

  if (!event) return <div className="text-center py-20 text-2xl text-gray-500">Event not found.</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-grow container mx-auto px-4 py-12 lg:py-20">
            <div className="max-w-4xl mx-auto">
                
                {/* HERO SECTION */}
                <div className="mb-12">
                    {event.imageUrl ? (
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="w-full h-[400px] object-cover rounded-lg shadow-md mb-8"
                        />
                    ) : (
                        <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center mb-8">No Image</div>
                    )}
                    
                    <h1 className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-900 mb-6">
                        {event.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-gray-700 bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                            <Calendar className="size-5 text-primary-theme" />
                            <span className="font-semibold">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="size-5 text-primary-theme" />
                            <span className="font-semibold">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 w-full mt-2">
                            <MapPin className="size-5 text-primary-theme" />
                            <span className="font-semibold">{event.location}</span>
                        </div>
                    </div>
                </div>

                {/* EVENT CONTENT */}
                <div className="prose lg:prose-lg max-w-none text-gray-800 leading-loose">
                    {event.content.map((paragraph, index) => (
                      <p key={index} className="mb-6 text-lg">
                        {paragraph}
                      </p>
                    ))}
                </div>

                <div className="text-center mt-16 mb-8 border-t pt-8">
                    {/* Fixed routing from /events to /event */}
                    <a href="/event" className="text-primary-theme hover:text-gray-800 font-bold text-lg uppercase tracking-widest transition-colors">&larr; Back to Events</a>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}