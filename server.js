'use strict';
const express = require('express');



const app = express();


const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.status(200).send('Hello, Welcome to nothing');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
