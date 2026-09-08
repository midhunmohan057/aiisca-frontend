import { constants, ManifestoCardProps } from "@utilities/index";
import { icons, images } from "@assets/index";
import SectionHeader from "@components/SectionHeader";
import ManifestoCard from "./ManifestoCards";
import MilestoneTimeline from "./Timeline";

export default function Page() {
  const cards: ManifestoCardProps[] = [
    {
      icon: <img src={icons.Vector} alt="icon" />,
      title: "Reservation in Pvt Sector & Government Institutions",
      paragraphs: [
        "We demand extending the reservation policy to the private sector in employment and education to ensure opportunities for Dalits across all economic sectors.",
        "We call for filling backlog vacancies in government institutions and urge comprehensive laws guaranteeing proportional representation of Dalits in all public bodies, education, and services.",
      ],
    },
    {
      icon: <img src={icons.Vector1} className="h-8 w-8" alt="icon" />,
      title: "Socio - Economic Upliftment",
      paragraphs: [
        "To address caste-based discrimination and atrocities, we propose separate settlements for Dalits with access to basic amenities and livelihood resources, especially land.",
        "We also urge government support for autonomous educational and economic institutions to foster skill development, entrepreneurship, and self-reliance within the community.",
      ],
    },
    {
      icon: <img className="h-8 w-8" src={icons.Vector2} alt="icon" />,
      title: "Caste Atrocity Prevention and Justice",
      paragraphs: [
        "To protect Dalits from caste-based atrocities, we demand the implementation of stringent laws and the establishment of fast-track courts for the timely dispensation of justice",
        "We call for the formation of special investigation teams to ensure proper and unbiased handling of cases related to caste violence and discrimination.",
      ],
    },
    {
      icon: <img className="h-8 w-8" src={icons.Vector3} alt="icon" />,
      title: "Political Representation and Accountability",
      paragraphs: [
        "We emphasize the need to support and strengthen Dalit-led political parties at both regional and national levels. Their presence and influence are vital in voicing the concerns and interests of Dalits effectively.",
        "We demand that elected representatives prioritize the welfare of the Dalit community and actively work towards addressing their issues, rather than being influenced solely by party politics.",
      ],
    },
    {
      icon: <img className="h-8 w-8" src={icons.Vector4} alt="icon" />,
      title: "Education and Awareness",
      paragraphs: [
        "We urge the government to implement inclusive curricula that highlight the contributions of Dalit leaders and promote awareness about caste-based discrimination in educational institutions. ",
        "We call for targeted programs and initiatives to promote education among Dalit children, ensuring their access to quality education and equal opportunities.",
      ],
    },
  ];

  return (
    <section className="font-semibold text-sm overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 pb-6">
        <div className="w-full md:w-3/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4 text-black-theme">
            A <span className="text-primary-theme font-semibold">Pledge</span> for an <br />
            inclusive and <br />
            empowered future
          </h1>

          <p className="text-sm md:text-base text-black-theme font-medium my-4">
            {constants.MANIFESTO_HEADING}
          </p>

          <button className="bg-primary-theme text-white rounded-lg font-semibold px-4 py-2 hover:bg-primary-theme">
            Explore our Vision Below
          </button>

          <p className="text-[5rem] sm:text-[3rem] md:text-[5rem] lg:text-[9rem] font-bold text-gray-500 opacity-20 mt-8 select-none tracking-wide leading-none">
            PREAMBLE
          </p>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src={images.Sthambha}
            alt="Sthambha"
            className="scale-x-125 scale-y-110 w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 text-black-theme font-medium my-8">
        <div className="bg-primary-theme w-4 sm:w-6 h-6 sm:h-20" />
        <div className="sm:ml-1">{constants.MANIFESTO_DESCRIPTION2}</div>
      </div>

      <ManifestoCard cardData={cards} />
      
      <MilestoneTimeline />

      <div className="mt-12">
        <SectionHeader title="Conclusion" color="black" />
        <div className="w-full max-w-full flex flex-col sm:flex-row items-start gap-3 text-black-theme font-medium mt-4">
          <div className="bg-primary-theme w-4 sm:w-3 h-6 sm:h-24" />
          <div className="sm:ml-1">
            {constants.MANIFESTO_CONCLUSION}
            <br /><br />
            We invite all stakeholders—technologists, policymakers, businesses, civil society organizations, and citizens—to join us in this vital endeavor. Together, we can shape an AI-enabled future that amplifies human potential, addresses our greatest challenges, and reflects our highest aspirations.
          </div>
        </div>
      </div>
    </section>
  );
}