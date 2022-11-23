const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 8080;

let requestCount = 0;

app.get('/', async (req, res) => {
  requestCount++;
  console.log(`Request: ${requestCount}`);
  const result = await axios({
    method: 'GET',
    url: 'https://programming-quotes-api.herokuapp.com/quotes/random'
  })
  const { author, en: quote } = result.data;
  res.send(`"${quote}" - ${author}`);
})

const server = app.listen(PORT, () => {
  console.log('Listening on port %s', PORT);
});
