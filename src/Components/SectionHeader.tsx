import React from "react";

interface SectionHeaderProps {
  title: string;
  color: "black" | "white"; // or any string if you want to pass full hex codes
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  color = "black",
}) => {
  const barColor = color === "white" ? "bg-white" : "bg-primary-theme";
  const textColor = color === "white" ? "text-white" : "text-black";

  return (
    <div
      className={`flex items-center gap-2 text-left font-semibold uppercase ${textColor} px-4 sm:px-0 py-6 sm:py-8 text-base sm:text-xl`}
    >
      <div className={`h-1 w-10 sm:w-14 ${barColor} rounded-md`} />
      <span className="leading-snug">{title}</span>
    </div>
  );
};

export default SectionHeader;
