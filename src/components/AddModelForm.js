import React, { useState } from 'react';

const AddModelForm = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        description: '',
        provider: '',
        providerInfo: '',
        sampleCode: '',
        useCases: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            category: '',
            description: '',
            provider: '',
            providerInfo: '',
            sampleCode: '',
            useCases: ''
        });
    };

    return (
        <div className="bg-gray-900 fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-gray-800 rounded-lg p-8 w-3/4">
                <h2 className="text-xl font-bold text-red-500 mb-4">Add New Model</h2>
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    <div className="flex flex-wrap">
                        {/* Left column with four fields */}
                        <div className="w-full sm:w-1/2 pr-4 mb-4">
                            <label className="block text-gray-400 mb-1">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-gray-800 text-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none mb-4"
                                required
                            />
                            <div>
                                <label className="block text-gray-400 mb-1">Category:</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="bg-gray-800 text-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-1">Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="bg-gray-800 text-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none"
                                    required
                                />
                            </div>
                            {/* Add other fields here */}
                            <div>
                                <label className="block text-gray-400 mb-1">Provider:</label>
                                <input
                                    type="text"
                                    name="provider"
                                    value={formData.provider}
                                    onChange={handleChange}
                                    className="bg-gray-800 text-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Right column with sample code field */}
                        <div className="w-full sm:w-1/2 pl-4 mb-4">
                            <label className="block text-gray-400 mb-1">Sample Code:</label>
                            <textarea
                                name="sampleCode"
                                value={formData.sampleCode}
                                onChange={handleChange}
                                className="bg-gray-800 text-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none"
                                rows={4} // Set the number of rows for the textarea
                                required
                            />
                            <div>
                                <label className="block text-gray-400 mb-1">Provider Info:</label>
                                <input
                                    type="text"
                                    name="providerInfo"
                                    value={formData.providerInfo}
                                    onChange={handleChange}
                                    className="bg-gray-800 text-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-1 ">Use Case:</label>
                                <input
                                    type="text"
                                    name="useCases"
                                    value={formData.useCases}
                                    onChange={handleChange}
                                    className="bg-gray-800 text-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-red-700 text-white px-6 py-2 rounded-lg focus:outline-none hover:border-red-700"
                        >
                            Add Model
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-800 text-gray-400 px-6 py-2 rounded-lg focus:outline-none hover:border-red-700 ml-4"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddModelForm;
