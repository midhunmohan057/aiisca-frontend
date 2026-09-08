import { icons } from "@assets/index";
import SectionHeader from "@components/SectionHeader";

const focusAreas = [
  {
    icon: icons.Grassroots,
    title: "Grassroots Mobilization",
    description:
      "We firmly believe that change begins at the grassroots level. As such, we actively engage in grassroots mobilization efforts, collaborating with Dalit communities to identify their unique needs and challenges.",
  },
  {
    icon: icons.Advocacy,
    title: "Advocacy and Awareness",
    description:
      "One of our primary objectives is to raise awareness about the systemic challenges faced by Dalits due to caste-based discrimination. We aim to sensitize the public to the enduring impact of casteism.",
  },
  {
    icon: icons.PoliticalEngagement,
    title: "Political Engagement",
    description:
      "To effect lasting change, we recognize the significance of political engagement. Our movement advocates for Dalit representation in political spheres and works to strengthen the political voice of Dalits.",
  },
  {
    icon: icons.Soliditory,
    title: "Solidarity and Collaboration",
    description:
      "Unity is the cornerstone of our movement. We actively seek alliances with other social justice movements, organizations, and individuals that share our vision of equality and justice.",
  },
  {
    icon: icons.CulturalRevival,
    title: "Cultural Revival and Empowerment",
    description:
      "We celebrate Dalit culture and heritage, recognizing the richness and diversity it brings to the world. Our movement endeavors to promote cultural revival, preserving traditional knowledge, arts, and customs.",
  },
];

const FocusSection = () => {
  return (
    <section className="bg-primary-theme text-white py-4 px-12">
      <SectionHeader title="Key area of focus" color="white" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10 mt-4">
        {focusAreas.map((area, index) => (
          <div key={index} className="space-y-4 text-center md:text-left">
            <img
              src={area.icon}
              alt={`${area.title}-icon`}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto md:mx-0 object-contain"
            />
            <h4 className="text-xl sm:text-2xl font-bold pt-2">{area.title}</h4>
            <p className="text-sm sm:text-base leading-relaxed font-normal">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusSection;