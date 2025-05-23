import React from "react";
import cardData from "../Data/data.js"

const AboutHealth = () => {


  return (
    <div className="flex flex-col p-2">
      <div className="container my-16 mx-auto flex-1">
        <h1 className=" font-bold overflow-hidden md:text-5xl text-xl">
          {" "}
          About Health Connect
        </h1>
        <p className="my-5 text-sm md:text-2xl font-medium">
          Health Connect is dedicated to providing comprehensive healthcare solutions that prioritize patient well-being and medical excellence. Our platform connects patients with top-tier healthcare providers, ensuring access to quality care and innovative treatments. With a focus on patient-centered care, we strive to enhance the healthcare experience through advanced technology and compassionate service.
        </p>
      </div>
      <div className="flex-1">
        <div className="container mx-auto px-4 py-12  cursor-pointer">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cardData.map((data, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden "
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-56 object-cover object-center transform transition-transform hover:scale-105 ease-in-out"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
                  <p className="text-gray-700">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHealth;
