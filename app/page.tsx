import { fetchCars } from "@/api";
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { CarFilter } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: CarFilter;
}) {
  const cars = await fetchCars(searchParams);

  const isEmpty = !cars || !Array.isArray(cars) || cars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div id="discover" className="mt-12 padding-x padding-y max-width">
        <div className="home_text-container">
          <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home_filters">
          <SearchBar />
          <div className="home_filter-container">
            <CustomFilter title="fuelType" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isEmpty ? (
          <section>
            <div className="home_cars-wrapper">
              {cars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
            <ShowMore
              page={(searchParams.limit || 9) / 9}
              hasNext={(searchParams.limit || 9) > cars.length}
            />
          </section>
        ) : (
          <div className="home_error-container">
            <h2 className="text-xl text-black font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
