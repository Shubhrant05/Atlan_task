import React, { useState, useEffect } from 'react';
import ModelList from '../components/ModelList';
import AddModelForm from '../components/AddModelForm';
// import { data } from '../../src/components/data';
import { FiFilter, FiAward } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [models, setModels] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAddModelOpen, setIsAddModelOpen] = useState(false);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    // Extract unique category values from the data

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:4000/api/models")
            setData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {

        // Filter models based on search term
        let filteredModels = data.filter(model =>
            model.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Filter models based on selected categories
        if (selectedCategories.length > 0) {
            filteredModels = filteredModels.filter(model =>
                selectedCategories.includes(model.category)
            );
        }

        setModels(filteredModels);
    }, [searchTerm, selectedCategories, data]);

    const uniqueCategories = Array.from(new Set(data?.map(model => model.category)));

    const handleSearch = event => {
        setSearchTerm(event.target.value);
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
        navigate('/halloffame')
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleAddModel = () => {
        setIsAddModelOpen(!isAddModelOpen);
    };

    const handleAddModel = formData => {
        const newModel = { ...formData, likes: 0 };
        setModels([...models, newModel]);
        toggleAddModel(); // Close the form after submission
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
                </div>
                <div className="flex items-center space-x-4 relative">
                    <button
                        className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg focus:outline-none hover:border-red-700"
                        onClick={toggleAddModel}
                    >
                        Add Model
                    </button>
                    <button
                        className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg focus:outline-none hover:border-red-700"
                        onClick={toggleDropdown}
                    >
                        <FiFilter className="inline-block mr-2" />
                        Filter
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute bg-gray-800 text-gray-400 rounded-lg py-2 mt-4 w-48">
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

            {isAddModelOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-gray-800 rounded-lg p-8 max-w-md">
                        <h2 className="text-2xl font-bold mb-4">Add New Model</h2>
                        <AddModelForm onSubmit={handleAddModel} onClose={() => setIsAddModelOpen(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
