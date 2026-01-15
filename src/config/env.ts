import dotenv from "dotenv";
dotenv.config();

export const env = {
  WEATHER_API_KEY: process.env.WEATHER_API_KEY as string,
  PORT: process.env.PORT
};
