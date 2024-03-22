import React, { useState, useEffect } from 'react';
import ModelList from '../components/ModelList';
import { data } from '../../src/components/data';
import { FiFilter, FiAward } from 'react-icons/fi'; 
import Carousel from '../components/Carousel';

const Dashboard = () => {
    const [models, setModels] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortByLikes, setSortByLikes] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Extract unique category values from the data
    const uniqueCategories = Array.from(new Set(data.models.map(model => model.category)));

    // Fetch models data (replace with actual API call)
    useEffect(() => {
        // Mock data for demonstration
        const mockModels = data.models;

        // Filter models based on search term
        let filteredModels = mockModels.filter(model =>
            model.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Filter models based on selected categories
        if (selectedCategories.length > 0) {
            filteredModels = filteredModels.filter(model =>
                selectedCategories.includes(model.category)
            );
        }

        // Sort models based on likes only when sortByLikes is true
        const sortedModels = sortByLikes
            ? filteredModels.slice().sort((a, b) => b.likes - a.likes)
            : filteredModels;

        setModels(sortedModels);
    }, [searchTerm, sortByLikes, selectedCategories]);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleSortByLikes = () => {
        setSortByLikes(!sortByLikes); // Toggle sortByLikes state
    };

    const handleCategoryChange = category => {
        const index = selectedCategories.indexOf(category);
        if (index === -1) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        }
    };

    const handleHallOfFame = () => {
        // Implement navigation to the Hall of Fame page (top 5 models)
        // Example: Redirect the user to the Hall of Fame page
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="bg-gray-900 min-h-screen text-red-500 p-8">
            <h1 className="text-3xl font-bold mb-4">Large Language Models</h1>
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search by title"
                        className="bg-gray-800 text-gray-400 rounded-l-lg px-4 py-2 focus:outline-none"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button
                        className="bg-gray-800 text-gray-400 px-4 py-2 rounded-r-lg focus:outline-none hover:border-red-700"
                        onClick={handleSortByLikes}
                    >
                        {sortByLikes ? 'Sort by Most Likes' : 'Sort by Default'}
                    </button>
                </div>
                <div className="flex items-center space-x-4 relative">
                    <button
                        className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg focus:outline-none hover:border-red-700"
                        onClick={toggleDropdown}
                    >
                        <FiFilter className="inline-block mr-2" />
                        Filter
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute bg-gray-800 text-gray-400 rounded-lg py-2 mt-1 w-48">
                            {uniqueCategories.map(category => (
                                <label key={category} className="block px-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                        className="mr-2"
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                    )}
                    <button
                        className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg focus:outline-none hover:border-red-700"
                        onClick={handleHallOfFame}
                    >
                        <FiAward className="inline-block mr-2" />
                        Hall of Fame
                    </button>
                </div>
            </div>
            <ModelList models={models} />
        </div>
    );
};

export default Dashboard;
