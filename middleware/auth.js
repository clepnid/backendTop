const jwt = require("jsonwebtoken");
const User = require('./../modelos/usuarios.modelo');

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).send({
        ok: false,
        error: "Acceso denegado. No tiene token"
    });

    try {
        const decoded = jwt.verify(token, process.env.CLAVE_TOKEN_TOP);
        User.findByIdPass(decoded.id, decoded.pass, async function (err, users) {
            // si no encuentra un usuario con dicho email lanza error
            if (err)
                res.send(err);

            if (users.length === 0) {
                return res.status(401).send({
                    ok: false,
                    error: "Acceso denegado. No tiene token"
                });
            } else {
                req.userToken = users[0];
            }

        });
    } catch (error) {
        return res.status(401).send({
            ok: false,
            error: "Token caducado"
        });
    }

    next();
}