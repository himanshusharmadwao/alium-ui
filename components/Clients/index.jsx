import React from "react";
import {
  FaAmazon,
  FaSpotify,
  FaSlack,
  FaDropbox,
  FaAirbnb,
  FaShopify,
} from "react-icons/fa";

// Map icon names to actual components
const iconMap = {
  FaAmazon: FaAmazon,
  FaSpotify: FaSpotify,
  FaSlack: FaSlack,
  FaDropbox: FaDropbox,
  FaAirbnb: FaAirbnb,
  FaShopify: FaShopify,
};

const Clients = ({ data }) => {
  return (
    <div className="text-center">
      {/* Heading */}
      <h3 className="text-gray-900 font-semibold text-secondary-heading">
        {data.heading}
      </h3>
      <p className="mt-2 text-gray-600 text-paragraph">
        {data.subheading}
      </p>

      {/* Logos Row */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-20 text-gray-400">
        {data.clients.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return IconComponent ? <IconComponent key={index} size={44} /> : null;
        })}
      </div>
    </div>
  );
};

export default Clients;
