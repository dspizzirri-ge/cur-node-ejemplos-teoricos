const checkCookie = (req, res, next) => {
    if (req.session.role === "admin")
        next();
    else {
        res.status(401);
        res.json({ message: "No tiene permisos para operacion" });
    }
}

module.exports = {
    checkCookie
}