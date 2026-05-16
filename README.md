🚀 User Management API
API RESTful Escalável para Gerenciamento de Usuários
🌐 API Online
https://backend-cadastro-usuarios-1.onrender.com/users

User Management API

📖 Sobre o Projeto

API RESTful desenvolvida para gerenciamento de usuários, com foco em arquitetura escalável, organização de código e boas práticas de desenvolvimento backend.

O projeto foi construído utilizando Node.js, Express e TypeScript, aplicando conceitos modernos amplamente utilizados em aplicações profissionais, como:

Arquitetura em camadas
Validação de dados
Organização escalável de código
Integração com banco de dados NoSQL
Utilização de ORM
Tipagem estática com TypeScript
Desenvolvimento de APIs RESTful
✨ Funcionalidades
👤 Gerenciamento de Usuários
Funcionalidades implementadas

✔️ Cadastro de usuários
✔️ Listagem de usuários cadastrados
✔️ Remoção de usuários por ID

✅ Validação de Dados

Camada de validação implementada utilizando:

Zod
Regras aplicadas
Nome obrigatório
Email válido
Idade obrigatória e numérica
🗄️ Integração com Banco de Dados

Aplicação integrada com:

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
🧩 Validação & Desenvolvimento
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
✔️ Validação com Zod
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
💡 Objetivo do Projeto

Este projeto foi desenvolvido com foco no aprimoramento de conhecimentos em desenvolvimento backend moderno, arquitetura de APIs RESTful e construção de aplicações escaláveis.

A aplicação demonstra conceitos amplamente utilizados em ambientes profissionais, incluindo:

Separação de responsabilidades
Organização escalável de pastas
Validação de dados
Desenvolvimento tipado com TypeScript
Abstração do banco de dados com ORM
Integração com banco NoSQL
Estrutura preparada para crescimento da aplicação
