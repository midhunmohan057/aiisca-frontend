import { useState } from "react";
import SectionHeader from "@components/SectionHeader";

type TabContent = {
  title: string;
  text: string;
};

type TabKey = "Past" | "Present" | "Future";
const tabs: TabKey[] = ["Past", "Present", "Future"];

const content: Record<TabKey, TabContent> = {
  Past: {
    title: "The Historical Struggle",
    text: `For centuries, Dalits have faced systemic discrimination, untouchability, and socio-economic marginalization. Dr. B.R. Ambedkar's tireless efforts laid the foundation for a constitutional framework aimed at dismantling these oppressive structures. However, the legacy of caste continues to impact lives deeply.`,
  },
  Present: {
    title: "Current Realities and Challenges",
    text: `Despite legal protections, Dalits today still contend with landlessness, income disparities, backlog in reserved jobs, and rising caste atrocities. Privatization further exacerbates these issues, limiting access to essential services and opportunities that could uplift the community.`,
  },
  Future: {
    title: "Envisioning an Equal Future",
    text: `Our vision is a nation where Babasaheb's ideals of liberty, equality, and fraternity are fully realized. This future involves expanding reservations, ensuring proportional representation, establishing safe settlements, and fostering autonomous Dalit institutions, leading to true social and economic justice.`,
  },
};

const Journey = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Past");

  return (
    <div className="bg-primary-theme text-white text-center py-8 px-4 sm:px-8 rounded-lg my-8">
      <div className="text-sm text-white text-center tracking-widest font-semibold flex justify-center mx-auto">
        <SectionHeader title="OUR JOURNEY – PAST. PRESENT, FUTURE" color="white" />
      </div>

      <div className="flex justify-center space-x-8 border-b border-white max-w-xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 w-sm cursor-pointer relative text-sm sm:text-base transition-colors duration-300 font-medium ${
              activeTab === tab ? "text-white" : "text-lightest-blue hover:text-white"
            }`}
          >
            {tab}
            <span
              className={`cursor-pointer absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                activeTab === tab ? "w-full" : "w-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      <div className="mx-auto p-8 transition-opacity duration-500 ease-in-out opacity-100 max-w-3xl max-h-fit">
        <p className="text-xl sm:text-2xl font-bold mb-4">
          {content[activeTab].title}
        </p>
        <p className="text-white leading-relaxed px-4 sm:px-8">
          {content[activeTab].text}
        </p>
      </div>
    </div>
  );
};

export default Journey;