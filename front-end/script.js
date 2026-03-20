const api_url = 'http://localhost:3010/funcionarios';

async function carregarFuncionarios() {
    const resp = await fetch(api_url);
    const dados = await resp.json();
    const lista = document.getElementById('listaFuncionarios');
    lista.innerHTML = dados.map(f => `<li><strong>${f.nome}</strong> - ${f.funcao}</li>`).join('');
}

document.getElementById('formFuncionario').addEventListener('submit', async (e) => {
    e.preventDefault();
    const funcionario = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        funcao: document.getElementById('funcao').value
    };

    await fetch(api_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(funcionario)
    });

    e.target.reset();
    carregarFuncionarios();
});

carregarFuncionarios();