import { useEffect, useState } from "react";
import useWeatherData from './useWeatherData';

function useFavorites() {
	const [fetchedData] = useWeatherData();

	// Initialize state from localStorage or empty array if nothing found
	const [favorites, setFavorites] = useState(function () {
		return JSON.parse(localStorage.getItem('favorites')) || [];
	});

	// Effect to synchronize state with localStorage
	useEffect(function () {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	// Function to add a cityId to the favorites array and sort it based on the fetchedData order
	function addToFavorites(cityId) {
		if (!favorites.includes(cityId)) {
			setFavorites(function (prevFavorites) {
				const updatedFavorites = [...prevFavorites, cityId];

				// Sort the updated favorites based on the fetchedData order
				if (fetchedData && fetchedData.list) {
					updatedFavorites.sort(function (a, b) {
						const indexA = fetchedData.list.findIndex(city => city.id === a);
						const indexB = fetchedData.list.findIndex(city => city.id === b);
						return indexA - indexB;
					});
				}

				return updatedFavorites;
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
