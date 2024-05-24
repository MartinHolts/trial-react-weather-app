import React, { useState } from "react";
import useWeatherData from '../custom-hooks/useWeatherData';
import useFavorites from '../custom-hooks/useFavorites';
import "./FavoriteCitiesDisplay.scss";

function FavoriteCitiesDisplay() {
    const [fetchedData] = useWeatherData();
    const { favorites, removeFromFavorites } = useFavorites();
    const [searchQuery, setSearchQuery] = useState(""); // State for the search query

    // Filter cities based on search query
    function filterCities() {
        return fetchedData && fetchedData.list
            ? fetchedData.list.filter(function (city) {
                return favorites.includes(city.id) &&
                    city.name.toLowerCase().startsWith(searchQuery.toLowerCase());
            })
            : [];
    }

    const filteredCities = filterCities();

    function handleSearchChange(e) {
        setSearchQuery(e.target.value);
    }

    return (
        <div className="favorite-cities-display">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: '10px' }} // Add some margin-bottom for spacing
            />

            {filteredCities.length > 0 ? (
                filteredCities.map(function (city, index) {
                    return (
                        <div key={index} className="city-card">
                            <h2>{city.name}</h2>
                            <p>Weather: {city.weather[0]?.description}</p>
                            <p>Temperature: {city.main?.temp}°C</p>
                            <p>Feels Like: {city.main?.feels_like}°C</p>
                            <p>Humidity: {city.main?.humidity}%</p>
                            <p>Wind Speed: {city.wind?.speed} m/s</p>
                            <button onClick={function () { removeFromFavorites(city.id); }}>
                                Remove from Favorites
                            </button>
                        </div>
                    );
                })
            ) : (
                <p>No cities added to favorites.</p>
            )}
        </div>
    );
}

export default FavoriteCitiesDisplay;
