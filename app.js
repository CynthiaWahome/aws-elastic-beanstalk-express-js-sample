const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello World!This was the FUN creation of my first Continuous Delivery Pipeline'));
=======
app.get('/', (req, res) => res.send('Hello World!This is the creation of my first Continuous Delivery Pipeline'));
>>>>>>> 5d2d91627d3442eded85c51f9d497da227bc8007

app.listen(port);
console.log(`App running on http://localhost:${port}`);
