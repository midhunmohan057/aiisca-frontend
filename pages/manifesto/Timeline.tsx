import PageLayout from "@/Components/PageLayout";
import SectionHeader from "@/Components/SectionHeader";

const timelineData = [
  {
    title: "Call for and Conferences on Reservation in Private Sector",
    content: "",
    image:
      "https://res.cloudinary.com/dk8fjl37p/image/upload/v1783247391/asmaxvsz3prvx9qokyqo.jpg",
  },
  {
    title: "Setting up Dalit Agenda",
    content: "Setting up Dalit Agenda",
    image:
      "https://res.cloudinary.com/dk8fjl37p/image/upload/v1782923775/vxszjvuayclis3vauhhx.jpg",
  },
  {
    title: "Advocacy against changes in Rajarshi Shahu Maharaj Scholarship",
    image:
      "https://res.cloudinary.com/dmvdn1dud/image/upload/v1722450499/dpqgwvnomxijc3gxe9vu.png",
  },

  {
    title: "Social Reflection on State and Direction of Ambedkarite Politics",
    image:
      "https://res.cloudinary.com/dk8fjl37p/image/upload/v1783240191/fknjgblqgkvfb8ybedts.jpg",
  },
  {
    title:
      "Opening of Savitribai Phule Resource Centres in multiple districts of Maharashtra",
    image:
      "https://res.cloudinary.com/dmvdn1dud/image/upload/v1732642677/ijq5kkxjlkwlfvt5c9dd.jpg",
  },
  {
    title: "Launch of The Ambedkarian Chronicle media platform",
    image:
      "https://res.cloudinary.com/dk8fjl37p/image/upload/v1783250233/iagg6opj7fenim3agw4e.jpg",
  },
];

const Timeline = () => {
  return (
    <div className="bg-primary-theme text-white font-semibold text-sm overflow-y-hidden">
      <PageLayout>
        <SectionHeader title="Milestones" color="white" />
      </PageLayout>
      <div
        className="md:w-[120vw] w-[100vw] h-[480px] p-5 relative overflow-hidden bg-primary-theme flex items-center"
        style={{ padding: "1.2rem" }}
      >
        {/* Main horizontal line */}
        <div className="absolute top-1/2 left-0  w-[350vw] md:w-[120vw] h-1  bg-[#a0a8db] opacity-55 z-0" />

        <div
          className="w-full h-[480px] p-5 relative overflow-x-auto bg-primary-theme flex items-center"
          style={{ padding: "1.2rem" }}
        >
          {" "}
          {/* Main horizontal line */}{" "}
          <div className="absolute top-1/2 left-0 w-[350vw] md:w-[120vw] h-1 bg-[#a0a8db] opacity-55 z-0" />{" "}
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={index}
                style={{ padding: "1.2rem", margin: "0rem 1.5rem" }}
                className={`relative w-[200px] h-[200px] p-5 flex-shrink-0 rounded-lg  mx-6 z-10 ${isEven ? "self-end" : "self-start"}`}
              >
                {" "}
                {/* Vertical connector */}{" "}
                <div
                  className={`absolute w-1 bg-[#a0a8db] opacity-55 left-0 transform -translate-x-1/2 z-0 ${isEven ? "-bottom-4 h-[230px]" : "-top-2 h-[230px]"}`}
                ></div>{" "}
                {/* Dot */}{" "}
                <div
                  className={`absolute w-4 h-4 rounded-full bg-white left-0 ${isEven ? "-top-5" : "-bottom-10"} transform -translate-x-1/2 -translate-y-1/2 z-10`}
                />{" "}
                {/* Title and content */}{" "}
                <div className="flex  h-full w-[800px]">
                  <div className="w-[200px] h-full">
                    {" "}
                    <div className="h-1/3 max-w-[200px]">
                      {" "}
                      <h2 className="font-medium text-xl text-white p-1">
                        {item.title}
                      </h2>{" "}
                    </div>{" "}
                  </div>
                  <div className="w-[250px] h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
