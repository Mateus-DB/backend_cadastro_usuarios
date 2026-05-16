🚀 Cadastro de usuários | Backend RESTful Service

🌐 API online:
https://backend-cadastro-usuarios-1.onrender.com/users

API RESTful para gerenciamento de usuários, desenvolvida com foco em boas práticas de backend, arquitetura em camadas e integração com banco de dados NoSQL.

O projeto foi construído utilizando Node.js, Express e TypeScript, aplicando conceitos modernos de desenvolvimento backend, organização escalável de código e utilização do Prisma ORM com MongoDB.

✨ Funcionalidades

✔️ Cadastro de usuários
✔️ Listagem de usuários cadastrados
✔️ Remoção de usuários por ID
✔️ Validação de dados com Zod
✔️ Integração com banco de dados MongoDB
✔️ Estrutura organizada em camadas
✔️ API REST seguindo boas práticas de desenvolvimento

🛠️ Stack Tecnológica
Node.js
Express
TypeScript
Prisma
MongoDB
Zod
Nodemon


📡 Endpoints da API
➕ Criar Usuário

POST /users

Body
{
  "name": "Mateus",
  "email": "mateus@email.com",
  "age": 25
}

Validações aplicadas
Nome obrigatório
Email válido
Idade numérica


📄 Listar Usuários

GET /users

Resposta
[
  {
    "id": "abc123",
    "name": "Mateus",
    "email": "mateus@email.com",
    "age": 25
  }
]


❌ Deletar Usuário

DELETE /users/:id

Exemplo
DELETE /users/abc123
Resposta
{
  "message": "Usuário deletado com sucesso"
}


▶️ Como executar o projeto
# instalar dependências
npm install

# executar ambiente de desenvolvimento
npm run dev
🔐 Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="sua_string_do_mongodb"
PORT=3000
📁 Estrutura do Projeto
src/
├── controllers/
├── services/
├── routes/
├── schemas/
├── config/
├── app.ts
└── server.ts


💡 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de fortalecer conhecimentos em desenvolvimento backend moderno, incluindo criação de APIs RESTful, arquitetura em camadas, validação de dados e integração com banco de dados NoSQL.

A aplicação utiliza TypeScript para tipagem estática, Prisma ORM para comunicação com o banco de dados e Zod para garantir maior segurança e confiabilidade na validação das informações recebidas pela API.
