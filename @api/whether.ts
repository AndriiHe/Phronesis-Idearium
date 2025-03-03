import type { ApiFunctionsRequest, ApiFunctionsResponse, ApiFunctionsContext } from '@redocly/config';

export default async function (request: ApiFunctionsRequest, response: ApiFunctionsResponse, context: ApiFunctionsContext) {
   try {
    // Get client IP address (X-Forwarded-For header is commonly used for client IP behind proxies)
    const clientIp = request.headers['x-forwarded-for'] || request.connection.remoteAddress || '8.8.8.8'; // Fallback to Google DNS IP
    const res = await fetch(`https://ipinfo.io/${clientIp}/geo`);
    const result = await res.json();
    const parsedResult = {
      clientIp,
      city: result.city,
      country: result.country,
      region: result.region
    }
    return parsedResult;
   
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return response.status(500).json({ 
      error: 'Failed to fetch weather data',
      message: error.message 
    });
  }};