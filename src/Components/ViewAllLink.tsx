import { FaArrowRightLong } from "react-icons/fa6";


function ViewAllLink({ href, text,icon }:{href: string, text: string,icon?: React.ReactNode}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 !text-primary-theme text-sm font-medium cursor-pointer group"
    >
      <span>{text}</span>
      <span className="!text-primary-theme text-3xl font-bold transform transition-transform duration-300 group-hover:translate-x-1">
        <FaArrowRightLong size={18}/>
      </span>
    </a>
  );
}

export default ViewAllLink



