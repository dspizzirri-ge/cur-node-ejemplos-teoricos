const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

const express = require('express');
const app = express()
const port = 3000



const db = new PouchDB('torneo2019');
db.put({ _id: "rojoverde", local: "equipoRojo", visitante: "equipoVerde", resultado: "1", publico: "30000", fecha: "2019-01-10" }).catch(e => new Error(e));
db.put({ _id: "rojoazul", local: "equipoRojo", visitante: "equipoAzul", resultado: "1", publico: "40000", fecha: "2019-01-10" }).catch(e => new Error(e));
db.put({ _id: "verdeazul", local: "equipoVerde", visitante: "equipoAzul", resultado: "0", publico: "50000", fecha: "2019-01-10" }).catch(e => new Error(e));
db.put({ _id: "verderojo", local: "equipoVerde", visitante: "equipoRojo", resultado: "0", publico: "36000", fecha: "2019-01-10" }).catch(e => new Error(e));
db.put({ _id: "azulrojo", local: "equipoAzul", visitante: "equipoRojo", resultado: "1", publico: "31000", fecha: "2019-01-10" }).catch(e => new Error(e));
db.put({ _id: "azulverde", local: "equipoAzul", visitante: "equipoVerde", resultado: "=", publico: "80000", fecha: "2019-01-10" }).catch(e => new Error(e));
db.info().then((info) => console.log(info)).catch(e => new Error(e));
db.get("rojoverde").then((doc) => console.log(doc)).catch(e => new Error(e));
db.get({ local: "equipoRojo" }).then((doc) => console.log(doc)).catch(e => new Error(e));


app.get('/', (req, res) => res.json({ "msj": "Hola Mundo" }))
app.post('/', (req, res) => res.json({ "msj": "Hola Mundo" }))
app.delete('/', (req, res) => res.json({ "msj": "Hola Mundo" }))
app.put('/', (req, res) => res.json({ "msj": "Hola Mundo" }))

app.listen(port, () => console.log(`Escuchando en el puerto ${port}!`))