const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

//1

router.get("/movies", function (req, res) {
    const arrayOfMovies = [
      "Batman",
      "Inception",
      "Harry Potter",
      "Lord of The Rings",
      "Tron",
    ];
    res.send(arrayOfMovies);
  });

  //2 or 3
  
  router.get("/movies/:index", function (req, res) {
    const arrayOfMovies = [
      "Batman",
      "Inception",
      "Harry Potter",
      "Lord of The Rings",
      "Tron",
    ];
    let c = req.params.index;
    if (arrayOfMovies.length - 1 < c) {
      res.send("Error! Index out of bounds.");
    } else {
      res.send(arrayOfMovies[c]);
    }
  });

  //4
  
  router.get("/films", function (req, res) {
    const arrayOfFilms = [
      {
        id: 1,
        name: "Dune",
      },
      {
        id: 2,
        name: "Wall Street",
      },
      {
        id: 3,
        name: "Big Short",
      },
      {
        id: 4,
        name: "Pirates of Carribean",
      },
    ];
    res.send(arrayOfFilms);
  });

  //5
  
  router.get("/films/:filmId", function (req, res) {
    const arrayOfFilms = [
      {
        id: 1,
        name: "Dune",
      },
      {
        id: 2,
        name: "Wall Street",
      },
      {
        id: 3,
        name: "Big Short",
      },
      {
        id: 4,
        name: "Pirates of Carribean",
      },
    ];
  
    let value = req.params.filmId;
    let found = false;
    for (let i = 0; i < arrayOfFilms.length; i++) {
      if (arrayOfFilms[i].id == value) {
        found = true;
        res.send(arrayOfFilms[i]);
        break;
      }
    }
    if (found == false) {
      res.send("No movie with given index exists!");
    }
  });
  
  module.exports = router;




