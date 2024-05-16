import React, { useEffect, useState } from "react";

const AllCities = () => {
	const [data, setData] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				/*
				const response = await fetch(
					"https://www.ilmateenistus.ee/ilma_andmed/xml/observations.php"
				);
				*/

				/*
				const response = await fetch(
					"https://mocktarget.apigee.net/xml"
				);
				*/

				const response = await fetch(
					//"https://api.openweathermap.org/data/2.5/weather?lat=59.4372&lon=24.7453&appid=3cfcda1c67930c9db4bb6363b4d06023"
					// Tallinn, Tartu, Narva, Pärnu, Põltsamaa
					"http://api.openweathermap.org/data/2.5/group?id=588409,588335,590031,589580,589379 &units=metric&appid=3cfcda1c67930c9db4bb6363b4d06023"
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.text(); // or response.json() if the data is JSON
				setData(data);
			} catch (error) {
				console.error(
					"There has been a problem with your fetch operation:",
					error
				);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>All cities</h1>
			<pre>{data}</pre> {/* Displaying the raw XML data */}
		</div>
	);
};

export default AllCities;
