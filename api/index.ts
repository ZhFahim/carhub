import { Car, CarFilter } from "@/types";

export async function fetchCars(filter: CarFilter) {
  const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  const { make, model, fuelType, year, limit } = filter;

  if (make) url.searchParams.append("make", make);
  if (model) url.searchParams.append("model", model);
  if (fuelType) url.searchParams.append("fuel_type", fuelType);
  if (year) url.searchParams.append("year", year.toString());
  url.searchParams.append("limit", limit?.toString() ?? "9");

  try {
    const response = await fetch(url, options);
    const result = (await response.json()) as Car[];
    return result;
  } catch (error) {
    console.error(error);
  }
}
