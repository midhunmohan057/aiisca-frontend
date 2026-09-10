import { FaArrowRightLong } from "react-icons/fa6";
import TACList from "@components/TACList";
import Footer from "@components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* TAC Hero Banner - Full Bleed Width, Centered, Reduced Padding */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-primary-theme text-white py-6 px-4 md:px-8 lg:px-12 flex items-center">
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          <img
            src="https://theambedkarianchronicle.in/images/TACitalicsCoverLogo.png"
            alt="The Ambedkarian Chronicle"
            className="w-64 sm:w-80 md:w-96 lg:w-[45%] object-contain"
          />

          <div className="text-center lg:text-left max-w-xl flex flex-col items-center lg:items-start">
            <p className="text-white/90 leading-relaxed text-lg">
              Knowledge beyond norms. An independent mouthpiece of the
              Dalit-Bahujan in India.
              <br />
              Caste | Politics | Art & Culture
            </p>

            <a
              href="https://theambedkarianchronicle.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary-theme px-6 py-3 rounded-full mt-6 font-bold hover:bg-gray-100 transition-colors"
            >
              Visit Website
              <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>

      {/* List of Articles */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        <TACList showHeader={false} />
      </div>

      <Footer />
    </div>
  );
}