import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import HallOfFame from './pages/halloffame';

const App = () => {
 
  return (
    <div className="bg-gray-900 min-h-screen text-red-500 p-8">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
