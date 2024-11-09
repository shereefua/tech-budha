import React from 'react'
import Image from "next/image";

const TechbudaPortFolio = () => {
  return (
      <div className="flex flex-col items-center space-y-1">
          <h2 className="bg-white text-black font-bold px-10 py-1 rounded-md ">PORTFOLIO</h2>
          <div className="relative w-44 h-52">
              <Image
                  src="/profileicon.png"
                  alt="Profile Icon"
                  width={1000}
                  height={1000}
              />
          </div>
      </div>
  );
}

export default TechbudaPortFolio