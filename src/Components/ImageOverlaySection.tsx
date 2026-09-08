import React from "react";

interface ImageOverlaySectionProps {
  imageUrl: string;
  heading: string;
  description: string;
}

const ImageOverlaySection: React.FC<ImageOverlaySectionProps> = ({
  imageUrl,
  heading,
  description,
}) => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-[250px] sm:min-h-[300px] md:min-h-[350px] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-theme opacity-80" />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {heading}
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageOverlaySection;
