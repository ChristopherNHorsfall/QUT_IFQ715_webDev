//api.js
import { useEffect, useState } from "react";
   

  //useWeather Hook
   export function useWeather(city) {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true);
      getCurrentWeatherByQuery(city)
      .then((weatherData) => {
        setWeather(weatherData);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }, [city]);
    
    return {
      loading: loading,
      weather: weather,
      error: error,
    };
   }

   function getCurrentWeatherByQuery(query) {
    const API_KEY = "56d20b97d6264c118cc35657240809";
    const url = `https://api.weatherapi.com/v1/current.json?q=${query}&key=${API_KEY}`;
    
    return fetch(url)
      .then((res) => res.json())
    }

