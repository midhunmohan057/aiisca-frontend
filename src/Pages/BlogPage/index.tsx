import { FaArrowRightLong } from "react-icons/fa6";
import BlogList from "./BlogList";
export default function BlogPage() {
  return (
    <>
      <div className=" overflow-hidden bg-primary-theme text-white p-10 md:p-16 my-12">
        <p className="uppercase tracking-widest text-sm opacity-80 mb-4">
          Read the Full Article
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          <img
            src="https://theambedkarianchronicle.in/images/TACitalicsCoverLogo.png"
            alt="The Ambedkarian Chronicle"
            className="w-44 sm:w-72 md:w-80 lg:w-[40%] scale-100 lg:scale-125 relative z-[1] mt-0 lg:-mt-[120px] object-contain"
          />

          <div className="text-center lg:text-left max-w-xl">
            <p className="text-white/80">
              Knowledge beyond norms. An independent mouthpiece of the
              Dalit-Bhaujan in India.
              <br />
              Caste | Politics | Art & Culture
            </p>

            <a
              href="https://theambedkarianchronicle.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#0908A9] px-6 py-3 rounded-full mt-8 font-medium"
            >
              Visit Website
              <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
      <BlogList showHeader={false} />
    </>
  );
}
