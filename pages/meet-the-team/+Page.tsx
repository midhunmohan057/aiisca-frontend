import ViewAllLink from "@components/ViewAllLink";
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { MdKeyboardBackspace } from "react-icons/md";
import { routes, team } from "@utilities/index";
import SectionHeader from "@components/SectionHeader";

export default function Page() {
  const iconSize = 20;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-primary-theme cursor-pointer mb-6">
        <a href={routes.HOME} className="flex items-center gap-2 font-semibold">
          <MdKeyboardBackspace size={25} />
          <span>Home</span>
        </a>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-theme uppercase tracking-wider">
          Meet The Team
        </h1>
        <div className="w-20 h-1 bg-primary-theme mx-auto mt-3 rounded-md" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team?.map((member, idx) => (
          <div
            key={idx}
            className="relative w-full h-80 overflow-hidden shadow-lg group rounded-lg bg-gray-100"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />

            <div
              className="absolute inset-0 pointer-events-none 
             bg-gradient-to-t from-[rgba(13,12,100,0.9)] via-[rgba(13,12,100,0.4)] to-transparent 
             opacity-0 group-hover:opacity-100 
             transition-opacity duration-300"
            />

            <div
              className="absolute bottom-0 left-0 right-0 text-white px-6 py-5
               transform translate-y-full group-hover:translate-y-0 
               transition-transform duration-300 ease-in-out z-10"
            >
              <p className="text-xl font-bold text-left">{member.name}</p>
              <p className="text-[15px] font-medium text-left text-indigo-200">{member.role}</p>
              <div className="flex gap-4 mt-2">
                {member?.social?.instagram && (
                  <a href={member.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FaInstagram size={iconSize} />
                  </a>
                )}
                {member?.social?.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedinIn size={iconSize} />
                  </a>
                )}
                {member?.social?.x && (
                  <a href={member.social.x} target="_blank" rel="noreferrer" aria-label="X">
                    <FaXTwitter size={iconSize} />
                  </a>
                )}
                {member?.social?.facebook && (
                  <a href={member.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                    <FaFacebookF size={iconSize} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}