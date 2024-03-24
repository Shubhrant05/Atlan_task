import React, { useState } from 'react';
import { FaCopy, FaThumbsUp, FaWindowClose } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ModelCard = ({ model }) => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(model.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = () => {
    isLiked ? setLikes(prevLikes => prevLikes - 1) : setLikes(prevLikes => prevLikes + 1);
    setIsLiked(!isLiked);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCopy = () => {
    // Copy snippet text to clipboard
    navigator.clipboard.writeText(model.codeSnippet);
    // Optionally, provide feedback to the user (e.g., toast message)
  };

  return (
    <div className="bg-gray-800 text-red-500 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-2 text-center">{model.name}</h2>
        <p className="text-gray-400 mb-4">{model.description}</p>
        <p className="text-gray-400 italic">Provider: <b>{model.provider}</b></p>
        <div className="flex items-center mt-4">
          <button className={`mr-2 focus:outline-none ${isLiked ? 'text-red-500' : 'text-gray-400'}`} onClick={handleLike}><FaThumbsUp /></button>
          <span className="text-gray-400">{likes}</span>
        </div>
        <div className="mt-4">
          <div className='mt-auto'>
            <div className='flex justify-between '>
              <button className="text-red-500 bg-gray-700 p-3 rounded-md focus:outline-none" onClick={toggleModal}>Snippet</button>

              <button className="text-red-500 bg-gray-700 p-3 rounded-md focus:outline-none ml-3" onClick={() => {
                navigate(`/model/${model._id}`)
              }}>More Details</button>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75 ">
              <div className="sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-3/4 bg-gray-800 rounded-lg p-6">
                <div className='flex justify-end'>
                  <button className="text-red-500 hover:text-red-300 focus:outline-none mr-2" onClick={handleCopy}><FaCopy /></button>
                  <button className="text-red-500 hover:text-gray-200 focus:outline-none" onClick={toggleModal}><FaWindowClose /></button>
                </div>
                <pre className="text-gray-300 bg-gray-700 p-3 border rounded-lg mt-4 whitespace-pre-wrap">{model.codeSnippet}</pre>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
