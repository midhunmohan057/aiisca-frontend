import { ManifestoCardProps } from "@utilities/index";

const ManifestoCard = ({ cardData }: { cardData: ManifestoCardProps[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map(({ icon, title, paragraphs }, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-[500px] text-left"
        >
          <div className="flex justify-start items-center gap-4">
            <div className="bg-lightest-blue p-4 rounded-full">{icon}</div>
            <div>
              <p className="font-bold text-lg text-black-theme flex justify-center items-center pl-1">
                {title}
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-3 text-sm text-gray-700 mt-4">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="font-medium text-md text-black-theme p-1">
                {para}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManifestoCard;