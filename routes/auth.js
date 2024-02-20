const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require('dotenv').config();
const User = require('./../modelos/usuarios.modelo');

// inicializa router de servidor
const router = express.Router();

// En post
router.post("/", async (req, res) => {
    User.findByEmail(req.body.email, async function (err, users) {
        if (err)
            res.send(err);
        // si no encuentra un usuario con dicho email lanza error
        let user = users.find(u => u.email === req.body.email);
        if (!user) res.status(400).send({ error: true, message: 'Email no valido' });
        else {
            const valid = await bcrypt.compare(req.body.password, user.password)
            if (!valid) res.status(400).send({ error: true, message: 'contraseña no valido' });
            const token = jwt.sign({
                id: user.id,
                pass: user.password
            }, process.env.CLAVE_TOKEN_TOP, { expiresIn: process.env.EXPIRE_SESSION_TOKEN || "15m" });
            res.send({
                ok: true,
                token: token
            });
        }
    });
});

// Export el router
module.exports = router;