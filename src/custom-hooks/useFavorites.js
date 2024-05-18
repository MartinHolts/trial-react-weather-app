import { useState } from "react";

function useFavorites() {
	var [favorites, setFavorites] = useState([]);

	// addToFavorites function takes a cityId as an argument and adds it to the favorites array. It creates a new array that includes all previous favorites plus the newly added city ID.
	// old state value of favorites is used as new input to inner function as prevFavorites.
	function addToFavorites(cityId) {
		setFavorites(
			function (prevFavorites) {
				return [...prevFavorites, cityId];
			}
		);
	}

	// The removeFromFavorites function takes a cityId as an argument and removes it from the favorites array. It filters out the city ID from the current list of favorites.
	// old state value of favorites is used as new input to inner function as prevFavorites.
	function removeFromFavorites(cityId) {
		setFavorites(
			function (prevFavorites) {
				prevFavorites.filter((id) => id !== cityId)
			}
		);
	}

	return { favorites, addToFavorites, removeFromFavorites };
}

export default useFavorites;
