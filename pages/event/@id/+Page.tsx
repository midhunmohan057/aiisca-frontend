import { usePageContext } from "vike-react/usePageContext";
import { MdLocationOn, MdEvent } from "react-icons/md";
import { eventsData } from "@utilities/data/eventsData";

export default function Page() {
  // Get the dynamic @id from the Vike route parameters
  const pageContext = usePageContext();
  const id = pageContext.routeParams.id;

  // Find the specific event
  const event = eventsData.find((e) => e._id === id);

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Event Not Found</h1>
        <button onClick={() => window.history.back()} className="mt-4 text-primary-theme underline cursor-pointer">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        {event.title}
      </h1>

      <div className="w-full rounded-2xl overflow-hidden shadow-md mb-8">
        <img src={event.imageUrl} alt={event.title} className="w-full h-80 object-cover" />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-600 mb-6">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <MdEvent className="text-primary-theme"/>
          {new Date(event.date).toLocaleDateString()} |{" "}
          {new Date(event.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
        <div className="flex items-center gap-2">
          <span className="material-icons text-primary-theme text-base">
            <MdLocationOn className="text-primary-theme" />
          </span>
          {event.location || "Savitribai Resource Centre, Mumbai"}
        </div>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
        {event.description}
      </p>

      <div className="flex justify-end mt-8 gap-3">
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2 rounded-lg border border-primary-theme hover:bg-gray-100 transition cursor-pointer"
        >
          Back
        </button>
      </div>
    </div>
  );
}