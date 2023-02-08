require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const router = require('./src/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.use('/', (req, res) => {
    res.send('Hello World!');
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
