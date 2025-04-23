import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        fetch('/weatherforecast')
            .then((response) => response.json())
            .then((data) => setForecasts(data))
            .catch((error) => console.error('Error fetching weather data:', error));
    }, []);

    return (
        <div>
            <h1>Weather Forecast</h1>
            <ul>
                {forecasts.map((forecast, index) => (
                    <li key={index}>
                        {forecast.date}: {forecast.temperatureC}°C - {forecast.summary}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherForecast;
