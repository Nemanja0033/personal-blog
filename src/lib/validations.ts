import { z } from 'zod'

export const PostSchema = z.object({
    blogID: z.string(),
    imgUrl: z.string(),
    date: z.string(),
    title: z.string(),
    desc: z.string(),
    tag: z.string(),
    feautured: z.boolean() || z.undefined()
});

export type PostType = z.infer<typeof PostSchema>;