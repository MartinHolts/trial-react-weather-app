import React, { useEffect, useState } from "react";
import useFavorites from '../../custom-hooks/useFavorites';
import useWeatherData from '../../custom-hooks/useWeatherData'; // Make sure this import matches the actual location of your custom hook
import "./FavoriteCitiesDisplay.scss";

const FavoriteCitiesDisplay = () => {
    const { favorites, removeFromFavorites } = useFavorites();
    const [data, setData] = useWeatherData(); // Use the fetched data

    // Check if data is available and has a list property
    const filteredCities = data && data.list ? data.list.filter(city => favorites.includes(city.id)) : [];

    return (
        <div className="favorite-cities-display">
            {filteredCities.length > 0 ? (
                filteredCities.map((city, index) => (
                    <div key={index} className="city-card">
                        <h2>{city.name}</h2>
                        <p>Weather: {city.weather[0]?.description}</p>
                        <p>Temperature: {city.main?.temp}°C</p>
                        <p>Feels Like: {city.main?.feels_like}°C</p>
                        <p>Humidity: {city.main?.humidity}%</p>
                        <p>Wind Speed: {city.wind?.speed} m/s</p>
                        <button onClick={() => removeFromFavorites(city.id)}>
                            Remove from Favorites
                        </button>
                    </div>
                ))
            ) : (
                <p>No cities added to favorites.</p>
            )}
        </div>
    );
};

export default FavoriteCitiesDisplay;
