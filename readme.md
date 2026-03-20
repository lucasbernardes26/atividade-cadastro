# AV3 - Sistema de Gerenciamento de Funcionários 🏢

Este projeto foi desenvolvido como parte da avaliação **AV3**, com o objetivo de criar um sistema interno para gerenciar o cadastro de funcionários, substituindo processos manuais por uma aplicação web moderna e organizada.

**Estudante:** Lucas Gabriel dos Santos Bernardes
**Turma:** PPJA

---

## 🚀 Tecnologias e Arquitetura

O sistema utiliza o padrão **MVC (Model-View-Controller)** para garantir a separação de responsabilidades e organização do código:

*   **Backend:** Node.js com framework Express.
*   **Banco de Dados:** MySQL para persistência dos dados.
*   **Frontend:** Interface simples em HTML/CSS integrando com a API via Fetch API.
*   **Segurança:** Uso de variáveis de ambiente (`.env`) para proteção de dados sensíveis.

---

## 📂 Estrutura de Pastas

O projeto segue rigorosamente a estrutura solicitada:

```text
/projeto
├── controller/
│   └── funcionarioController.js   # Lógica das rotas (GET/POST)
├── repository/
│   └── funcionarioRepository.js   # Comunicação com o banco de dados
├── server/
│   └── db.js                      # Configuração da conexão MySQL
├── frontend/
│   └── index.html                 # Interface do usuário
├── .env                           # Variáveis de ambiente
├── index.js                       # Ponto de entrada (Servidor)
└── package.json                   # Dependências do projeto