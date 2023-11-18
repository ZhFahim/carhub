export interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive?: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarFilter {
  make?: string;
  model?: string;
  fuelType?: string;
  year?: number;
  limit?: number;
}
