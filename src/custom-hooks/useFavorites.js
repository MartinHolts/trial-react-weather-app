import { useState } from "react";

function useFavorites() {
	var [favorites, setFavorites] = useState([]);

	// addToFavorites function takes a cityId as an argument and adds it to the favorites array.
	// old state value of favorites is used as new input to inner function as prevFavorites.
	function addToFavorites(cityId) {
		setFavorites(
			// Creates a new array that includes all previous favorites plus the newly added city ID.
			function (prevFavorites) {
				return [...prevFavorites, cityId];
			}
		);
	}

	// The removeFromFavorites function takes a cityId as an argument and removes it from the favorites array.
	// old state value of favorites is used as new input to inner function as prevFavorites.
	function removeFromFavorites(cityId) {
		setFavorites(
			function (prevFavorites) {
				// Creates and returns a new array with elements that are not equal to the specifcied ID.
				prevFavorites.filter(
					function (id) {
						return id !== cityId
					}
				);
			}
		);
	}

	return { favorites, addToFavorites, removeFromFavorites };
}

export default useFavorites;
