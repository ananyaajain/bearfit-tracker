import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#FFC0CB"];

const BudgetPieChart = () => {
  const [data, setData] = useState([]);

//   const parseData = (data) => {
//     "Total": 68,
//     "Drinks/Food": 84,
//     "Entertainment": 37,
//     "Health": 21

//     const newData = []

//     setData(data);
//   }

  useEffect(() => {
    axios.get("http://localhost:3000/info/budget")
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const categories = {};
  let totalMoneySpent = 0;

  data.forEach(transaction => {
    const category = transaction.category;
    const amount = transaction.amount;
    categories[category] = categories[category] ? categories[category] + amount : amount;
    totalMoneySpent += amount;
  });

  const categoryData = Object.entries(categories).map(([category, amount]) => ({
    name: category,
    value: amount,
    percentage: (amount / totalMoneySpent) * 100
  }));

  categoryData.sort((a, b) => b.value - a.value);

  const topThreePurchases = categoryData.slice(0, 3).map(category => category.name);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={categoryData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label={({ name, percentage }) => `${name} ${percentage.toFixed(2)}%`}
      >
        {categoryData.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <p>Top three purchases: {topThreePurchases.join(", ")}</p>
    </PieChart>
  );
}

export default BudgetPieChart;
