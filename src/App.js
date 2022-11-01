import React from 'react';
import {BrowserRouter, Routes,Route } from "react-router-dom";
import LoginPage from './Components/Login/LoginPage';
import HomePage from "./Components/Home/HomePage";
import './App.css';

const App = () => {
  return (<>
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
