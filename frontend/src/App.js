import './App.css';
import React, { useState } from "react";
import { Menu as AntdMenu, Card, Row, Col, Progress } from "antd";
// import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserCard from './components/UserCard';
import Time from './components/Time';
import Budget from './components/Budget';
import ContactUs from './components/ContactUs';
import Distance from './components/Distance';
import MentalCheckin from './components/MentalCheckin';

import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/time' element={<Time />} />
        <Route path='/distance' element={<Distance />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='/mentalHealth' element={<MentalCheckin />} />
        <Route path='/contact' element={<ContactUs />} />
        {/* <Home /> */}
        
      </Routes>
    </Router>

    
    // <Menu />
  );
}

export default App;

