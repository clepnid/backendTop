function admin(req, res, next) {
    if (!req.user.roles.some(rol => rol.nombre === 'admin')) return res.status(403).send({
        ok: false,
        error: "Acceso denegado."
    });

    next();
}

function editor(req, res, next) {
    if (!req.user.roles.some(rol => rol.nombre === 'editor')) return res.status(403).send({
        ok: false,
        error: "Acceso denegado."
    });

    next();
}

function viewer(req, res, next) {
    if (!req.user.roles.some(rol => rol.nombre === 'viewer')) return res.status(403).send({
        ok: false,
        error: "Acceso denegado."
    });

    next();
}

module.exports = { admin, editor, viewer };