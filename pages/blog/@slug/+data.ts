import { render } from 'vike/abort';
import type { PageContext } from 'vike/types';
import { blogData, BlogPost } from "../../../src/utilities/data/blogData";

export type ArticleData = {
  article: BlogPost;
};

export async function data(pageContext: PageContext): Promise<ArticleData> {
  const { slug } = pageContext.routeParams;
  const article = blogData.find((a) => a.slug === slug);

  if (!article) {
    // Automatically triggers your Vike 404 error page
    throw render(404, 'Article not found');
  }

  return { article };
}