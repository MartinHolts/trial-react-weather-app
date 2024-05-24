import React, { useState } from "react";
import useWeatherData from "../custom-hooks/useWeatherData";
import useFavorites from "../custom-hooks/useFavorites";
import "./WeatherDataDisplay.scss";

function WeatherDataDisplay() {
	const [fetchedData] = useWeatherData();
	const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
	const [searchQuery, setSearchQuery] = useState(""); // State for the search query

	// Filter cities based on search query
	function filterCities() {
		return fetchedData?.list
			? fetchedData.list.filter(function (city) {
				return city.name.toLowerCase().startsWith(searchQuery.toLowerCase());
			})
			: [];
	}

	const filteredCities = filterCities();

	return (
		<div className="weather-data-display">
			<input
				type="text"
				placeholder="Search..."
				value={searchQuery}
				onChange={function (e) { setSearchQuery(e.target.value); }}
				style={{ marginBottom: '10px' }} // Add some margin-bottom for spacing
			/>

			{filteredCities.length > 0 ? (
				filteredCities.map(function (city, index) {
					const isFavorite = favorites.includes(city.id);
					return (
						<div key={index} className={`city-card ${isFavorite ? 'highlighted' : ''}`}>
							<h2>{city.name}</h2>
							<p>Weather: {city.weather[0]?.description}</p>
							<p>Temperature: {city.main?.temp}°C</p>
							<p>Feels Like: {city.main?.feels_like}°C</p>
							<p>Humidity: {city.main?.humidity}%</p>
							<p>Wind Speed: {city.wind?.speed} m/s</p>
							<button
								onClick={function () { addToFavorites(city.id); }}
								disabled={isFavorite}
								className={isFavorite ? 'disabled-button' : ''}
							>
								{isFavorite ? 'In Favorites' : 'Add to Favorites'}
							</button>
							<button onClick={function () { removeFromFavorites(city.id); }}>
								Remove from Favorites
							</button>
						</div>
					);
				})
			) : (
				<p>No matching cities found.</p>
			)}
		</div>
	);
}

export default WeatherDataDisplay;
