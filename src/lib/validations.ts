import { z } from 'zod'

export const PostSchema = z.object({
    blogID: z.string(),
    imgUrl: z.string(),
    date: z.string(),
    title: z.string(),
    desc: z.string(),
    tag: z.string(),
    feautured: z.boolean()
});

export type PostType = z.infer<typeof PostSchema>;