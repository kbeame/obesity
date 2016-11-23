const express = require('express');
var app = express();
var d3 = require('d3');

const PORT = process.env.PORT || 3000;
app.use('/', d3Router);

app.listen(PORT, () => console.log('Server running on ' + PORT));
