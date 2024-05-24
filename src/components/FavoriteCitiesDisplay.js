import React, { useEffect, useState } from "react";
import useFavorites from '../custom-hooks/useFavorites';
import useWeatherData from '../custom-hooks/useWeatherData';
import "./FavoriteCitiesDisplay.scss";

const FavoriteCitiesDisplay = () => {
    const { favorites, removeFromFavorites } = useFavorites();
    const [data, setData] = useWeatherData();
    const [searchQuery, setSearchQuery] = useState(""); // State for the search query

    // Filter cities based on search query
    const filteredCities = data && data.list
        ? data.list.filter(city =>
            favorites.includes(city.id) &&
            city.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <div className="favorite-cities-display">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ marginBottom: '10px' }} // Add some margin-bottom for spacing
            />

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
