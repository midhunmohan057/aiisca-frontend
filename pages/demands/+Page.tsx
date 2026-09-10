import { color, constants } from "@utilities/index";
import { DemandsCardProps } from "@utilities/commanInterface/commanInterface";

import { FaRegBuilding } from "react-icons/fa";
import { GrDocumentVerified } from "react-icons/gr";
import { FiPieChart } from "react-icons/fi";
import { TbHome2 } from "react-icons/tb";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

import DemandsCard from "./DemandsCards";
import Journey from "./Journey";
import CallToAction from "./CallToAction";
import Footer from "@components/Footer";

export default function Page() {
  const cards: DemandsCardProps[] = [
    {
      icon: <FaRegBuilding size={24} color={color.PRIMARY_THEME} />,
      title: "Reservation in Private Sector",
      paragraph: "Extend reservations to private sector jobs and education to ensure equal opportunities for Dalits",
    },
    {
      icon: <GrDocumentVerified size={24} color={color.PRIMARY_THEME} />,
      title: "Fulfillment of Backlog Vacancies",
      paragraph: "Address pending vacancies in government jobs to eliminate institutional barriers",
    },
    {
      icon: <FiPieChart size={24} color={color.PRIMARY_THEME} />,
      title: "Proportional Representation",
      paragraph: "Enact laws for population - proportionate inclusion in public institutions and services",
    },
    {
      icon: <TbHome2 size={24} color={color.PRIMARY_THEME} />,
      title: "Separate Settlements",
      paragraph: "Create self-sufficient Dalit settlements with land and basic amenities",
    },
    {
      icon: <HiOutlineBuildingLibrary size={24} color={color.PRIMARY_THEME} />,
      title: "Autonomous Institutions",
      paragraph: "Support Dalit - led educational and economic institutions to promote self - reliance",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <section className="font-semibold text-sm">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-black-theme">
              Our Demands: Building an Equal <br />
              Nation for Dalits
            </h1>
            <p className="text-sm text-black-theme font-medium w-full sm:w-[40%] py-2">
              {constants.DEMANDS_DESCRIPTION}
            </p>
          </div>
          
          <DemandsCard cardData={cards} />
          <Journey />
          <CallToAction />
        </section>
      </div>

      <Footer />
    </div>
  );
}