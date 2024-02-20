const express = require("express");

// Inicializa express
const app = express();
const port = 3000;
app.use(express.json({ limit: "100mb" }));

// Importar rutas
const authRouter = require("./routes/auth");
const messagesRouter = require("./routes/messages");
const userRoutes = require('./routes/usuarios.routes');
const followRoutes = require('./routes/follows.routes');
const imagenElementoPublicacionRoutes = require('./routes/imagenesElementosPublicaciones.routes');
const imagenPublicacionRoutes = require('./routes/imagenesPublicacion.routes');
const publicacionRoutes = require('./routes/publicaciones.routes');
const relacionTemaPublicacionRoutes = require('./routes/relacionTemasPublicaciones.routes');
const temaRoutes = require('./routes/temas.routes');
const elementoPublicacionRoutes = require('./routes/elementosPublicaciones.routes');

// inicializar todas las rutas
app.use("/api/messages", messagesRouter);
app.use("/api/auth", authRouter);
app.use('/api/user', userRoutes);
app.use('/api/imagenElementoPublicacion', imagenElementoPublicacionRoutes);
app.use('/api/imagenPublicacion', imagenPublicacionRoutes);
app.use('/api/publicacion', publicacionRoutes);
app.use('/api/relacionTemaPublicacion', relacionTemaPublicacionRoutes);
app.use('/api/tema', temaRoutes);
app.use('/api/elementoPublicacion', elementoPublicacionRoutes);
app.use('/api/follow', followRoutes);

// Empezar el servidor
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}...`);
});