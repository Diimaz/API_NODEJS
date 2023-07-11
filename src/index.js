const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv-safe').config();
const v1UsuarioRouter = require("./v1/routes/usuarioRoutes");
const v1AuthRouter = require("./v1/routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/api/v1/usuarios", v1UsuarioRouter);
app.use("/api/v1/auth", v1AuthRouter);

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});



