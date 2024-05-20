import React, { useState } from 'react';
import useWeatherData from '../../custom-hooks/useWeatherData';
import useFavorites from '../../custom-hooks/useFavorites';
import './UnifiedViewPage.scss';

const UnifiedViewPage = () => {
    const [fetchedData, setFetchedData] = useWeatherData(); // Assuming useWeatherData returns a state updater
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    const [viewMode, setViewMode] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter cities based on search query and view mode
    const citiesToShow = fetchedData?.list
        ? fetchedData.list.filter(city => {
            if (viewMode === 'all') {
                return true;
            } else {
                return favorites.includes(city.id);
            }
        })
        : [];

    return (
        <div className="unified-view-page">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ marginBottom: '10px' }}
            />

            {citiesToShow.length > 0 ? (
                citiesToShow.map((city, index) => (
                    <div key={index} className={`city-card ${favorites.includes(city.id) ? 'highlighted' : ''}`}>
                        <h2>{city.name}</h2>
                        <p>Weather: {city.weather[0]?.description}</p>
                        <p>Temperature: {city.main?.temp}°C</p>
                        <p>Feels Like: {city.main?.feels_like}°C</p>
                        <p>Humidity: {city.main?.humidity}%</p>
                        <p>Wind Speed: {city.wind?.speed} m/s</p>
                        <button onClick={() => addToFavorites(city.id)}>
                            Add to Favorites
                        </button>
                        <button onClick={() => removeFromFavorites(city.id)}>
                            Remove from Favorites
                        </button>
                    </div>
                ))
            ) : (
                <p>No cities found.</p>
            )}

            <button onClick={() => setViewMode(viewMode === 'all' ? 'favorites' : 'all')}>
                Switch View
            </button>
        </div>
    );
};

export default UnifiedViewPage;
