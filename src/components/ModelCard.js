import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const ModelCard = ({ model }) => {
  const [likes, setLikes] = useState(model.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    isLiked ? setLikes(prevLikes => prevLikes - 1) : setLikes(prevLikes => prevLikes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-gray-800 text-red-500 rounded-lg shadow-lg overflow-hidden">

      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-2 text-center">{model.name}</h2>
        <p className="text-gray-400 mb-4">{model.description}</p>
        <p className="text-gray-400 italic">Provider: <b>{model.provider}</b></p>
        <div className="flex items-center mt-4">
          <button className={`mr-2 focus:outline-none ${isLiked ? 'text-red-500' : 'text-gray-400'}`} onClick={handleLike}><FaThumbsUp /></button>
          <span className="text-gray-400">{likes}</span>
        </div>
        <div className="flex mt-2">
          <span className="text-gray-400 text-sm mr-2">Category:</span>
          <div className="flex items-center">
            {model.category === 'Transformer' && <span className="mr-1">🤖</span>}
            {model.category === 'NLP' && <span className="mr-1">💬</span>}
            <span className="text-gray-400">{model.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
