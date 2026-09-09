import React from 'react';
import { useData } from 'vike-react/useData';
import type { EventData } from './+data';

export default function Head() {
  const { event } = useData<EventData>();
  const baseUrl = 'https://aiisca.org'; // Replace with actual domain
  const fullUrl = `${baseUrl}/event/${event.slug}`;
  const imageUrl = `${baseUrl}${event.imageUrl}`;

  return (
    <>
      <title>{event.title} | AIISCA Events</title>
      <meta name="description" content={event.description} />
      <meta property="og:title" content={event.title} />
      <meta property="og:description" content={event.description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={event.title} />
      <meta name="twitter:description" content={event.description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}