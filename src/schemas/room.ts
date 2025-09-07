import { z } from "zod";

/** 
 * Error messsages are in the format: 
 * <intl string>/<value,names>/<interpolated,values>
 * A utility function handles converting them into something
 * a translator can parse.
 */

export const createRoomSchema = z.object({
  width: z.number()
    .min(1, { message: "Validation.width.min/min/1" })
    .max(30, { message: "Validation.width.max/max/30" }),
  depth: z.number()
    .min(1, { message: "Validation.depth.min/min/1" })
    .max(30, { message: "Validation.depth.max/max/30" }),
  name: z.string().optional(),
  description: z.string().optional(),
})

export type RoomSchema = z.infer<typeof createRoomSchema>;