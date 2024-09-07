import React from 'react';
import "./Filter.css"
const priceRanges = [
    { label: '0-5000', min: 0, max: 5000 },
    { label: '5000-10000', min: 5000, max: 10000 },
    { label: '10000-20000', min: 10000, max: 20000 },
    { label: '20000+', min: 20000, max: Infinity },
];

const popularityRanges = [
    { label: '0-10000', min: 0, max: 10000 },
    { label: '10000-30000', min: 10000, max: 30000 },
    { label: '30000-50000', min: 30000, max: 50000 },
    { label: '50000+', min: 50000, max: Infinity },
];

export default function Filter({
    searchQuery,
    setSearchQuery,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedPopularityRange,
    setSelectedPopularityRange,
    sortOption,
    setSortOption
}) {
    return (
        <div className="navbar">

            <div className="search_bar ">
                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

            </div>


            <div className="dropsDown">
                <div>
                    <span>Price Range:</span>
                    <select
                        value={selectedPriceRange ? selectedPriceRange.label : ''}
                        onChange={(e) => {
                            const selectedRange = priceRanges.find(range => range.label === e.target.value);
                            setSelectedPriceRange(selectedRange || null);
                        }}
                    >
                        <option value="">Select Price Range</option>
                        {priceRanges.map(range => (
                            <option key={range.label} value={range.label}>
                                {range.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <span>Popularity Range:</span>
                    <select
                        value={selectedPopularityRange ? selectedPopularityRange.label : ''}
                        onChange={(e) => {
                            const selectedRange = popularityRanges.find(range => range.label === e.target.value);
                            setSelectedPopularityRange(selectedRange || null);
                        }}
                    >
                        <option value="">Select Popularity Range</option>
                        {popularityRanges.map(range => (
                            <option key={range.label} value={range.label}>
                                {range.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <span>Sort By:</span>
                    <select
                        value={sortOption || ''}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="">None</option>
                        <option value="price-asc">Price (Low to High)</option>
                        <option value="price-desc">Price (High to Low)</option>
                        <option value="popularity-asc">Popularity (Low to High)</option>
                        <option value="popularity-desc">Popularity (High to Low)</option>
                    </select>
                </div>
            </div>

        </div>
    );
}
