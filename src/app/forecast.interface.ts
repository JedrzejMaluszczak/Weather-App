export interface Forecast {
  city: City;
  cnt: number;
  cod: string;
  list: WeatherRecord[];
  message: number;
}

export interface City {
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface WeatherRecord {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: WeatherMain;
  sys: { prod: string };
  weather: Weather[];
  wind: Wind;
}

export interface WeatherMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Wind {
  deg: number;
  speed: number;
}
