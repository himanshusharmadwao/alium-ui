import React from "react";

const PrimaryCard = ({ icon, title, text }) => {
  return (
    <div className="bg-primary/10 p-8 rounded-2xl text-center hover:shadow-soft-lg transform hover:-translate-y-2 transition-all duration-300">
      <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default PrimaryCard;
