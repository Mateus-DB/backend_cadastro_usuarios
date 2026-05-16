🚀 User Management API
API RESTful para Gerenciamento de Usuários
🌐 API Online

User Management API

📖 Sobre o Projeto

A User Management API é uma API RESTful desenvolvida para gerenciamento de usuários, construída com foco em boas práticas de desenvolvimento backend, organização escalável de código e arquitetura moderna de aplicações.

O projeto foi desenvolvido utilizando Node.js, Express e TypeScript, aplicando conceitos amplamente utilizados em ambientes profissionais, como separação de responsabilidades, validação de dados, integração com banco NoSQL e utilização de ORM.

🎯 Objetivos do Projeto

Desenvolver uma API RESTful escalável
Aplicar arquitetura em camadas
Trabalhar com integração de banco NoSQL
Utilizar ORM para abstração do banco de dados
Implementar validação de dados
Utilizar TypeScript para maior segurança e tipagem
Simular boas práticas utilizadas no mercado


✨ Funcionalidades
👤 Gerenciamento de Usuários

✔️ Cadastro de usuários

✔️ Listagem de usuários cadastrados

✔️ Remoção de usuários por ID

✅ Validação de Dados

A aplicação possui validação de dados utilizando:

Zod
Regras de validação implementadas

✔️ Nome obrigatório

✔️ Email válido

✔️ Idade obrigatória

✔️ Validação de tipo numérico

🗄️ Banco de Dados

Integração com:

MongoDB

Utilizando:

Prisma
🛠️ Tecnologias Utilizadas
⚙️ Backend
Node.js
Express
TypeScript
🗄️ Banco de Dados & ORM
MongoDB
Prisma
🧩 Validação & Ferramentas de Desenvolvimento
Zod
Nodemon
📡 Endpoints da API
➕ Criar Usuário
Endpoint
POST /users
Body da Requisição
{
  "name": "Mateus",
  "email": "mateus@email.com",
  "age": 25
}
📄 Listar Usuários
Endpoint
GET /users
Exemplo de Resposta
[
  {
    "id": "abc123",
    "name": "Mateus",
    "email": "mateus@email.com",
    "age": 25
  }
]
❌ Deletar Usuário
Endpoint
DELETE /users/:id
Exemplo
DELETE /users/abc123
Resposta de Sucesso
{
  "message": "Usuário deletado com sucesso"
}
📁 Estrutura do Projeto
src/
├── controllers/
├── services/
├── routes/
├── schemas/
├── config/
├── app.ts
└── server.ts
▶️ Como Executar o Projeto
1️⃣ Instalar dependências
npm install
2️⃣ Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="sua_string_do_mongodb"
PORT=3000
3️⃣ Executar o servidor
npm run dev
📈 Evolução do Projeto
✅ Funcionalidades implementadas

✔️ Arquitetura em camadas

✔️ API RESTful

✔️ Integração com MongoDB

✔️ Prisma ORM

✔️ Validação de dados com Zod

✔️ Rotas GET, POST e DELETE

✔️ Tipagem estática com TypeScript

✔️ Deploy da API

🚧 Próximas melhorias
Tratamento global de erros
Middleware de autenticação
Testes automatizados
Documentação com Swagger
Dockerização da aplicação
Rotas de atualização de usuários
💡 Conceitos Demonstrados no Projeto

✔️ Separação de responsabilidades

✔️ Organização escalável de pastas

✔️ Estrutura modular

✔️ Desenvolvimento tipado com TypeScript

✔️ Abstração do banco de dados com ORM

✔️ Integração com banco NoSQL

✔️ Validação de dados

✔️ Estrutura preparada para escalabilidade

✔️ Boas práticas de desenvolvimento backend
