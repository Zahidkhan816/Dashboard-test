import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminDB from './Compnents/Admin';
// import Sidebar from './Compnents/Sidebar'; // Assuming this is the correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<AdminDB />} />
      </Routes>

    </Router>
  );
}

export default App;
