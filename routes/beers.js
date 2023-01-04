const express = require('express');
const router = express.Router();

const beers = {
  "beers": [
    {
      "id": 1,
      "name": "512 IPA",
      "reviews": [{ "id": 1, "text": "delicious" }]
    },
    {
      "id": 2,
      "name": "Durty Bull Brett",
      "reviews": [
        { "id": 2, "text": "why is Brett in the name?" },
        { "id": 3, "text": "Brett, or brat? Yuck!" },
        { "id": 4, "text": "Mmmm this is so good." },
        { "id": 5, "text": "Q Dogs!" },
        { "id": 6, "text": "^ Megan, is that you!?" }
      ]
    },
    { "id": 3, "name": "Dogfish Head 90 Minute IPA", "reviews": [] },
    {
      "id": 4,
      "name": "Chocolate stout",
      "reviews": [
        { "id": 7, "text": "too much Chocolate" },
        { "id": 8, "text": "so yummy" },
        { "id": 9, "text": "the best!" }
      ]
    }
  ]
}

router.param('beer', function(req, res, next, id) {
  req.beer = beers.beers.find(beer => beer.id === parseInt(id));
  next();
});

router.get('/', (req, res) => {
  res.send('hello from beers!');
});

router.get('/:beer', (req, res) => {
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

router.get('/:beer/reviews', (req, res) => {
  res.send(`The beer id you requested is: ${req.beer.name}`);
});

module.exports = router;