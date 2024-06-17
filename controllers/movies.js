const express = require("express");
const movies = express.Router();
const moviesArray = require("../data/movies")

movies.get("/", (req, res) => {
     try {
       res.status(200).json(moviesArray)
     } catch (error) {
        res.status(404).json({ error: "page not found" })
     }
})

movies.get("/:id", (req, res) => {
     try {
       const { id } = req.params;
       const movie = moviesArray.find((movies) => movies.id === Number(id));
        if(movie){
          res.status(200).json(movie)
        } else {
           throw "could not find movie";
        }
     } catch (error) {
       res.status(404).json({ error: "page not found"})
     }
})

movies.post("/", (req, res) => {
     try {
        const movie = req.body;
        if(movie){
           moviesArray.push(movie)
           res.status(201).json(moviesArray[moviesArray.length - 1]);
        } else {
           throw "could not create. please provide data"
        }
      } catch (error) {
        res.status(400).json({ error: "page not found" })
        }
});



module.exports = movies;