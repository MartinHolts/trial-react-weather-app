// custom-hooks/useFavorites.js
import { useState } from "react";

const useFavorites = () => {
	const [favorites, setFavorites] = useState([]);

	const addToFavorites = (cityId) => {
		setFavorites([...favorites, cityId]);
	};

	const removeFromFavorites = (cityId) => {
		setFavorites(favorites.filter((id) => id !== cityId));
	};

	return { favorites, addToFavorites, removeFromFavorites };
};

export default useFavorites;
