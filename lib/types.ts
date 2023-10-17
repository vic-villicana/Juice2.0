import { z } from 'zod'

export const clientSchema = z
    .object({
        name:z.string(),
        email:z.string().email(),
        phone:z.string().min(12).optional(),
        message:z.string()
    })

export type TclientSchema = z.infer<typeof clientSchema>