import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTiktok, 
    FaTwitter, 
    FaEnvelope, 
    FaWhatsapp 
  } from "react-icons/fa";

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/bryan_gt",
    icon: <FaInstagram className="text-pink-500 hover:text-pink-600" />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/bryan.barrios.7",
    icon: <FaFacebook className="text-blue-600 hover:text-blue-700" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/bryan-barrios-64b76573",
    icon: <FaLinkedin className="text-blue-500 hover:text-blue-600" />,
  },/*
  {
    name: "TikTok",
    url: "https://tiktok.com/@bryan_gt",
    icon: <FaTiktok className="text-black hover:text-gray-800" />,
  },*/
  {
    name: "Twitter",
    url: "https://twitter.com/bryan_gt",
    icon: <FaTwitter className="text-sky-500 hover:text-sky-600" />,
  },
  {
    name: "Email",
    url: "mailto:bryanbarriosr55@gmail.com",
    icon: <FaEnvelope className="text-red-500 hover:text-red-600" />,
  },
  /*{
    name: "WhatsApp",
    url: "https://wa.me/50242116050",
    icon: <FaWhatsapp className="text-green-500 hover:text-green-600" />,
  },*/
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 justify-center mt-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-2xl transition transform hover:scale-110"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
