import { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { MdKeyboardBackspace } from "react-icons/md";
import { constants, team, routes } from "@utilities/index";
import { images, icons } from "@assets/index";
import SectionHeader from "@components/SectionHeader";
import ImageWithLoader from "@components/ImageWithLoader";
import ViewAllLink from "@components/ViewAllLink";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button 
      type="button" 
      onClick={() => setCount((count) => count + 1)}
      className="px-4 py-2 bg-primary-theme text-white rounded-md"
    >
      Counter {count}
    </button>
  );
}

export function VolunteerCollage() {
  return (
    <div className="relative w-full max-w-4xl bg-gray-50 min-h-fit"></div>
  );
}

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

export function FocusSection() {
  return (
    <section className="bg-primary-theme text-white py-8 px-6 lg:px-12 my-12 rounded-sm">
      <SectionHeader title="Key area of focus" color="white" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10 mt-6">
        {focusAreas.map((area, index) => (
          <div key={index} className="space-y-4 text-center md:text-left">
            <img
              src={area.icon}
              alt={`${area.title}-icon`}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto md:mx-0 object-contain"
            />
            <h4 className="text-xl sm:text-2xl font-bold pt-2">{area.title}</h4>
            <p className="text-sm sm:text-base leading-relaxed font-normal text-indigo-100">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

type Member = {
  name: string;
  role: string;
  image: string;
  social?: {
    instagram?: string;
    linkedin?: string;
    x?: string;
    facebook?: string;
  };
};

export function TeamSection({
  teamMembers,
  showHeadings = true,
}: {
  teamMembers: Member[];
  showHeadings: boolean;
}) {
  const iconSize = 20;
  
  return (
    <section className="text-center py-12">
      {showHeadings ? (
        <div className="text-left font-bold text-xl flex gap-2 items-center justify-between mb-8">
          <SectionHeader title="Meet the team" color="black" />
          <ViewAllLink href={routes.TEAM} text="View All" />
        </div>
      ) : (
        <div className="flex items-center gap-2 text-primary-theme cursor-pointer mb-6">
          <a href={routes.HOME} className="flex items-center gap-2 font-semibold">
            <MdKeyboardBackspace size={25} />
            <span>Home</span>
          </a>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers?.map((member, idx) => (
          <div
            key={idx}
            className={`relative w-full overflow-hidden shadow-lg group rounded-lg bg-gray-100 ${showHeadings ? "h-80" : "h-80"}`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[rgba(13,12,100,0.9)] via-[rgba(13,12,100,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 right-0 text-white px-6 py-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
              <p className="text-xl font-bold text-left">{member.name}</p>
              <p className="text-[15px] font-medium text-left text-indigo-200">{member.role}</p>
              <div className="flex gap-4 mt-2">
                {member?.social?.instagram && (
                  <a href={member?.social?.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram size={iconSize} />
                  </a>
                )}
                {member?.social?.linkedin && (
                  <a href={member?.social?.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn size={iconSize} />
                  </a>
                )}
                {member?.social?.x && (
                  <a href={member?.social?.x} target="_blank" rel="noreferrer">
                    <FaXTwitter size={iconSize} />
                  </a>
                )}
                {member?.social?.facebook && (
                  <a href={member?.social?.facebook} target="_blank" rel="noreferrer">
                    <FaFacebookF size={iconSize} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <section className="font-semibold text-sm overflow-hidden px-4 lg:px-12 pt-8">
        {/* Join the movement Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-black-theme overflow-hidden">
              Join the <br /> Movement for <br />
              <span className="text-primary-theme font-semibold">
                Social Justice
              </span>
            </h1>
            <p className="text-sm text-black-theme font-medium my-4">
              At <strong className="text-primary-theme">AIISCA</strong>, we
              are committed to building a society where every individual,
              regardless of caste, has access to quality education and equal
              opportunities. Our initiatives, like the{" "}
              <strong className="text-primary-theme">
                Savitribai Phule Resource Centre
              </strong>
              , provide safe spaces, resources, and mentorship to{" "}
              <span className="text-primary-theme">
                uplift marginalized communities
              </span>
              .
            </p>
            <button
              className="bg-primary-theme text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
              style={{ padding: "0.5rem 1rem" }}
            >
              Be a part of the change
            </button>
          </div>

          <div className="relative w-full max-w-xl mx-auto">
            <ImageWithLoader
              src={images.Collage}
              alt="Collage"
              className="w-full max-h- mx-auto sm:max-w-[350px] md:max-w-[450px] lg:max-w-[650px]"
            />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white rounded-2xl p-2 sm:px-3 sm:py-2 shadow-lg flex items-center gap-2 text-primary-theme text-sm sm:text-base font-semibold">
              <FaHandHoldingHeart />
              <span>100+ Volunteers</span>
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:-right-15 bg-white rounded-2xl p-2 sm:px-3 sm:py-2 shadow-lg flex items-center gap-2 text-primary-theme text-sm sm:text-base font-semibold">
              <FaHandHoldingHeart />
              <span>100+ Volunteers</span>
            </div>
          </div>
        </div>

        {/* Who we are / What we do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          <div>
            <SectionHeader title="Who we are ?" color="black" />
            <p className="text-black-theme font-medium text-sm mt-3">
              {constants.WHO_WE_ARE}
            </p>
          </div>

          <div>
            <SectionHeader title="What we do ?" color="black" />
            <p className="text-black-theme font-medium text-sm mt-3">
              {constants.WHAT_WE_DO}
            </p>
          </div>
        </div>
      </section>
      
      <div className="px-4 lg:px-12">
        <FocusSection />
        <TeamSection teamMembers={team?.slice(0, 4)} showHeadings={true} />
      </div>
    </>
  );
}