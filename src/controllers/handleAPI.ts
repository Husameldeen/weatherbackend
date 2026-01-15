import axios from 'axios';
import { env } from '../config/env.js'

const handleAPI = async(req: any, res: any) => {
    const { city } = req.body

    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?
                                        Key=${env.WEATHER_API_KEY}&
                                        q=${city}&
                                        days=3`
                                    );
    res.json(response?.data)
}

export default handleAPI;