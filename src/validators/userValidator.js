import z from "zod";

export const userSchema = z.object({

    name: z.string().min(3, "O nome é obrigatório!"),
    email: z.string().min(3, "O email é obrigatório!"),
    age: z.coerce.number().min(1, "A idade deve ser um número positivo!")

})