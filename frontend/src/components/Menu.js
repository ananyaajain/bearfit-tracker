import React, { useState } from "react";
import { Menu as AntdMenu, Card, Row, Col, Progress } from "antd";
// import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import UserCard from './UserCard';
import Time from './Time';
import Budget from './Budget';
import ContactUs from './ContactUs';
import Dashboard from './Dashboard';
import Distance from './Distance';
import MentalCheckin from './MentalCheckin';
import Home from './Home';
import Login from './Login';


const { SubMenu } = AntdMenu;

const Menu = () => {

    const routeData = [
        // { name: 'Home', route: 'home' },
        // { name: 'Login', route: 'login' },
        { name: 'Dashboard', route: 'dashboard' },
        { name: 'Time', route: 'time' },
        { name: 'Distance', route: 'distance' },
        { name: 'Budget', route: 'budget' },
        { name: 'Mental Check-in', route: 'mentalHealth' },
        { name: 'Contact Us', route: 'contact' },
      ];

    const [activeMenu, setActiveMenu] = useState("1");

    const handleMenuClick = (e) => {
        setActiveMenu(e.key);
    };

    return (
    // <Router>
    <div className="App">
        <AntdMenu
        onClick={handleMenuClick}
        selectedKeys={[activeMenu]}
        mode="horizontal"
        >
        {/* <Menu.Item key="1">Dashboard</Menu.Item> */}
        {/* <SubMenu key="sub1" title="Settings">
            <Menu.Item key="2">Profile</Menu.Item>
            <Menu.Item key="3">Account</Menu.Item>
        </SubMenu> */}

        {/* <div> */}
        {routeData.map((item, index) => (
            <AntdMenu.Item key={index+1}>
                <Link to={`/${item.route}`}>
                    {item.name}
                </Link>
                
            </AntdMenu.Item>
        ))}
        {/* </div> */}

        </AntdMenu>
        
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/home' element={<Home />} /> */}
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/time' element={<Time />} />
            <Route path='/distance' element={<Distance />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/mentalHealth' element={<MentalCheckin />} />
            <Route path='/contact' element={<ContactUs />} />
          
        </Routes>
        <Dashboard />
    </div>
    // </Router>
    );
};

export default Menu;
