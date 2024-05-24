import { useState, useEffect, useMemo } from "react";

const useWeatherData = function () {
	// Local Storage: The useState hook is initialized with a function that retrieves data from localStorage if it exists. If not, it defaults to an empty string.
	const [data, setData] = useState(() => {
		const savedData = localStorage.getItem("weatherData");
		return savedData ? JSON.parse(savedData) : "";
	});

	useEffect(() => {
		async function fetchData() {
			try {
				const apiKey = "3cfcda1c67930c9db4bb6363b4d06023";
				const cityIds = [
					"588409",
					"588335",
					"590031",
					"589580",
					"589379",
				]; // Tallinn, Tartu, Narva, Pärnu, Põltsamaa

				// Fetches weather data for a group of cities identified by cityIds.
				// Response variable is set to contain response object, containing the status, headers, and body.
				const response = await fetch(
					"http://api.openweathermap.org/data/2.5/group?id=" +
					cityIds.join(",") +
					"&units=metric&appid=" +
					apiKey
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				// Parses the JSON response body into a JavaScript object containing the weather data for the specified cities.
				const data = await response.json();
				setData(data);
				// Saving to Local Storage: When new data is fetched, it is saved to localStorage.
				localStorage.setItem("weatherData", JSON.stringify(data));
			} catch (error) {
				console.error("There has been a problem with your fetch operation:", error);
			}
		}

		// Data Fetching: The useEffect fetches data only if data is empty (i.e., no data in local storage).
		if (!data) {
			fetchData();
		}

		// Set up an interval to refetch data every 300 seconds (5 minutes). This way 1000 API calls limit lasts 14 hours.
		const intervalId = setInterval(fetchData, 300000);

		// On cleanup run the function to Clear the interval.
		return () => {
			clearInterval(intervalId);
		};
	}, [data]);

	// Memoization: useMemo is used to memoize the data.
	const memoizedData = useMemo(() => data, [data]);

	return [memoizedData];
};

export default useWeatherData;
