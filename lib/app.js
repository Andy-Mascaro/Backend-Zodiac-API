const express = require('express');
const app = express();
const path = require('path');
// const path = require('path');
// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/zodiac', require('./controllers/zodiac'));
// App routes
// app.use('/zodiac/:id', (req, res) => {
//   const { id } = req.params;
//   const signInfo = zodiac.find((info) => info.id === id);
//   res.json(signInfo);
// });
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
