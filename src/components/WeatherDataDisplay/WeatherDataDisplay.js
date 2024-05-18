import useWeatherData from "../../custom-hooks/useWeatherData";
import "./WeatherDataDisplay.scss";

const WeatherDataDisplay = () => {
	const [fetchedData] = useWeatherData();

	return (
		<div className="weather-data-display">
			<h1>All cities</h1>
			{fetchedData?.list?.map((city, index) => (
				<div key={index} className="city-card">
					<h2>{city.name}</h2>
					<p>
						Coordinates: Lon {city.coord.lon}, Lat {city.coord.lat}
					</p>
					<p>Country: {city.sys.country}</p>
					<p>
						Sunrise:{" "}
						{new Date(city.sys.sunrise * 1000).toLocaleTimeString()}
					</p>
					<p>
						Sunset:{" "}
						{new Date(city.sys.sunset * 1000).toLocaleTimeString()}
					</p>
					<p>Weather: {city.weather[0].description}</p>
					<p>Temperature: {city.main.temp}°C</p>
					<p>Feels Like: {city.main.feels_like}°C</p>
					<p>Pressure: {city.main.pressure} hPa</p>
					<p>Humidity: {city.main.humidity}%</p>
					<p>Wind Speed: {city.wind.speed} m/s</p>
					<p>Visibility: {city.visibility} km</p>
				</div>
			))}
		</div>
	);
};

export default WeatherDataDisplay;
