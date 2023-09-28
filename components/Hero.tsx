"use client";

import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">Explore Cars with Ease</h1>
        <p className="hero_subtitle">Effortlessly discover Your Next Ride</p>
        <Button
          title="Explore Cars"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          onClick={handleScroll}
        />
      </div>
      <div className="hero_image-container">
        <div className="hero_image">
          <Image src="/hero.png" alt="Hero" fill className="object-contain" />
        </div>
        <div className="hero_image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
