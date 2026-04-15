# 📌 User Registration API

API REST para gerenciamento de usuários, desenvolvida com Node.js e Express.

Este projeto foi criado com foco no aprimoramento de conceitos de backend, incluindo organização em camadas, uso de ORM e integração com banco de dados NoSQL.

---

## 🚀 Funcionalidades

* Criar usuários com:

  * Nome
  * Email
  * Idade
* Listar todos os usuários cadastrados

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* Prisma ORM
* MongoDB
* Nodemon

---

## 📡 Rotas da API

### ➕ Criar usuário

**POST** `/users`

**Body:**

```json
{
  "name": "Mateus",
  "email": "mateus@email.com",
  "age": 25
}
```

---

### 📄 Listar usuários

**GET** `/users`

**Resposta:**

```json
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

## ▶️ Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar o servidor
npm run dev
```

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
DATABASE_URL="sua_string_do_mongodb"
PORT=3000
```

---

## 📁 Estrutura do projeto

```
src/
├── controllers/
├── services/
├── routes/
├── config/
├── app.js
└── server.js
```

---

## 📈 Próximos passos

* [ ] Implementar validação de dados
* [ ] Desenvolver frontend da aplicação
* [ ] Realizar deploy da API

---

## 💡 Sobre o projeto

Este projeto faz parte do meu aprendizado em desenvolvimento backend, com foco na construção de APIs bem estruturadas e escaláveis.
