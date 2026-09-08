import { color } from "@utilities/index";
import toast from "react-hot-toast";
import { MdEvent, MdLocationOn, MdShare } from "react-icons/md";

interface EventCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  location: string;
  label?: string;
  onReadMore: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl, id, title, description, date, location, label, onReadMore,
}) => {
  const handleShare = async () => {
    try {
      // Updated to /events/ instead of /event/ to match the Vike folder structure
      const shareUrl = `${window.location.origin}/events/${id}`;
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Event link copied!", { duration: 2000 });
    } catch (err) {
      toast.error("Failed to copy link!");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative rounded-2xl">
        <img src={imageUrl} alt={title} className="h-48 w-full object-contain" />
        {label && (
          <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {label}
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-3">{description}</p>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MdEvent className="text-primary-theme" />
            <span>
              {new Date(date).toLocaleDateString()} |{" "}
              {new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-primary-theme" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center gap-2">
        <button
          onClick={onReadMore}
          className="flex-1 text-primary-theme cursor-pointer border-2 border-primary-theme font-medium py-1 px-4 rounded-lg hover:bg-primary-theme hover:text-white transition"
        >
          Read More
        </button>
        <button
          onClick={handleShare}
          className="text-primary-theme cursor-pointer border-2 border-primary-theme font-medium py-1 px-3 rounded-lg hover:scale-105 transition"
        >
          <MdShare size={24} color={color.PRIMARY_THEME} />
        </button>
      </div>
    </div>
  );
};

export default EventCard;