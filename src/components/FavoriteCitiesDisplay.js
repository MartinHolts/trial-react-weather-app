import React, { useState } from "react";
import useWeatherData from '../custom-hooks/useWeatherData';
import useFavorites from '../custom-hooks/useFavorites';
import "./CitiesDisplay.scss";

function FavoriteCitiesDisplay() {
    const [fetchedData] = useWeatherData();
    const { favorites, removeFromFavorites } = useFavorites();
    const [searchQuery, setSearchQuery] = useState(""); // State for the search query

    // filters the list of cities based on the search query
    function filterCities() {
        // Check if fetchedData exists and has a list property
        if (fetchedData && fetchedData.list) {
            // Filter the cities based on the search query
            return fetchedData.list.filter(function (city) {
                // Check if the city's name starts with the search query
                if (city.name.toLowerCase().startsWith(searchQuery.toLowerCase())) {
                    return true;
                } else {
                    return false;
                }
            }).filter(function (city) {
                return favorites.includes(city.id);
            });
        } else {
            // If fetchedData or its list property is not present, return an empty array
            return [];
        }
    }

    const filteredCities = filterCities();

    return (
        <div className="weather-data-display">
            <input className="search-input"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={function (e) { setSearchQuery(e.target.value); }}
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
