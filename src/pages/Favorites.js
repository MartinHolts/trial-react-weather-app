import React, { useEffect } from 'react';
import FavoriteCitiesDisplay from "../components/FavoriteCitiesDisplay/FavoriteCitiesDisplay";
import { useTestValue } from '../context/TestContext';

function Favorites() {
	const testValue = useTestValue(); // Capture the context value on the initial render

	useEffect(() => {
		console.log(testValue); // Log the captured value
	}, []); // Empty dependency array means this runs once on mount

	return (
		<>
			<h1>Favorites</h1>
			<FavoriteCitiesDisplay />
		</>
	);
}

export default Favorites;
