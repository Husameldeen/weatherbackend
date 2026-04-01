import axios from "axios";
import { env } from "../config/env.js";
import normalizeWeather from "./handleWeatherData.js";

const handleAPI = async (req: any, res: any) => {
  const { city } = req.query;

  if (!city) res.send("please enter your city!");

  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}`,
    );

    res.json(normalizeWeather(response.data));
    // console.log(data);
  } catch (err) {
    res.json(err);
  }
};

export default handleAPI;

//https://api.weatherapi.com/v1/forecast.json?Key=3329f26b8f8d4dc1829101914250412&q=london&days=3
//https://api.weatherapi.com/v1/current.json?key=3329f26b8f8d4dc1829101914250412&q=London&aqi=no
