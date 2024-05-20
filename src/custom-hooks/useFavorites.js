import { useEffect, useState } from "react";

function useFavorites() {
	// Initialize state from localStorage or empty array if nothing found
	const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

	// Effect to synchronize state with localStorage
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	// Function to add a cityId to the favorites array
	function addToFavorites(cityId) {
		if (!favorites.includes(cityId)) {
			setFavorites(prevFavorites => [...prevFavorites, cityId]);
		}
	}

	// Function to remove a cityId from the favorites array
	function removeFromFavorites(cityId) {
		setFavorites(prevFavorites => prevFavorites.filter(id => id !== cityId));
	}

	return { favorites, addToFavorites, removeFromFavorites };
}

export default useFavorites;
