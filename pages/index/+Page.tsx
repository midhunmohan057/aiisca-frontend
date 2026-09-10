import { FaHandHoldingHeart } from "react-icons/fa6";
import { constants, team } from "@utilities/index";
import { images } from "@assets/index";
import SectionHeader from "@components/SectionHeader";
import ImageWithLoader from "@components/ImageWithLoader";

import FocusSection from "./FocusSection";
import TeamSection from "./TeamSection";
import Footer from "@components/Footer";

// New Components
import ContactSection from "@components/ContactSection";
import TACList from "@components/TACList";
import HomeUpcomingEvents from "@components/HomeUpcomingEvents";

export default function Page() {
  return (
    <div className="bg-white">
      <section className="font-semibold text-sm overflow-hidden px-4 md:px-8 lg:px-12 py-6 max-w-7xl mx-auto">
        {/* Join the movement Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-black-theme overflow-hidden">
              Join the <br /> Movement for <br />
              <span className="text-primary-theme font-semibold">
                Social Justice
              </span>
            </h1>
            <p className="text-sm text-black-theme font-medium my-4 leading-relaxed">
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
              className="bg-primary-theme text-white rounded-lg font-semibold hover:bg-opacity-90 transition mt-2"
              style={{ padding: "0.75rem 1.5rem" }}
            >
              Be a part of the change
            </button>
          </div>

          <div className="relative w-full max-w-xl mx-auto">
            <ImageWithLoader
              src={images.Collage}
              alt="Collage"
              className="w-full mx-auto sm:max-w-[350px] md:max-w-[450px] lg:max-w-[650px]"
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
            <p className="text-black-theme font-medium text-sm mt-3 leading-relaxed">
              {constants.WHO_WE_ARE}
            </p>
          </div>
          <div>
            <SectionHeader title="What we do ?" color="black" />
            <p className="text-black-theme font-medium text-sm mt-3 leading-relaxed">
              {constants.WHAT_WE_DO}
            </p>
          </div>
        </div>
      </section>
      
      <FocusSection />

      <div className="px-4 md:px-8 lg:px-12 py-6 max-w-7xl mx-auto space-y-12">
        <TeamSection teamMembers={team?.slice(0, 3)} showHeadings={true} />
        <HomeUpcomingEvents />
        <TACList showHeader={true} />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}