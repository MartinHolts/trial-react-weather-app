import React, { useState } from "react";
import useWeatherData from "../custom-hooks/useWeatherData";
import useFavorites from "../custom-hooks/useFavorites";
import "./WeatherDataDisplay.scss";

const WeatherDataDisplay = () => {
	const [fetchedData] = useWeatherData();
	const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
	const [searchQuery, setSearchQuery] = useState(""); // State for the search query

	// Filter cities based on search query
	const filteredCities = fetchedData?.list
		? fetchedData.list.filter(city =>
			city.name.toLowerCase().includes(searchQuery.toLowerCase())
		)
		: [];

	// Highlight cities in favorites
	const highlightedCities = filteredCities.filter(city => favorites.includes(city.id));

	return (
		<div className="weather-data-display">
			<input
				type="text"
				placeholder="Search..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				style={{ marginBottom: '10px' }} // Add some margin-bottom for spacing
			/>

			{filteredCities.length > 0 ? (
				filteredCities.map((city, index) => (
					<div key={index} className={`city-card ${favorites.includes(city.id) ? 'highlighted' : ''}`}>
						<h2>{city.name}</h2>
						<p>Weather: {city.weather[0]?.description}</p>
						<p>Temperature: {city.main?.temp}°C</p>
						<p>Feels Like: {city.main?.feels_like}°C</p>
						<p>Humidity: {city.main?.humidity}%</p>
						<p>Wind Speed: {city.wind?.speed} m/s</p>
						<button onClick={() => addToFavorites(city.id)}>
							Add to Favorites
						</button>
						<button onClick={() => removeFromFavorites(city.id)}>
							Remove from Favorites
						</button>
					</div>
				))
			) : (
				<p>No matching cities found.</p>
			)}
		</div>
	);
};

export default WeatherDataDisplay;
