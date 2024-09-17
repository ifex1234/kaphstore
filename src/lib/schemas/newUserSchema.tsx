"use client";

import { z } from "zod";

export const NewUserFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});
