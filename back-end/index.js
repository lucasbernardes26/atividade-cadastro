const express = require('express');
const cors = require('cors');
require('dotenv').config();

const funcionarioController = require('./controller/funcionarioController');

const app = express();
const PORT = process.env.PORT || 3071;

app.use(cors());
app.use(express.json());


app.use('/funcionarios', funcionarioController);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});