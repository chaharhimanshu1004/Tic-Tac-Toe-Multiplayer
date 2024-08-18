
import './App.css';
import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './components/Game';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path='/game' element={<Game></Game>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
