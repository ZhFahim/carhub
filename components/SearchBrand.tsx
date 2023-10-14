import { brands } from "@/constants";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

export interface SearchBrandProps {
  brand: string;
  onChange: (value: string) => void;
}

const SearchBrand = ({ brand, onChange }: SearchBrandProps) => {
  const [query, setQuery] = useState("");

  const filteredBrands =
    query === ""
      ? brands
      : brands.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="search-brand">
      <Combobox value={brand} onChange={onChange}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car Logo"
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-brand_input"
            placeholder="Volkswagen"
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options>
              {filteredBrands.map((brand) => (
                <Combobox.Option
                  key={brand}
                  value={brand}
                  className={({ active }) =>
                    `search-brand_option relative ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {brand}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBrand;
