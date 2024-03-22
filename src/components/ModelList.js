import React from 'react';
import ModelCard from './ModelCard';

const ModelList = ({ models }) => {
  // Sort models based on likes count
  const sortedModels = models.slice().sort((a, b) => b.likes - a.likes);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sortedModels.map((model, index) => (
        <ModelCard key={model.id} model={model}  />
      ))}
    </div>
  );
};

export default ModelList;
