const express = require('express');
const router = express.Router();

router.post('/login',
    (req, res, next) => {
        try {
            if (!req.session.role) {
                if (req.body.username === 'spizzirri')
                    req.session.role = 'admin';
                else
                    req.session.role = 'guest';
            }
            res.status(200);
            res.json({ role: req.session.role });
            res.end();
        } catch (err) {
            next(err);
        }
    });

router.get('/logout',
    (req, res, next) => {
        try {
            if (req.session.role) {
                req.session.destroy((err) => console.log(`Session destruida ${err}`));
                res.json({ msj: "Session destruida" });
            } else {
                res.json({ error: "No existe session" });
            }
            res.status(200);
            res.end();
        } catch (err) {
            next(err);
        }
    });

module.exports = router;