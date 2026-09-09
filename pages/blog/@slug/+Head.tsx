import React from 'react';
import { useData } from 'vike-react/useData';
import type { ArticleData } from './+data';

export default function Head() {
  const { article } = useData<ArticleData>();
  
  // Replace with your actual production domain
  const baseUrl = 'https://aiisca.org'; 
  const fullUrl = `${baseUrl}/blog/${article.slug}`;
  const imageUrl = `${baseUrl}${article.imageUrl}`;

  return (
    <>
      <title>{article.title} | AIISCA</title>
      <meta name="description" content={article.description} />
      <meta name="keywords" content={`${article.title.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, ', ')}, ${article.author.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, ', ')}, dalit politics, social justice, aiisca`} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:title" content={article.title} />
      <meta property="og:description" content={article.description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="AIISCA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={article.title} />
      <meta name="twitter:description" content={article.description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}