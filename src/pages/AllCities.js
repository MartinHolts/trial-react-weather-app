import React from 'react';
import WeatherDataDisplay from "../components/WeatherDataDisplay/WeatherDataDisplay";

function AllCities({ data }) {
	console.log(data); // Log the state to verify it's updated
	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<h1>AllCities</h1>
			<WeatherDataDisplay />
		</>
	);
}

export default AllCities;
