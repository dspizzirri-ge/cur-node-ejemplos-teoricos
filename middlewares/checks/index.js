function checkParameters(req, res, next){
    console.log("Middleware general");
    next();
}

module.exports = {
    checkParameters
}