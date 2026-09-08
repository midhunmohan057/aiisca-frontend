import SectionHeader from "@components/SectionHeader";

const timelineData = [
  {
    title: "Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  { title: "Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
  { title: "Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
];

const Timeline = () => {
  return (
    <div className="bg-primary-theme text-white font-semibold text-sm overflow-y-hidden rounded-lg my-8">
      <div className="px-4 pt-6">
        <SectionHeader title="Milestones" color="white"/>
      </div>
      <div
        className="w-full h-[480px] p-5 relative overflow-x-auto bg-primary-theme flex items-center"
        style={{ padding: "1.2rem" }}
      >
        {/* Main horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white z-0" />

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={index}
              style={{ padding: "1.2rem", margin: "0rem 1.5rem" }}
              className={`relative max-w-[230px] h-[200px] p-5 flex-shrink-0 rounded-lg shadow-md mx-6 z-10 ${
                isEven ? "self-end" : "self-start"
              }`}
            >
              {/* Vertical connector */}
              <div
                className={`absolute w-1 bg-[#e6e9fd] left-0 transform -translate-x-1/2 z-0 ${
                  isEven ? "-bottom-4 h-[230px]" : "-top-2 h-[230px]"
                }`}
              ></div>

              {/* Dot */}
              <div
                className={`absolute w-4 h-4 rounded-full bg-white left-0 ${
                  isEven ? "-top-5" : "-bottom-10"
                } transform -translate-x-1/2 -translate-y-1/2 z-10`}
              />

              {/* Title and content */}
              <div className="font-bold text-xl text-white mb-2">{item.title}</div>
              <div className="text-sm text-white font-medium">{item.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;