const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

module.exports = Router()
  .get('/:id', (req, res) => {
    const { id } = req.params.id;
    const signInfo = zodiac.find((info) => info.id === id);
    res.json(signInfo);
  })

  .get('/', (req, res) => {
    const signs = zodiac.map((data) => {
      return {
        id: data.id,
        name: data.name,
        dates: data.dates,
        symbol: data.symbol,
      };
    });
    res.json(signs);
  });
// Built in middleware

// App routes

// Error handling & 404 middleware for when
// a request doesn't match any app routes
module.exports = Router();
