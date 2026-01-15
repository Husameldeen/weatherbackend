import axios from 'axios';
import { env } from '../config/env.js'
import normalizeWeather from './handleWeatherData.js';

const handleAPI = async(req: any, res: any) => {
    const { city } = req.body

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?Key=${env.WEATHER_API_KEY}&q=${city}&days=3`);
    const data = await response.json()
    res.json(normalizeWeather(data))
    
                                    //res.json(normalizeWeather(response?.data))
    console.log(env.WEATHER_API_KEY)
}

export default handleAPI;