import { z } from "zod";

export const contactSchema = z.object({
   type: z.string().default("contact"),
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name too long"),
  phone: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message too long")
});

export type ContactFormData = z.infer<typeof contactSchema>;
