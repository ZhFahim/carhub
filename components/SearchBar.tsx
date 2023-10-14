"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import SearchBrand from "./SearchBrand";

const SearchButton = ({ className }: { className: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${className}`}>
    <Image
      src="/magnifying-glass.svg"
      width={40}
      height={40}
      alt="Search"
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const router = useRouter();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchParams = new URLSearchParams(window.location.search);

    if (brand) {
      searchParams.set("brand", brand.toLowerCase());
    } else {
      searchParams.delete("brand");
    }

    if (model) {
      searchParams.set("model", model.toLowerCase());
    } else {
      searchParams.delete("model");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar_item">
        <SearchBrand brand={brand} onChange={setBrand} />
        <SearchButton className="sm:hidden" />
      </div>
      <div className="searchbar_item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="Car model"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          placeholder="Tiguan"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar_input"
        />
        <SearchButton className="sm:hidden" />
      </div>
      <SearchButton className="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
