import { z } from 'zod';

export const shortenUrlSchema = z.object({
  originalUrl: z.url(),
});

export type ShortenUrlInput = z.infer<typeof shortenUrlSchema>;
