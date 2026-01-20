import axios from "axios";
import { env } from "../config/env.js";


const handleSearch = async (req: any, res: any) => {
    const { search } = req.query;

    if (!search) {
        return res.status(400).json({ error: 'City is required' });
    }

    if ( search.length >= 3) {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/search.json?`, {
                params: {
                    key: env.WEATHER_API_KEY,
                    q: search
                }
            });
            const suggestions = response.data.map((res: any) => res.name)
            res.json(suggestions)
        } catch (err: any) {
            // Axios error (API responded with 4xx / 5xx)
            if (axios.isAxiosError(err)) {
                console.log(err.response?.status || 502)
                console.log(err.response?.data || { error: 'Weather API error' });
            }

            // Anything else
            res.status(500).json('Internal server error');
        }
    }
    
}

export default handleSearch;
