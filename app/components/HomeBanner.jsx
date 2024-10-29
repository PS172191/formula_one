"use client";

import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="font-raleway font-bold text-white bg-secondary h-52 flex flex-col justify-center items-center mt-8 w-full">
      <Image
        src={`/images/f1-logo-red.png`}
        alt={`red f1 logo`}
        width={100}
        height={100}
        className="w-52 h-auto"
      />
      <div className="mt-5 flex flex-col items-center">
        <label className="text-2xl">Formula One Info App</label>
        <label className="text-lg">Made by Tim Saes</label>
      </div>
    </div>
  );
};

export default HomeBanner;
