const express = require('express');
const router = express.Router();
const repository = require('../repository/funcionarioRepository');

// GET /funcionarios
router.get('/', async (req, res) => {
    try {
        const funcionarios = await repository.listar();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar funcionários" });
    }
});

// POST /funcionarios
router.post('/', async (req, res) => {
    try {
        const { nome, cpf, funcao } = req.body;
        if (!nome || !cpf || !funcao) {
            return res.status(400).json({ error: "Campos obrigatórios ausentes" });
        }
        await repository.cadastrar({ nome, cpf, funcao });
        res.status(201).json({ message: "Funcionário cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar funcionário" });
    }
});

module.exports = router;