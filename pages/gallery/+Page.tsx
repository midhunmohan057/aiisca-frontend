import ImageOverlaySection from "@components/ImageOverlaySection";
import { useState, useMemo } from "react";
import { images as assetsImage } from "@assets/index";
import { galleryData, ImageItem } from "@utilities/data/galleryData";

export default function Page() {
  const [name, setName] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [date, setDate] = useState<string>("");

  // Automatically extract unique cities from the static data
  const cities = useMemo(() => {
    return [...new Set(galleryData.map((image) => image.city.toLowerCase()))];
  }, []);

  // Filter images based on state
  const filterImages = useMemo(() => {
    let filtered = galleryData;

    if (name) {
      filtered = filtered.filter((image) =>
        image.imageName.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (year) {
      filtered = filtered.filter((image) =>
        image.year.toString().includes(year)
      );
    }
    if (city) {
      filtered = filtered.filter((image) =>
        image.city.toLowerCase().includes(city.toLowerCase())
      );
    }
    if (date) {
      filtered = filtered.filter((image) => image.date.includes(date));
    }
    return filtered;
  }, [name, year, city, date]);

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    return years;
  };

  return (
    <>
      <ImageOverlaySection
        description="Explore the visual journey of AIISCA's events, public meetings, and grassroots mobilization efforts across India."
        heading="Gallery"
        imageUrl={assetsImage.Overlay}
      />
      
      <div className="px-4 py-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary-theme uppercase">
            Gallery
          </h1>
          <div className="w-20 h-1 bg-primary-theme mx-auto mt-2 rounded-md" />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-theme bg-white"
          />

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-theme bg-white"
          >
            <option value="">Select Year</option>
            {getYears().map((yearValue, index) => (
              <option key={index} value={yearValue}>
                {yearValue}
              </option>
            ))}
          </select>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-theme bg-white capitalize"
          >
            <option value="">Select City</option>
            {cities.map((cityName, index) => (
              <option key={index} value={cityName} className="capitalize">
                {cityName}
              </option>
            ))}
          </select>

          <input
            type="date"
            placeholder="Date"
            value={date}
            min="0001-01-01"
            max="9999-12-31"
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-theme bg-white"
          />
        </div>

        {/* Gallery Masonry Layout */}
        {filterImages.length === 0 ? (
          <p className="text-center text-gray-600 py-12">No images found matching your filters.</p>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filterImages.map((image) => (
              <div
                key={image._id}
                className="cursor-pointer break-inside-avoid relative group overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={image.imageUrl}
                  alt={image.imageName}
                  className="w-full h-auto rounded-lg object-contain transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-primary-theme bg-opacity-40 opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out p-4 text-white text-sm flex flex-col justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    <p className="mb-1">
                      <strong>Name:</strong> {image.imageName}
                    </p>
                    <p className="mb-1">
                      <strong>Date:</strong> {image.date}
                    </p>
                    <p className="mb-1">
                      <strong>Year:</strong> {image.year}
                    </p>
                    <p className="capitalize">
                      <strong>City:</strong> {image.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}