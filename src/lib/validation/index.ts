import * as z from "zod";

export const EventFormSchema = z.object({
  title: z.string().min(3, "Event Title must be at least 3 chars"),
  description: z
    .string()
    .min(3, "Description is too short")
    .max(400, "Description must be less than 400 characters"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endtDateTime: z.date(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
  categoryId : z.string(),
});
