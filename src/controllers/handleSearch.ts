import axios from "axios";
import { env } from "../config/env.js";


const handleSearch = async (req: any, res: any) => {
    const { search } = req.query;
    if ( search.length >= 3) {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/search.json?Key=${env.WEATHER_API_KEY}&q=${search}`);
            const suggestions = response.data.map((res: any) => res.name)
            res.json(suggestions)
        } catch (error) {
            console.error(error)
        }
    }
    
}

export default handleSearch;