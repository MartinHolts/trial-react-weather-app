import { useState } from "react";

function useFavorites() {
	var [favorites, setFavorites] = useState([]);

	// Function to add a cityId to the favorites array
	function addToFavorites(cityId) {
		console.log("Attempting to add to favorites:", cityId); // Log the attempt to add the cityId

		setFavorites(
			function (prevFavorites) {
				// Check if the cityId already exists in the favorites array
				if (!prevFavorites.some(id => id === cityId)) {
					const updatedFavorites = [...prevFavorites, cityId];
					console.log("Added to favorites:", updatedFavorites); // Log the updated favorites array
					return updatedFavorites; // Return the updated array
				} else {
					console.log("CityId already exists in favorites."); // Log if the cityId already exists
					return prevFavorites; // Do not update the favorites array
				}
			}
		);
	}

	// Function to remove a cityId from the favorites array
	function removeFromFavorites(cityId) {
		console.log("Removing from favorites:", cityId); // Log the cityId being removed

		setFavorites(
			function (prevFavorites) {
				const filteredFavorites = prevFavorites.filter(function (id) {
					return id !== cityId;
				});
				console.log("Filtered favorites after removal:", filteredFavorites); // Log the filtered favorites array
				return filteredFavorites; // Return the filtered array
			}
		);
	}

	return { favorites, addToFavorites, removeFromFavorites };
}

export default useFavorites;
