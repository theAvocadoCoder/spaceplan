import { z } from "zod";

export const roomSchema = z.object({
  width: z.number().min(1).max(1000),
  depth: z.number().min(1).max(1000),
})