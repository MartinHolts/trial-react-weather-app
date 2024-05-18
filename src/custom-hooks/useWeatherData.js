import { useState, useEffect } from "react";

const useWeatherData = () => {
	const [data, setData] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				const apiKey = "3cfcda1c67930c9db4bb6363b4d06023";
				const cityIds = [
					"588409",
					"588335",
					//"590031",
					//"589580",
					//"589379",
				]; // Tallinn, Tartu, Narva, Pärnu, Põltsamaa

				// Fetches weather data for a group of cities identified by cityIds.
				const response = await fetch(
					"http://api.openweathermap.org/data/2.5/group?id=" +
						cityIds.join(",") +
						"&units=metric&appid=" +
						apiKey
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.error(
					"There has been a problem with your fetch operation:",
					error
				);
			}
		}

		// Call fetchData initially
		fetchData();

		// Set up an interval to refetch data every 10 seconds
		// const intervalId = setInterval(fetchData, 10000);

		// Clear the interval on cleanup
		// return () => clearInterval(intervalId);
	}, []);

	return [data];
};

export default useWeatherData;
