import { Car } from "@/types";
import { generateCarImageUrl } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface CarDetailsProps {
  car: Car;
  open: boolean;
  onClose: () => void;
}

const CarDetails = ({ car, open, onClose }: CarDetailsProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="p-4 min-h-full flex justify-center items-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg max-h-[90vh] p-6 flex flex-col gap-5 relative overflow-y-auto text-left bg-white rounded-2xl shadow-xl transform transition-all">
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 w-fit absolute top-2 right-2 bg-primary-blue-100 rounded-full z-10"
                >
                  <Image
                    src="/close.svg"
                    width={20}
                    height={20}
                    alt="close icon"
                    className="object-contain"
                  />
                </button>

                <div className="flex flex-1 flex-col gap-3">
                  <div className="w-full h-40 relative bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src={generateCarImageUrl(car)}
                      alt={car.make + " " + car.model}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="w-full h-24 flex-1 relative bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "29")}
                        alt={car.make + " " + car.model}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="w-full h-24 flex-1 relative bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "33")}
                        alt={car.make + " " + car.model}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="w-full h-24 flex-1 relative bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "13")}
                        alt={car.make + " " + car.model}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        key={key}
                        className="w-full flex justify-between gap-5 text-right"
                      >
                        <h4 className="text-grey capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="font-semibold text-black-100 capitalize">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
