import ViewAllLink from "@components/ViewAllLink";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdKeyboardBackspace } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { routes } from "@utilities/index";
import SectionHeader from "@components/SectionHeader";

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

export default function TeamSection({
  teamMembers,
  showHeadings = true,
}: {
  teamMembers: Member[];
  showHeadings: boolean;
}) {
  const iconSize = 20;
  
  return (
    <section className="text-center" style={{ padding: "3rem 3rem" }}>
      {showHeadings ? (
        <div className="text-left font-bold text-xl flex gap-2 items-center justify-between">
          <SectionHeader title="Meet the team" color="black" />
          <ViewAllLink href={routes.TEAM} text="View All" />
        </div>
      ) : (
        <div className="flex items-center gap-2 text-primary-theme cursor-pointer my-2">
          <a href={routes.HOME} className="flex items-center gap-2">
            <MdKeyboardBackspace size={25} />
            <span>Home</span>
          </a>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-6 cursor-pointer">
        {teamMembers?.map((member, idx) => (
          <div
            key={idx}
            className={`relative w-72 hover:w-96 overflow-hidden shadow-lg group transition-all duration-300 ease-in-out rounded-sm ${showHeadings ? "h-80" : "h-64"}`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition duration-300"
            />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[rgba(13,12,100)] via-[rgba(13,12,100,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute bottom-0 left-0 right-0 text-white px-6 py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10">
              <p className="text-xl font-bold text-left">{member.name}</p>
              <p className="text-[15px] font-medium text-left">{member.role}</p>
              <div className="flex gap-4 my-1">
                {member?.social?.instagram && (
                  <a href={member?.social?.instagram}>
                    <FaInstagram size={iconSize} />
                  </a>
                )}
                {member?.social?.linkedin && (
                  <a href={member?.social?.linkedin}>
                    <FaLinkedinIn size={iconSize} />
                  </a>
                )}
                {member?.social?.x && (
                  <a href={member?.social?.x}>
                    <FaXTwitter size={iconSize} />
                  </a>
                )}
                {member?.social?.facebook && (
                  <a href={member?.social?.facebook}>
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