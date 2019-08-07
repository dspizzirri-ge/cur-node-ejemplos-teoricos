function consultar(dbb, equipo){
    
    try{
       if(equipo)
          return dbb.find({selector: {$or:[{ local: { $eq: equipo }}, { visitante: { $eq: equipo }}]}});
       return dbb.allDocs();
    
    }catch(e){
        throw Error(e);
    }
}

function crear(db, data){
    
    if(Array.isArray(data))
        return db.bulkDocs(data);
    return db.post(data);
}

module.exports = {
    consultar,
    crear
}