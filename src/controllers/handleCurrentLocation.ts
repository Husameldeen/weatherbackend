import axios from "axios"
import { env } from "../config/env.js"
import normalizeWeather from "./handleWeatherData.js"

export default async function handleCurrentLocation(req: any, res: any) {
    const { latitude, longitude } = req.query
    try {
        const { data } = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
            params: {
                key: env.WEATHER_API_KEY,
                q: `${latitude},${longitude}`,
                days: 3
            }
        })
        res.json(normalizeWeather(data))
    } catch(error) {
        res.status(500).json('Internal server error');
    }
}
