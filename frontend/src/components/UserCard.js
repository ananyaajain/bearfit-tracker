import React, { useState } from "react";
import { Menu, Card, Row, Col, Progress } from "antd";
// import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const UserCard = () => {
    return (
        <Col span={8}>
        <Card title="User Card">
            <p>User information goes here</p>
        </Card>
        </Col>
    );
}

export default UserCard;