// Favorites.js
import React, { useState } from 'react';
import UnifiedViewPage from "../components/UnifiedViewPage/UnifiedViewPage";

const Favorites = () => {
	const [viewMode, setViewMode] = useState('favorites');

	return (
		<div>
			<UnifiedViewPage viewMode={viewMode} />
			<button onClick={() => setViewMode(viewMode === 'favorites' ? 'all' : 'favorites')}>
				Switch View
			</button>
		</div>
	);
};

export default Favorites;
