import React, { useState } from "react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className = "",
  fallbackText = "Failed to load image",
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {loading && !error && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-xl  h-full w-full"></div>
      )}

      {!error ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          className={`w-full h-full object-cover transition-opacity duration-500 rounded-md ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      ) : (
        <div className="text-center text-sm text-red-600 p-4">
          {fallbackText}
        </div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;
