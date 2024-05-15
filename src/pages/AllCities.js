import React, { useEffect, useState } from "react";

const AllCities = () => {
	const [data, setData] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://www.ilmateenistus.ee/ilma_andmed/xml/observations.php"
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
