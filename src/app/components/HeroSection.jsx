import Image from "next/image";
import React from "react";

const HeroSection = ({h1,  h3, imgUrl}) => {
  return (
    <div className="flex flex-col my-5  md:flex-row w-[80%] m-auto justify-around items-center">
      <div className="texture space-y-5 w-[60%]">
        <h1 className="text-4xl font-semibold font-ubuntu">{h1}</h1>
        <h3 className="text-xl">{h3}</h3>
      </div>
      <div className="images w-[40%]">
        <Image src={imgUrl} alt="loading" width={350} height={350} className="object-contain" />
      </div>
    </div>
  );
};

export default HeroSection;
