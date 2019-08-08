function consultar(dbb, equipo){
    
    try{
       if(equipo)
          return dbb.find({selector: {$or:[{ local: { $eq: equipo }}, { visitante: { $eq: equipo }}]}});
       return dbb.allDocs();    
    }catch(e){
        throw Error(e);
    }
}

function crear(dbb, data){

    try{
        if(Array.isArray(data))
            return dbb.bulkDocs(data);
        return dbb.post(data);
    }catch(e){
        throw Error(e);
    }
}

function eliminar(dbb, doc){
    try{
        dbb.remove(doc);
    }catch(e){
        throw Error(e);
    } 
}

module.exports = {
    consultar,
    crear,
    eliminar
}