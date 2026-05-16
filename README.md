🚀 USER MANAGEMENT API
API RESTFUL PARA GERENCIAMENTO DE USUÁRIOS
🌐 API ONLINE

User Management API

📖 SOBRE O PROJETO

A User Management API é uma API RESTful desenvolvida para gerenciamento de usuários, construída com foco em boas práticas de desenvolvimento backend, organização escalável de código e arquitetura moderna de aplicações.

O projeto foi desenvolvido utilizando Node.js, Express e TypeScript, aplicando conceitos amplamente utilizados em ambientes profissionais, como separação de responsabilidades, validação de dados, integração com banco NoSQL e utilização de ORM.

🎯 OBJETIVOS DO PROJETO
Desenvolver uma API RESTful escalável
Aplicar arquitetura em camadas
Trabalhar com integração de banco NoSQL
Utilizar ORM para abstração do banco de dados
Implementar validação de dados
Utilizar TypeScript para maior segurança e tipagem
Simular boas práticas utilizadas no mercado
✨ FUNCIONALIDADES
👤 GERENCIAMENTO DE USUÁRIOS
FUNCIONALIDADES IMPLEMENTADAS

✔️ Cadastro de usuários

✔️ Listagem de usuários cadastrados

✔️ Remoção de usuários por ID

✅ VALIDAÇÃO DE DADOS

A aplicação possui validação de dados utilizando:

Zod
REGRAS DE VALIDAÇÃO IMPLEMENTADAS

✔️ Nome obrigatório

✔️ Email válido

✔️ Idade obrigatória

✔️ Validação de tipo numérico

🗄️ BANCO DE DADOS

Integração com:

MongoDB

Utilizando:

Prisma
🛠️ TECNOLOGIAS UTILIZADAS
⚙️ BACKEND
Node.js
Express
TypeScript
🗄️ BANCO DE DADOS & ORM
MongoDB
Prisma
🧩 VALIDAÇÃO & FERRAMENTAS DE DESENVOLVIMENTO
Zod
Nodemon
📡 ENDPOINTS DA API
➕ CRIAR USUÁRIO
ENDPOINT
POST /users
BODY DA REQUISIÇÃO
{
  "name": "Mateus",
  "email": "mateus@email.com",
  "age": 25
}
📄 LISTAR USUÁRIOS
ENDPOINT
GET /users
EXEMPLO DE RESPOSTA
[
  {
    "id": "abc123",
    "name": "Mateus",
    "email": "mateus@email.com",
    "age": 25
  }
]
❌ DELETAR USUÁRIO
ENDPOINT
DELETE /users/:id
EXEMPLO
DELETE /users/abc123
RESPOSTA DE SUCESSO
{
  "message": "Usuário deletado com sucesso"
}
📁 ESTRUTURA DO PROJETO
src/
├── controllers/
├── services/
├── routes/
├── schemas/
├── config/
├── app.ts
└── server.ts
▶️ COMO EXECUTAR O PROJETO
1️⃣ INSTALAR DEPENDÊNCIAS
npm install
2️⃣ CONFIGURAR VARIÁVEIS DE AMBIENTE

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="sua_string_do_mongodb"
PORT=3000
3️⃣ EXECUTAR O SERVIDOR
npm run dev
📈 EVOLUÇÃO DO PROJETO
✅ FUNCIONALIDADES IMPLEMENTADAS

✔️ Arquitetura em camadas

✔️ API RESTful

✔️ Integração com MongoDB

✔️ Prisma ORM

✔️ Validação de dados com Zod

✔️ Rotas GET, POST e DELETE

✔️ Tipagem estática com TypeScript

✔️ Deploy da API

🚧 PRÓXIMAS MELHORIAS
Tratamento global de erros
Middleware de autenticação
Testes automatizados
Documentação com Swagger
Dockerização da aplicação
Rotas de atualização de usuários
💡 CONCEITOS DEMONSTRADOS NO PROJETO

✔️ Separação de responsabilidades

✔️ Organização escalável de pastas

✔️ Estrutura modular

✔️ Desenvolvimento tipado com TypeScript

✔️ Abstração do banco de dados com ORM

✔️ Integração com banco NoSQL

✔️ Validação de dados

✔️ Estrutura preparada para escalabilidade

✔️ Boas práticas de desenvolvimento backend
