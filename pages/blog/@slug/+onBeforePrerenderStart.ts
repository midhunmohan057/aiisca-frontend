import { blogData } from "../../../src/utilities/data/blogData";

// This tells Vike to generate a static HTML page for every slug in your data
export default function onBeforePrerenderStart() {
  return blogData.map((blog) => `/blog/${blog.slug}`);
}