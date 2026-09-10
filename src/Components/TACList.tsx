import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@components/SectionHeader";
import ViewAllLink from "@components/ViewAllLink";

const tacData = [
  {
    id: 1,
    title: "Spirituality, Dalit women and Buddha",
    description:
      "Rohini Bhadarge explores the deep relationship between Dalit women and spirituality, tracing the journey from the refuge of local 'stone gods' to the radical self-respect found in Buddha’s Dhamma.",
    image: "https://theambedkarianchronicle.in/images/spirituality-dalit-women-and-buddha.jpg",
    author: "Rohini Bhadarge",
    date: "30/4/2026",
    link: "https://theambedkarianchronicle.in/spirituality-dalit-women-and-buddha",
  },
  {
    id: 2,
    title: "Remembering Babashab Ambedkar: The Unfinished Task of Burying Manu",
    description:
      "Democracy, when placed in the hands of ruling castes, does not fail by accident – it works precisely as it should. It produces not the emancipatory effects it promises, but their inversion.",
    image: "https://theambedkarianchronicle.in/images/remembering-babashab-ambedkar-unfinished-task-burying-manu.jpg",
    author: "Dr.Rahul Sonpimple",
    date: "14/4/2026",
    link: "https://theambedkarianchronicle.in/remembering-babashab-ambedkar-unfinished-task-burying-manu",
  },
  {
    id: 3,
    title: "Escaping Sugarcane Fields",
    description:
      "Even now, sitting on the banks of the Regent’s Canal in London, I feel a faint pain in my right knee joint. But the deeper pain is not physical...",
    image: "https://theambedkarianchronicle.in/images/escaping-sugarcane-fields.jpg",
    author: "Prashant Randive",
    date: "11/3/2026",
    link: "https://theambedkarianchronicle.in/escaping-sugarcane-fields",
  },
  {
    id: 4,
    title: "The making of a Politician: Phoolan Devi's lonely years in prison",
    description:
      "How did Phoolan Devi spend her years in prison, and what futures did she imagine for herself from behind bars? This article explores these questions through her prison correspondence, contemporary news archives and related documentary.",
    image: "https://theambedkarianchronicle.in/images/phoolan-devi-prison-years.jpg",
    author: "Ritesh Jyoti",
    date: "9/2/2026",
    link: "https://theambedkarianchronicle.in/phoolan-devi-lonely-years-in-prison",
  },
];

export default function TACList({ showHeader }: { showHeader: boolean }) {
  return (
    <section className="py-5">
      {showHeader && (
        <div className="text-left font-bold text-xl flex gap-2 items-center justify-between mb-8">
          <SectionHeader title="The Ambedkarian Chronicle" color="black" />
          <ViewAllLink
            href="https://theambedkarianchronicle.in/"
            text="View All"
            target="_blank"
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {tacData.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
          >
            {/* Image */}
            <div className="relative p-5 pb-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-44 object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col h-[260px]">
              <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                {blog.description}
              </p>

              <div className="mt-auto flex items-center justify-between">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-medium text-sm text-gray-900">
                      {blog.author}
                    </p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                </div>

                {/* Link */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  <ArrowUpRight size={22} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}