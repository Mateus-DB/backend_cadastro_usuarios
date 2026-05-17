# 🚀 Cadastro de usuários

## API RESTFUL PARA GERENCIAMENTO DE USUÁRIOS

---

# 🌐 API ONLINE

https://backend-cadastro-usuarios-1.onrender.com/users

---

# 📖 SOBRE O PROJETO

A **User Management API** é uma API RESTful desenvolvida para gerenciamento de usuários.

O projeto foi construído com foco em:

* Arquitetura escalável
* Organização profissional de código
* Boas práticas de desenvolvimento backend
* Estrutura modular
* Integração com banco MongoDB
* Validação de dados

---

# 🎯 OBJETIVOS DO PROJETO

* Desenvolver uma API RESTful moderna

* Aplicar arquitetura em camadas

* Trabalhar com integração de banco de dados NoSQL

* Utilizar ORM para abstração do banco de dados

* Implementar validação de dados

* Simular práticas utilizadas em aplicações profissionais

---

# ✨ FUNCIONALIDADES

---

## 👤 GERENCIAMENTO DE USUÁRIOS

### Funcionalidades implementadas

✔️ Cadastro de usuários

✔️ Listagem de usuários cadastrados

✔️ Remoção de usuários por ID

---

## ✅ VALIDAÇÃO DE DADOS

Validação implementada utilizando:

* Zod

### Regras aplicadas

✔️ Nome obrigatório

✔️ Email válido

✔️ Idade obrigatória

✔️ Validação de tipo numérico

---

## 🗄️ BANCO DE DADOS

### Banco utilizado

* MongoDB

### ORM utilizado

* Prisma

---

# 🛠️ TECNOLOGIAS UTILIZADAS

---

## ⚙️ BACKEND

* Node.js

* Express

* Javascript

---

## 🗄️ BANCO DE DADOS & ORM

* MongoDB

* Prisma

---

## 🧩 VALIDAÇÃO & DESENVOLVIMENTO

* Zod

* Nodemon

---

# 📡 ENDPOINTS DA API

---

# ➕ CRIAR USUÁRIO

## 🔗 ENDPOINT

```http id="d7v4m1"
POST /users
```

---

## 📥 BODY DA REQUISIÇÃO

```json id="m2x9r6"
{
  "name": "Mateus",
  "email": "mateus@email.com",
  "age": 25
}
```

---

# 📄 LISTAR USUÁRIOS

## 🔗 ENDPOINT

```http id="k5q8w3"
GET /users
```

---

## 📤 EXEMPLO DE RESPOSTA

```json id="p1v7t4"
[
  {
    "id": "abc123",
    "name": "Mateus",
    "email": "mateus@email.com",
    "age": 25
  }
]
```

---

# ❌ DELETAR USUÁRIO

## 🔗 ENDPOINT

```http id="x6m2q9"
DELETE /users/:id
```

---

## 📥 EXEMPLO

```bash id="f3r8w1"
DELETE /users/abc123
```

---

## 📤 RESPOSTA DE SUCESSO

```json id="u7n4k5"
{
  "message": "Usuário deletado com sucesso"
}
```

---

# 📁 ESTRUTURA DO PROJETO

```bash id="z2v6m8"
src/
│
├── controllers/
│
├── services/
│
├── routes/
│
├── schemas/
│
├── config/
│
├── app.ts
│
└── server.ts
```

---

# ▶️ COMO EXECUTAR O PROJETO

---

# 1️⃣ INSTALAR DEPENDÊNCIAS

```bash id="r9w1x4"
npm install
```

---

# 2️⃣ CONFIGURAR VARIÁVEIS DE AMBIENTE

Crie um arquivo `.env` na raiz do projeto:

```env id="c5m8q2"
DATABASE_URL="sua_string_do_mongodb"
PORT=3000
```

---

# 3️⃣ EXECUTAR O SERVIDOR

```bash id="v4k7t1"
npm run dev
```

---

# 📈 EVOLUÇÃO DO PROJETO

---

## ✅ FUNCIONALIDADES IMPLEMENTADAS

✔️ Arquitetura em camadas

✔️ API RESTful

✔️ Integração com MongoDB

✔️ Prisma ORM

✔️ Validação com Zod

✔️ Rotas GET, POST e DELETE

✔️ Tipagem estática com TypeScript

✔️ Deploy da API

---

## 🚧 PRÓXIMAS MELHORIAS

* Tratamento global de erros

* Middleware de autenticação

* Testes automatizados

* Documentação com Swagger

* Dockerização da aplicação

* Rotas de atualização de usuários

---

# 💡 CONCEITOS DEMONSTRADOS NO PROJETO

✔️ Separação de responsabilidades

✔️ Organização escalável de pastas

✔️ Estrutura modular

✔️ Abstração do banco de dados com ORM

✔️ Integração com banco NoSQL

✔️ Validação de dados

✔️ Estrutura preparada para escalabilidade

✔️ Boas práticas de desenvolvimento backend
