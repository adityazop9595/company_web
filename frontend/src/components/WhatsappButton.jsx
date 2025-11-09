import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = ({data}) => {
  const phoneNumber = "7888216628"; // cleaned up number
  const message = "Hi! I'm interested in your services.";
  const encodedMessage = `${message} ${data}` ||  encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/+91${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-full border border-green-500 bg-green-100 text-green-700 font-medium transition-all duration-300 hover:bg-green-600 hover:text-white"
    >
      <FaWhatsapp className="text-xl" />
      {/* Hide text before md */}
      <span className="hidden md:inline text-sm sm:text-base whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsappButton;
