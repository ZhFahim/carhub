"use client";

import { Car } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { city_mpg, drive, make, model, transmission, year } = car;

  const rent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card_content">
        <h2 className="car-card_content-title">
          {make} {model}
        </h2>
      </div>

      <p className="mt-6 flex text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {rent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="my-3 relative w-full h-40 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt={make + " " + model}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="mt-2 w-full flex relative">
        <div className="w-full flex justify-between group-hover:invisible text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel icon"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          {drive && (
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tire.svg" width={20} height={20} alt="tire icon" />
              <p className="text-[14px]">{drive?.toUpperCase()}</p>
            </div>
          )}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas icon" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card_btn-container">
          <Button
            title="View More"
            containerStyle="py-[16px] w-full bg-primary-blue rounded-full"
            textStyle="text-white text-[14px] leading-[17px] font-bold"
            rightIcon={
              <Image
                src="/right-arrow.svg"
                alt="right icon"
                fill
                className="object-contain"
              />
            }
            onClick={() => setModalOpen(true)}
          />
        </div>

        <CarDetails
          car={car}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default CarCard;
