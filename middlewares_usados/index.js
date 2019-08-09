const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(session({ secret: 'grupoesfera', cookie: { maxAge: 30000 }}))  

app.post('/login', (req, res, next)=> {
    try{
        if (req.session.views) {
            req.session.views++;
            res.json({msj:"Session ya iniciada", session:req.session});
        } else {
            req.session.views = 1;
            res.json({msj:'Bienvenido a la pagina!'});
        }
        res.end();
    }catch(err){
        next(err); 
    }
  });

app.get('/productos', 

    // Middleware
    (req, res, next)=>{
        if(!req.session.views){
            res.status(403);
            res.json({ error:"Debe iniciar session para acceder" }); 
        }else{
            next();
        }
    }, 
    (req, res, next)=>{
        
        const desde = req.query.desde? req.query.desde: 0;
        const hasta = req.query.hasta? req.query.hasta: (desde+10);
        const orden = req.query.orden? req.query.orden: "mas_vendidos";
        const categoria = req.query.categoria? req.query.categoria: "todos";

        res.json({ 
            seccion:"productos", 
            categoria:categoria, 
            orden:orden,
            desde:desde,
            hasta:hasta, 
            productos:[] 
        });    
    }
);

app.get('/logout', (req, res, next)=>{

    try{
        if(req.session.views){
            req.session.destroy((err)=>console.log(`Session destruida ${err}`));
            res.json({msj: "Session destruida"});
            res.end();
        }else{
            res.json({error: "No existe session"});
            res.end();
        }
    }catch(err){
        next(err);
    }
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}!`)
});