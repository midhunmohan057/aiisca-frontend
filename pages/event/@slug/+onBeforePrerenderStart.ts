import { eventsData } from "../../../src/utilities/data/eventsData";

export default function onBeforePrerenderStart() {
  return eventsData.map((event) => `/event/${event.slug}`);
}