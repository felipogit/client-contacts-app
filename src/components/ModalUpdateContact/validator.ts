import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(3, "Deve ter no mínimo 3 caracteres"),
    email: z.string().email("Deve ser um e-mail válido"),
    phone: z.string().min(10, "Deve ter no mínimo 10 caracteres"),
})

export type ContactData = z.infer<typeof contactSchema>;