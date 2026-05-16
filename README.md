🚀 USER MANAGEMENT API
API RESTFUL PARA GERENCIAMENTO DE USUÁRIOS
🌐 API ONLINE

User Management API

📖 SOBRE O PROJETO

A User Management API é uma API RESTful desenvolvida para gerenciamento de usuários, construída com foco em boas práticas de desenvolvimento backend, arquitetura escalável e organização profissional de código.

O projeto foi desenvolvido utilizando Node.js, Express e TypeScript, aplicando conceitos modernos amplamente utilizados no mercado de tecnologia.

🎯 OBJETIVOS DO PROJETO
Desenvolver uma API RESTful escalável
Aplicar arquitetura em camadas
Trabalhar com integração de banco NoSQL
Utilizar ORM para abstração do banco de dados
Implementar validação de dados
Utilizar TypeScript para maior segurança e tipagem
Simular boas práticas utilizadas em aplicações profissionais
✨ FUNCIONALIDADES
👤 GERENCIAMENTO DE USUÁRIOS
✔️ Funcionalidades implementadas
Cadastro de usuários
Listagem de usuários cadastrados
Remoção de usuários por ID
✅ VALIDAÇÃO DE DADOS

A aplicação possui validação utilizando:

Zod
✔️ Regras de validação
Nome obrigatório
Email válido
Idade obrigatória
Validação de tipo numérico
🗄️ BANCO DE DADOS
Banco utilizado
MongoDB
ORM utilizado
Prisma
🛠️ TECNOLOGIAS UTILIZADAS
⚙️ BACKEND
Node.js
Express
TypeScript
🗄️ BANCO DE DADOS & ORM
MongoDB
Prisma
🧩 VALIDAÇÃO & DESENVOLVIMENTO
Zod
Nodemon
📡 ENDPOINTS DA API
➕ CRIAR USUÁRIO
🔗 Endpoint
POST /users
📥 Body da Requisição
{
  "name": "Mateus",
  "email": "mateus@email.com",
  "age": 25
}
📄 LISTAR USUÁRIOS
🔗 Endpoint
GET /users
📤 Exemplo de Resposta
[
  {
    "id": "abc123",
    "name": "Mateus",
    "email": "mateus@email.com",
    "age": 25
  }
]
❌ DELETAR USUÁRIO
🔗 Endpoint
DELETE /users/:id
📥 Exemplo
DELETE /users/abc123
📤 Resposta de Sucesso
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
Arquitetura em camadas
API RESTful
Integração com MongoDB
Prisma ORM
Validação de dados com Zod
Rotas GET, POST e DELETE
Tipagem estática com TypeScript
Deploy da API
🚧 PRÓXIMAS MELHORIAS
Tratamento global de erros
Middleware de autenticação
Testes automatizados
Documentação com Swagger
Dockerização da aplicação
Rotas de atualização de usuários
💡 CONCEITOS DEMONSTRADOS NO PROJETO
Separação de responsabilidades
Organização escalável de pastas
Estrutura modular
Desenvolvimento tipado com TypeScript
Abstração do banco de dados com ORM
Integração com banco NoSQL
Validação de dados
Estrutura preparada para escalabilidade
Boas práticas de desenvolvimento backend
