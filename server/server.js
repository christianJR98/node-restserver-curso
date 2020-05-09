require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Los . use son middlewares
//Los middleeares son funciones que se ejecutan en cada
//peticion

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('Get Usuario');
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            body
        });
    }
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id

    res.json({
        persona: body
    });
});

app.delete('/usuario', function(req, res) {
    res.json('Delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log("escuchando puerto 3000");
});