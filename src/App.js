import React, { useState, useEffect } from 'react';
import ModelList from './components/ModelList';
import { data } from '../src/components/data';
import { FiFilter, FiAward } from 'react-icons/fi'; // Import necessary icons

const App = () => {
  const [models, setModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByLikes, setSortByLikes] = useState(false);

  // Fetch models data (replace with actual API call)
  useEffect(() => {
    // Mock data for demonstration
    const mockModels = data.models;

    // Filter models based on search term
    const filteredModels = mockModels.filter(model =>
      model.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort models based on likes
    const sortedModels = sortByLikes
      ? filteredModels.slice().sort((a, b) => b.likes - a.likes)
      : filteredModels;

    setModels(sortedModels);
  }, [searchTerm, sortByLikes]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSortByLikes = () => {
    setSortByLikes(!sortByLikes);
  };

  const handleFilterByCategory = () => {
    // Implement filtering by category functionality here
    // Example: You can open a modal or toggle a dropdown for category selection
  };

  const handleHallOfFame = () => {
    // Implement navigation to the Hall of Fame page (top 5 models)
    // Example: Redirect the user to the Hall of Fame page
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
        <div className="flex items-center space-x-4">
          <button
            className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg focus:outline-none hover:border-red-700"
            onClick={handleFilterByCategory}
          >
            <FiFilter className="inline-block mr-2" />
            Filter
          </button>
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

export default App;
