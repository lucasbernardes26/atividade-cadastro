const db = require('../server/db');

const funcionarioRepository = {
    async listar() {
        const [rows] = await db.query("SELECT * FROM funcionario2");
        return rows;
    },
    async cadastrar(funcionario) {
        const { nome, cpf, funcao } = funcionario;
        const sql = "INSERT INTO funcionario2 (nome, cpf, funcao) VALUES (?, ?, ?)";
        const [result] = await db.query(sql, [nome, cpf, funcao]);
        return result;
    }
};

module.exports = funcionarioRepository;