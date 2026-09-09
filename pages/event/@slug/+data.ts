import { render } from 'vike/abort';
import type { PageContext } from 'vike/types';
import { eventsData, EventItem } from "../../../src/utilities/data/eventsData";

export type EventData = {
  event: EventItem;
};

export async function data(pageContext: PageContext): Promise<EventData> {
  const { slug } = pageContext.routeParams;
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    throw render(404, 'Event not found');
  }
  return { event };
}