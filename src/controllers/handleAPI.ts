import axios from 'axios';
import { env } from '../config/env.js'
import normalizeWeather from './handleWeatherData.js';

const handleAPI = async(req: any, res: any) => {
    const { city } = req.query

    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?Key=${env.WEATHER_API_KEY}&q=${city}&days=3`);
    res.json(normalizeWeather(response.data))
    console.log(city)
}

export default handleAPI;