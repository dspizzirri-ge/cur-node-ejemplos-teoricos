const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res, next)=>{
    try{
        console.log(req.body);
        throw new Error('BROKEN');
    } catch (err) {
        next(err)
    }
});

app.get('/', (req, res, next)=>{
    try{
        throw new Error('BROKEN')
    } catch (err) {
        next(err)
    }
});

app.use((err, req, res, next) => {
    console.log(`Manejando error: ${err}`);
    res.status(500); 
    res.json({ error: err.message });
  });

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}!`)
});