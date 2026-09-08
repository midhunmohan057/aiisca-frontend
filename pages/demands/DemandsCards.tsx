import { DemandsCardProps } from "@utilities/commanInterface/commanInterface";

const DemandsCard = ({ cardData }: { cardData: DemandsCardProps[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {cardData.map(({ icon, title, paragraph }: DemandsCardProps, index: number) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-[500px] flex flex-col justify-center items-center text-left"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-lightest-blue p-4 rounded-full">
              {icon}
            </div>
            <div>
              <p className="font-bold text-lg text-black-theme flex justify-center items-center text-center pl-1">
                {title}
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-700 w-[60%] text-center">
            <p className="font-medium text-md text-black-theme text-center p-1">
              {paragraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemandsCard;