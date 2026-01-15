const normalizeWeather = (data: any): NormalizedWeather => ({
  city: data.location.name,
  country: data.location.country,
  temp: data.current.temp_c,
  maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
  minTemp: data.forecast.forecastday[0].day.mintemp_c,
  feelsLike: data.current.feelslike_c,
  sunrise: data.forecast.forecastday[0].astro.sunrise,
  sunset: data.forecast.forecastday[0].astro.sunset,
  humidity: data.current.humidity,
  wind: data.current.wind_kph,
  visibility: data.current.vis_km,
  pressure: data.current.pressure_mb,
  condition: data.current.condition.text,
  hourlyWeather: data.forecast.forecastday[0].hour.map((h: { time: any; temp_c: any; condition: { text: any; }; }) => ({
    time: h.time,
    temp_c: h.temp_c,
    condition: h.condition.text
  }))
});

interface NormalizedWeather {
  city: string;
  country: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  feelsLike: number;
  sunrise: string;
  sunset: string;
  humidity: number;
  wind: number;
  visibility: number;
  pressure: number;
  condition: string;
  hourlyWeather: hourlyWeather;
}

type hourlyWeather = {
  time: string;
  temp_c: number;
  condition: string;
};

export default normalizeWeather;