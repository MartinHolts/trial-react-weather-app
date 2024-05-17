import React, { useEffect, useState } from "react";
import WeatherDataDisplay from "../components/WeatherDataDisplay";

function AllCities() {
	return (
		<>
			<h1>Who lives in my Garage?</h1>
			<WeatherDataDisplay />
		</>
	);
}

export default AllCities;
