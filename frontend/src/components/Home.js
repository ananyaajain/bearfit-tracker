import React, { useState, useEffect } from "react";
import axios from "axios";
import { Menu, Card, Row, Col, Progress } from "antd";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import './Home.css';
// import './Home.html';
import bearImage from './bear.jpeg';



const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#FFC0CB"];
// var perf =require('./Home.html');



function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <h1 className="logo">BearFit Tracker</h1>
        </div>
        <div className="header-right">
            <Link to="/login">LOG IN</Link>
        </div>
      </header>
      <main className="main">
        <div className="main-left">
          <h2>Find your Best Fit with Bear Fit</h2>
          <h5>Improve your wellness and self-awareness with our online fitness tracker</h5>
          <button><Link to="/menu"> START </Link></button>
        </div>
        <div className="main-right">
          <img src={bearImage} className="bear-image" alt="Bear Image" width="70%" height="70%" />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-left">
          <p>&copy; 2023 BearFit Tracker</p>
        </div>
        <div className="footer-right">
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
