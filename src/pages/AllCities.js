import WeatherDataDisplay from "../components/AllCitiesDisplay";
import './../style.scss'; // Import global styles

function AllCities() {
	return (
		<>
			<h1>AllCities</h1>
			<WeatherDataDisplay />
		</>
	);
}

export default AllCities;
