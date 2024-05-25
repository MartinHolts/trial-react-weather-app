import FavoriteCitiesDisplay from "../components/FavoriteCitiesDisplay";
import './../style.scss'; // Import global styles

function Favorites() {
	return (
		<>
			<h1>Favorites</h1>
			<FavoriteCitiesDisplay />
		</>
	);
}

export default Favorites;
