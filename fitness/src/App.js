import './App.css';
import React from 'react'
import {Box} from '@mui/material'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import ExerciseDetails from './pages/ExerciseDetails.js'
import Home from "./pages/Home.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box width='480px' sx={{width:{xl:"1488px"}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
