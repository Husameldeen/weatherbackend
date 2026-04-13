import axios from "axios";
import { env } from "../config/env.js";
import normalizeWeather from "./handleWeatherData.js";

const handleAPI = async (req: any, res: any) => {
  const { city } = req.query;
  console.log(process.env.WEATHER_API_KEY);

  if (!city) res.send("please enter your city!");

  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}`,
    );

    res.json(normalizeWeather(response.data));
  } catch (err) {
    res.json(err);
  }
};

export default handleAPI;
