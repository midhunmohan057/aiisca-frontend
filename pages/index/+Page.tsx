import { FaHandHoldingHeart } from "react-icons/fa6";
import { constants, team } from "@utilities/index";
import { images } from "@assets/index";
import SectionHeader from "@components/SectionHeader";
import ImageWithLoader from "@components/ImageWithLoader";

// Updated imports: Now pointing to the local files in this folder
import FocusSection from "./FocusSection";
import TeamSection from "./TeamSection";

export default function Page() {
  return (
    <>
      <section className="font-semibold text-sm overflow-hidden">
        {/* Join the movement Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
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
              className="bg-primary-theme text-white rounded-lg font-semibold hover:bg-primary-theme"
              style={{ padding: "0.5rem 1rem" }}
            >
              Be a part of the change
            </button>
          </div>

          {/* Right Section Image */}
          <div className="relative w-full max-w-xl mx-auto">
            <ImageWithLoader
              src={images.Collage}
              alt="Collage"
              className="w-full max-h- mx-auto sm:max-w-[350px] md:max-w-[450px] lg:max-w-[650px]"
            />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white rounded-2xl p-2 sm:px-2 sm:py-2 shadow-lg flex items-center gap-2 sm:gap-3 text-primary-theme text-sm sm:text-base font-semibold">
              <FaHandHoldingHeart />
              <span>100+ Volunteers</span>
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:-right-15 bg-white rounded-2xl p-2 sm:px-2 sm:py-2 shadow-lg flex items-center gap-2 sm:gap-3 text-primary-theme text-sm sm:text-base font-semibold">
              <FaHandHoldingHeart />
              <span>100+ Volunteers</span>
            </div>
          </div>
        </div>

        {/* Who we are / What we do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-20">
          <div>
            <SectionHeader title="Who we are ?" color="black" />
            <p className="text-black-theme font-medium text-sm ">
              {constants.WHO_WE_ARE}
            </p>
          </div>

          <div>
            <SectionHeader title="What we do ?" color="black" />
            <p className="text-black-theme font-medium text-sm">
              {constants.WHAT_WE_DO}
            </p>
          </div>
        </div>
      </section>
      
      <FocusSection />
      <TeamSection teamMembers={team?.slice(0, 4)} showHeadings={true} />
    </>
  );
}