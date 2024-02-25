const axios = require('axios');
const express = require('express');
const port = 3000;
const app = express();

app.use(express.json()); // Utilities for request bodies
app.use(express.urlencoded({ extended: true })); // Utilities for query params

stupidDB = {}; // initialize our dumb database

// GET Requests

app.get('/', (req, res) => {
    // homepage
    res.send('bearfit tracker');
});

app.get('/info/budget', (req, res) => {
    res.send({
        "3/18": {
            category: "Drinks/Food",
            amount: 30
        },
        "3/19": {
          category: "Drinks/Food",
          amount: 40
        },
        "3/20": {
          category: "Health",
          amount: 40
        },
        "3/21": {
          category: "Health",
          amount: 60
        },
        "3/22": {
          category: "Drinks/Food",
          amount: 40
        },
        "3/23": {
          category: "Health",
          amount: 20
        },
        "3/24": {
          category: "Entertainment",
          amount: 25
        }
        // "Total": 68,
        // "Drinks/Food": 84,
        // "Entertainment": 37,
        // "Health": 21
    })
});

app.get('/info/time', (req, res) => {
    res.send({
        "3/18": {
            "family": 20,
            "friends": 10,
            "classes": 30,
            "extracurriculars": 20,
            "homework:": 30,
            "exercise": 10
        },
        "3/19": {
            "family": 30,
            "friends": 30,
            "classes": 50,
            "extracurriculars": 20,
            "homework:": 30,
            "exercise": 10
        },
        "3/20": {
            "family": 30,
            "friends": 40,
            "classes": 30,
            "extracurriculars": 10,
            "homework:": 30,
            "exercise": 10
        },
        "3/21": {
            "family": 30,
            "friends": 50,
            "classes": 20,
            "extracurriculars": 10,
            "homework:": 30,
            "exercise": 10
        },
        "3/22": {
            "family": 10,
            "friends": 15,
            "classes": 30,
            "extracurriculars": 25,
            "homework:": 30,
            "exercise": 10
        },
        "3/23": {
            "family": 10,
            "friends": 10,
            "classes": 20,
            "extracurriculars": 40,
            "homework:": 30,
            "exercise": 10
        },
        "3/24": {
            "family": 5,
            "friends": 10,
            "classes": 15,
            "extracurriculars": 10,
            "homework:": 20,
            "exercise": 10
        },
        "remaining_friends": 32,
        "remaining_family": 50,
        "remaining_extracurriculars": 68,
        "remaining_classes": 20,
        "remaining_homework": 10,
        "remaining_exercise": 40
    })
});

app.get('/info/distance', (req, res) => {
    res.send({
        "sleep": 6.3,
        "water": 5,
        "working": 5920,
        "calories": 50,
        "height": 105,
        "weight": 55,
        "age": 23
    })
});

app.get('/info/checkin', (req, res) => {
    res.send({
        "month": "April",
        "year": 2023,
        "date": "04/18/2023",
        "current_mood": 3,
        "4/1": 0,
        "4/2": 1,
        "4/3": 2,
        "4/4": 1,
        "4/5": 2,
        "4/6": 3,
        "4/7": 2,
        "4/8": 3,
        "4/9": 4,
        "4/10": 3,
        "4/11": 0,
        "4/12": 2,
        "4/13": 4,
        "4/14": 2,
        "4/15": 2,
        "4/16": 4,
        "4/17": 0,
        "4/18": 1,
        "4/19": 4
    })
});

// Server Setup

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});