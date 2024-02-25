import React, { useState } from "react";
import { Menu, Card, Row, Col, Progress } from "antd";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Time = () => {
    return (
        <Col span={8}>
            <Card title="Time Spent">
                <Progress
                type="circle"
                percent={75}
                format={(percent) => `${percent} hours`}
                />
            </Card>
        </Col>
    )
}

export default Time;