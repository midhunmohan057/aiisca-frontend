import { eventsData } from "../../../src/utilities/data/eventsData";

export function onBeforePrerenderStart() {
  // This tells Vike to generate an HTML page for every _id in your data array
  return eventsData.map((event) => `/event/${event._id}`);
}