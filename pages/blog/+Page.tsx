import React from "react";
import ImageOverlaySection from "@components/ImageOverlaySection";
import { images as assetsImage } from "@assets/index";
import { blogData, BlogPost } from "@utilities/data/blogData";

export default function Page() {
  const imageWidth = 1080;
  const imageHeight = 1350;

  // Separate the latest blog for the Hero section, and the rest for the grid
  const latestBlog = blogData[0];
  const olderBlogs = blogData.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <ImageOverlaySection
        description="Read the latest insights, analyses, and voices from the ground on issues of caste, economics, and social justice."
        heading="Featured Blogs"
        imageUrl={assetsImage.Overlay}
      />

      <div className="px-4 lg:px-12 py-12 lg:py-20 max-w-7xl mx-auto">
        
        {/* HERO SECTION - Latest Article */}
        {latestBlog && (
          <div className="flex flex-col lg:flex-row-reverse lg:justify-between items-center gap-10 lg:gap-16 mb-20 border-b pb-16">
            <a href={`/blog/${latestBlog.slug}`} className="w-full lg:w-1/2 block overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={latestBlog.imageUrl} 
                alt={latestBlog.title} 
                width={imageWidth}
                height={imageHeight}
                className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                loading="lazy" 
              />
            </a>
            
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-sm text-gray-500 uppercase tracking-widest font-semibold">
                <span>{latestBlog.date}</span>
                <span>•</span>
                <span>{latestBlog.author}</span>
              </div>
              <a href={`/blog/${latestBlog.slug}`} className="group">
                <h2 className="text-3xl lg:text-5xl uppercase font-bold leading-tight text-gray-900 group-hover:text-primary-theme transition-colors">
                  {latestBlog.title}
                </h2>
              </a>
              <p className="text-xl text-gray-600 leading-relaxed">
                {latestBlog.description}
              </p>
              <div>
                <a 
                  href={`/blog/${latestBlog.slug}`} 
                  className="inline-block mt-4 px-8 py-3 border-2 border-primary-theme text-primary-theme uppercase tracking-widest font-bold hover:bg-primary-theme hover:text-white transition-colors"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
        )}

        {/* SECTION DIVIDER */}
        <div className="border border-gray-300 flex items-center justify-center p-2 w-full lg:w-1/2 mx-auto mb-16">
          <p className="text-xl tracking-[0.5rem] text-gray-500 italic uppercase">More Articles</p>
        </div>

        {/* ARTICLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {olderBlogs.map((blog: BlogPost) => (
            <a
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="flex flex-col group cursor-pointer"
            >
              <div className="aspect-[3/4] w-full overflow-hidden rounded-md mb-6 shadow-md">
                {blog.imageUrl ? (
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={imageWidth}
                    height={imageHeight}
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>

              <div className="flex-grow flex flex-col">
                <div className="text-xs uppercase text-gray-500 tracking-widest mb-3 font-semibold">
                  {blog.date} • {blog.author}
                </div>
                <h3 className="text-xl font-bold uppercase leading-snug mb-3 group-hover:text-primary-theme transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {blog.description}
                </p>
                <div className="mt-auto text-primary-theme font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read More <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}