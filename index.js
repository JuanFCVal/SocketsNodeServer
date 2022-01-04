
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();



//Public path
const public = path.resolve(__dirname, 'public');

app.use(express.static(public));
app.listen(process.env.PORT, (error) => {
    (error) => {console.log('Error server')};
    console.log('Server is running on port ', process.env.PORT);
})