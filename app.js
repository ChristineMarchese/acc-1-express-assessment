const express = require("express");
const app = express();
const moviesController = require("./controllers/movies")

app.use(express.json());

app.use("/movies", moviesController);

app.get("/", (req, res) => {
    res.send('Welcome to my Movie app');
})

app.get("*", (req, res) => {
     res.status(404).send("The request you are looking for does not exist")
})

module.exports = app;