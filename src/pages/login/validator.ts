import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Deve ser um e-mail válido"),
    password: z.string().min(8, "Deve ter no mínimo 8 caracteres"),
})

export type LoginData = z.infer<typeof loginSchema>;