// Create web server
// Create route for GET /comments
// Create route for POST /comments
// Create route for PUT /comments/:id
// Create route for DELETE /comments/:id

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = [
    {
        id: 1
    }
]