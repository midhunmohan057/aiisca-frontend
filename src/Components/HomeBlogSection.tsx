import SectionHeader from "@components/SectionHeader";
import ViewAllLink from "@components/ViewAllLink";
import { routes } from "@utilities/index";
import { blogData } from "@utilities/data/blogData";
import { FiArrowUpRight } from "react-icons/fi";

export default function HomeBlogSection() {
  // Take only the first 4 latest blogs
  const latestBlogs = blogData.slice(0, 4);

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <SectionHeader title="The Ambedkarian Chronicle" color="black" />
        <ViewAllLink href="/blog" text="View All" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestBlogs.map((blog) => (
          <a
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 cursor-pointer"
          >
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <h3 className="font-bold text-lg leading-tight mb-2 text-gray-900 line-clamp-2">
              {blog.title}
            </h3>
            
            <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow">
              {blog.description}
            </p>

            <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-50">
              <div>
                <p className="text-sm font-medium text-gray-900">{blog.author}</p>
                <p className="text-xs text-gray-500">{blog.date}</p>
              </div>
              <FiArrowUpRight className="text-xl text-gray-900 group-hover:text-primary-theme transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}