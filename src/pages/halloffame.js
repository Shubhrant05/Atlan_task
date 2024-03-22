import React from 'react';
import { FiAward } from 'react-icons/fi'; // Import necessary icons

const HallOfFame = () => {
  // Assuming you have an array of top 5 models with their details
  const topModels = [
    { name: 'Model 1', likes: 100 },
    { name: 'Model 2', likes: 90 },
    { name: 'Model 3', likes: 80 },
    { name: 'Model 4', likes: 70 },
    { name: 'Model 5', likes: 60 },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-red-500 p-8">
      <h1 className="text-3xl font-bold mb-4">Hall of Fame</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topModels.map((model, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="text-2xl font-semibold mb-4">{model.name}</div>
              <div className="flex items-center">
                <FiAward className="mr-2" />
                <span className="text-yellow-400">{model.likes}</span>
              </div>
            </div>
            <div className="mt-4">
              {/* You can add more details about the model here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
