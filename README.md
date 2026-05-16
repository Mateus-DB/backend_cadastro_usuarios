🚀 Cadastro de usuários
Backend RESTful Service 

🌐 API Online:
https://backend-cadastro-usuarios-1.onrender.com/users

📖 Sobre o Projeto

API RESTful desenvolvida para gerenciamento de usuários, utilizando uma arquitetura organizada e escalável com foco em boas práticas de desenvolvimento backend.

O projeto foi construído utilizando Node.js, Express e TypeScript, aplicando conceitos modernos como:

Arquitetura em camadas
Validação de dados
Integração com banco NoSQL
Organização escalável de código
Utilização de ORM
Estrutura preparada para crescimento da aplicação
✨ Funcionalidades
✅ Gerenciamento de Usuários
Cadastro de usuários
Listagem de usuários cadastrados
Remoção de usuários por ID
✅ Validação de Dados

Validação das informações recebidas na rota de criação de usuários utilizando:

Zod
Regras aplicadas:
Nome obrigatório
Email válido
Idade obrigatória e numérica
✅ Banco de Dados

Integração com:

MongoDB

Utilizando:

Prisma
🛠️ Tecnologias Utilizadas
Backend
Node.js
Express
TypeScript
Banco de Dados & ORM
MongoDB
Prisma
Validação & Desenvolvimento
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
Estrutura em camadas
Integração com MongoDB
Prisma ORM
Validação com Zod
Rotas GET, POST e DELETE
API RESTful
Deploy da API
🚧 Próximos passos
Tratamento global de erros
Middleware de autenticação
Testes automatizados
Documentação com Swagger
Dockerização da aplicação
💡 Objetivo do Projeto

Este projeto foi desenvolvido com foco no aprimoramento de conhecimentos em desenvolvimento backend moderno, arquitetura de APIs RESTful e organização escalável de aplicações.

A aplicação demonstra conceitos importantes para ambientes profissionais, incluindo:

Separação de responsabilidades
Validação de dados
Tipagem estática com TypeScript
Integração entre serviços
Persistência de dados com MongoDB
Utilização de ORM para abstração do banco de dados
