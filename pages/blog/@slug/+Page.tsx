import React, { useEffect, useCallback } from 'react';
import { useData } from 'vike-react/useData';
import type { ArticleData } from './+data';

export default function Page() {
  const imageWidth = 1080;
  const imageHeight = 1350;

  // Use the data passed directly from +data.ts!
  const { article } = useData<ArticleData>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [article]);

  const handleShare = useCallback((platform: string) => {
    const url = window.location.href;
    const plainTitle = article?.title || ""; 

    let shareUrl = '';
    switch (platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(plainTitle)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${plainTitle} ${url}`)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        default:
            return;
    }
    window.open(shareUrl, '_blank');
  }, [article]);

  if (!article) return <div className="text-center py-20 text-2xl text-gray-500">Article not found.</div>;

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
            {/* HERO SECTION */}
            <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className='w-full lg:w-1/2'>
                    {article.imageUrl ? (
                       <img
                         src={article.imageUrl}
                         alt={article.title}
                         width={imageWidth}
                         height={imageHeight}
                         className="w-full h-auto object-cover rounded-lg shadow-md aspect-[3/4]"
                       />
                    ) : (
                       <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center">No Image</div>
                    )}
                </div>
                <div className='self-center w-full lg:w-1/2'>
                    <h1 className="text-3xl lg:text-4xl w-full mb-6 font-bold uppercase leading-tight text-gray-900">
                        {article.title}
                    </h1>
                    <div className="text-gray-600 mt-4 border-l-4 border-primary-theme pl-4">
                        <p className="font-bold text-lg uppercase tracking-wider">{article.author}</p>
                        <p className="text-sm opacity-75 mt-1">Published on {article.date}</p>
                    </div>
                </div>
            </div>

            {/* ARTICLE BODY */}
            <div className="prose lg:prose-lg max-w-none text-gray-800 leading-loose">
                {article.content.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
            </div>

            {/* SHARE PANEL */}
            <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-3 text-primary-theme uppercase">Enjoyed this article?</h3>
                        <p className="text-gray-600 mb-6 font-semibold tracking-wider">Share it with your network!</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => handleShare('twitter')} className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-md" aria-label="Share on X">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </button>
                            <button onClick={() => handleShare('facebook')} className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#4267B2] text-white hover:bg-[#365899] transition-all transform hover:scale-105 hover:shadow-md" aria-label="Share on Facebook">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </button>
                            <button onClick={() => handleShare('whatsapp')} className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all transform hover:scale-105 hover:shadow-md" aria-label="Share on WhatsApp">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 .015 5.37.015 12.016c0 2.13.553 4.212 1.603 6.046L.048 24l6.096-1.597c1.782.978 3.805 1.493 5.887 1.493 6.646 0 12.016-5.37 12.016-12.016S18.677 0 12.031 0zm0 21.996c-1.802 0-3.563-.485-5.111-1.402l-.367-.217-3.8.996 1.01-3.704-.238-.378a9.92 9.92 0 01-1.53-5.36c0-5.545 4.51-10.05 10.05-10.05s10.05 4.505 10.05 10.05-4.505 10.05-10.05 10.05zM17.5 14.5c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3 0-.46.15-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17 0-.37 0-.57 0-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" /></svg>
                            </button>
                            <button onClick={() => handleShare('linkedin')} className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] text-white hover:bg-[#094d92] transition-all transform hover:scale-105 hover:shadow-md" aria-label="Share on LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12 mb-8">
                <a href="/blog" className="text-primary-theme hover:text-gray-800 font-bold text-lg uppercase tracking-widest transition-colors">&larr; Back to Blogs</a>
            </div>
        </div>
    </div>
  );
}