import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "@prisma/client"
import { userSchema } from "./validators/userValidator.js";

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/users", async (req, res) => {


    const users = await prisma.user.findMany();

    res.json(users);

})

app.post("/users", async (req, res) => {

    const validation = userSchema.safeParse(req.body);

    if (!validation.success) {
        return res.status(400).json(validation.error.issues);
    }

    const { name, email, age } = validation.data;

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            age
        }
    })

    res.json(newUser);
})

const PORT = Number(process.env.PORT) || 3000;


app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
})

