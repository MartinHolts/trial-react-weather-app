import { useState, useEffect } from "react";
import useWeatherData from "../custom-hooks/useWeatherData";

const WeatherDataDisplay = () => {
	const [fetchedData] = useWeatherData();

	return (
		<div>
			<h1>All cities</h1>
			<pre>{fetchedData}</pre> {/* Displaying the raw XML data */}
		</div>
	);
};

export default WeatherDataDisplay;
