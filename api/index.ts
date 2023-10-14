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

  const { brand, model, limit } = filter;

  if (brand) url.searchParams.append("make", brand);
  if (model) url.searchParams.append("model", model);
  url.searchParams.append("limit", limit?.toString() ?? "9");

  try {
    const response = await fetch(url, options);
    const result = (await response.json()) as Car[];
    return result;
  } catch (error) {
    console.error(error);
  }
}
