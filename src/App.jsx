import React from 'react';
import 'styles/globals.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from 'pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
