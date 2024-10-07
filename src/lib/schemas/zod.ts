import { z } from "zod";

export const Category = z.enum([
  "mobile_tablet",
  "appliances",
  "computers",
  "groceries",
  "electronics",
  "fashion",
  "beauty_health",
  "home_office",
  "recommended",
  "flash_sales",
]);

export const getUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  phoneNo: z.string(),
  email: z.string().email({ message: "invalid email" }),
  userId: z.string().optional(),
});

export const productSchema = z.object({
  id: z.number().optional(),
  imageUrl: z.string().url().optional(),
  title: z.string().optional(),
  productUrl: z.string().optional(),
  previousPrice: z.number().gt(0).optional(),
  currentPrice: z.number().gt(0).optional(),
  category: Category.optional(),
  quantity: z.number(),
});
export const ProductSchema = z.array(productSchema);

const sectionBorderlessSchema = productSchema.omit({
  previousPrice: true,
  quantity: true,
});

export const SectionBorderlessSchema = z.array(sectionBorderlessSchema);

const OrderProp = z.object({
  id: z.number(),
  createdAt: z.date(),
  userId: z.string(),
  orderId: z.number(),
  sum: z.number(),
});
export const OrderPropArray = z.array(OrderProp);

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  phoneNo: z.string(),
  email: z.string().email(),
  userId: z.string().optional(),
  password: z.string().optional(),
});

export let NewUserFormSchema = UserSchema.omit({
  userId: true,
});
