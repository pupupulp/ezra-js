global.demand = path => require(`${__dirname}/${path}`);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }));
    
app.listen(port, () => console.log(`http://localhost:${port}`));