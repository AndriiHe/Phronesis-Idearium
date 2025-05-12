import type { ApiFunctionsContext } from '@redocly/config';

export default async function (_request: Request, context: ApiFunctionsContext) {
   try {
    // Get client IP address (X-Forwarded-For header is commonly used for client IP behind proxies)
    const clientIp = context.headers['x-forwarded-for'] || context.connection.remoteAddress || '8.8.8.8'; // Fallback to Google DNS IP
    
    // WeatherAPI can automatically detect location from IP
    const weatherResponse = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${clientIp}&aqi=no`
    );
    
    const parsedWhether = await weatherResponse.json()
    const { location, current } = parsedWhether;
    
    return context.status(200).json({
      ip: clientIp,
      location: {
        city: location.name,
        region: location.region,
        country: location.country,
        coordinates: `${location.lat},${location.lon}`
      },
      weather: {
        temperature_c: current.temp_c,
        temperature_f: current.temp_f,
        condition: current.condition.text,
        humidity: current.humidity,
        windSpeed_kph: current.wind_kph,
        windSpeed_mph: current.wind_mph,
        feelsLike_c: current.feelslike_c,
        feelsLike_f: current.feelslike_f,
        uv: current.uv
      },
      message: `Current weather in ${location.name}, ${location.country}`
    });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return context.status(500).json({ 
      error: 'Failed to fetch weather data',
      message: error.message 
    });
  }};