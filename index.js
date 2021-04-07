const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Prueba Exitosa');
    console.log(req);
});

app.listen(8000, ()=> {
    console.log('Listening on port 8000');
});