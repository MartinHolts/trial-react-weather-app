import useWeatherData from "../../custom-hooks/useWeatherData";
import useFavorites from "../../custom-hooks/useFavorites";
import "./WeatherDataDisplay.scss";

const WeatherDataDisplay = () => {
	const [fetchedData] = useWeatherData();
	const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

	return (
		<div className="weather-data-display">
			<h1>All cities</h1>
			{fetchedData?.list?.map(function (city, index) {
				(
					<div key={index} className="city-card">
						<h2>{city.name}</h2>
						<p>Weather: {city.weather[0].description}</p>
						<p>Temperature: {city.main.temp}°C</p>
						<p>Feels Like: {city.main.feels_like}°C</p>
						<p>Humidity: {city.main.humidity}%</p>
						<p>Wind Speed: {city.wind.speed} m/s</p>
						<button onClick={() => addToFavorites(city.id)}>
							Add to Favorites
						</button>
					</div>
				)
			})}
		</div>
	);
};

export default WeatherDataDisplay;
