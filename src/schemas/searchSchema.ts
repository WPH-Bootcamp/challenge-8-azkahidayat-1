import { z } from 'zod';
export const searchSchema = z.object({
  keyword: z.string().trim().min(1),
});

export type SearchSchema = z.infer<typeof searchSchema>;
