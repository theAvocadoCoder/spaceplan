import { z } from "zod";

export const furnitureSchema = z.object({
  id: z.number(),
  name: z.string(),
  width: z.number(),
  depth: z.number(),
  height: z.number(),
})