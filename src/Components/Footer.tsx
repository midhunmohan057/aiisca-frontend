import { images } from "@assets/index";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Updated to FaXTwitter for consistency

const footerData = {
  logo: {
    img: images.Logo,
    alt: "AIISCA Logo",
    tagline:
      "Empowering Every Voice, Uplifting Every Life – Together, We Forge a Future of Equality and Justice for All.",
  },
  annabhau: {
    img: images.AnnaBhau,
    alt: "AnnaBhau Logo",
    tagline: "Cultural wing of AIISCA",
  },
  src: {
    img: images.src,
    alt: "SRC Logo",
    tagline:
      "Promoting equal education for marginalized communities | Inspired by Dr. Ambedkar & Savitribai Phule",
  },
  donate: {
    img: images.FriendsOfSrc,
    alt: "Donate",
    tagline:
      "Education is a right not a privilege. Join us with a monthly Support",
  },
  social: [
    { icon: <FaYoutube />, href: "https://www.youtube.com/@aiisca1957" },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/p/All-India-Independent-Scheduled-Castes-Association-100094911592602/",
    },
    { icon: <FaXTwitter />, href: "https://x.com/AIISCA1957?lang=en" },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/_aiisca_/?hl=en",
    },
  ],
  copyright: "© 2024 – All rights reserved",
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto_1fr] gap-10 items-center">
          {/* Logo 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 sm:w-36 h-24 flex items-center justify-center mb-4">
              <img
                src={footerData.logo.img}
                alt={footerData.logo.alt}
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <p className="text-gray-600 text-sm">{footerData.logo.tagline}</p>
          </div>

          {/* Logo 2 */}
          <div className="flex flex-col items-center text-center">
            <a
              className="w-32 sm:w-36 h-24 flex items-center justify-center mb-4 block"
              href="https://www.instagram.com/src_networks/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={footerData.src.img}
                alt={footerData.src.alt}
                className="w-full h-full object-contain scale-150"
              />
            </a>
            <p className="text-gray-600 text-sm">{footerData.src.tagline}</p>
          </div>

          {/* Logo 3 */}
          <div className="flex flex-col items-center text-center">
            <a
              className="w-32 sm:w-36 h-24 flex items-center justify-center mb-4 block"
              href="https://www.instagram.com/annabhausathekalamanch/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={footerData.annabhau.img}
                alt={footerData.annabhau.alt}
                className="w-full h-full object-contain scale-125"
              />
            </a>
            <p className="text-gray-600 text-sm">{footerData.annabhau.tagline}</p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-56 bg-gray-300 justify-self-center" />

          {/* Donate */}
          <div className="flex flex-col items-center text-center">
            <a
              href="https://reiwamettafoundations.org/friendsofsrc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-36 h-32 flex items-center justify-center mb-4 block"
            >
              <img
                src={footerData.donate.img}
                alt={footerData.donate.alt}
                className="w-full h-full object-contain scale-[180%]"
              />
            </a>
            <h3 className="text-lg sm:text-xl font-bold text-primary-theme leading-tight">
              Education is a Right,
              <br />
              Not a Privilege.
            </h3>
            <p className="text-sm text-black mt-2 font-bold">
              Join us with a monthly Support
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            {footerData.copyright}
          </p>
          <div className="flex items-center gap-5 text-xl">
            {footerData.social.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}