import SectionHeader from "@components/SectionHeader";

const CallToAction = () => {
  return (
    <div className="py-8">
      {/* Section Heading */}
      <div className="flex items-center gap-2 mb-6">
        <SectionHeader color="black" title="Your Role in Movement" />
      </div>

      {/* Main CTA Text */}
      <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
        {/* Left vertical line */}
        <div className="w-2 h-24 rounded-xs bg-primary-theme" />

        {/* Main Text and Buttons */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4 max-w-3xl text-black-theme">
            Join us in building a future of dignity, equality, and opportunity
            for everyone.
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-theme text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-900 transition">
              Support Our Cause
            </button>
            <button className="border border-primary-theme text-primary-theme px-4 py-2 rounded-md font-medium hover:bg-primary-theme hover:text-white transition">
              Spread The Word
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;