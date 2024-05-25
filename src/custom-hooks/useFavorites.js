import { useEffect, useState } from "react";

function useFavorites() {
	// Initialize state from localStorage or empty array if nothing found
	const [favorites, setFavorites] = useState(function () {
		return JSON.parse(localStorage.getItem('favorites')) || [];
	});

	// Effect to synchronize state with localStorage
	useEffect(function () {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	// Function to add a cityId to the favorites array
	function addToFavorites(cityId) {
		if (!favorites.includes(cityId)) {
			setFavorites(function (prevFavorites) {
				return [...prevFavorites, cityId];
			});
		}
	}

	// Function to remove a cityId from the favorites array
	function removeFromFavorites(cityId) {
		setFavorites(function (prevFavorites) {
			return prevFavorites.filter(function (id) {
				return id !== cityId;
			});
		});
	}

	return { favorites: favorites, addToFavorites: addToFavorites, removeFromFavorites: removeFromFavorites };
}

export default useFavorites;