import axios from "axios";
import { number, z } from "zod";

enum Category {
  mobile_tablet,
  appliances,
  computers,
  groceries,
  electronics,
  fashion,
  beauty_health,
  home_office,
}
type ProductProp = {
  id: number;
  price: number;
  cartID: number;
  currentPrice: number;
  previousPrice: number;
  category: Category;
  imageUrl: string;
  productUrl: string;
  title: string;
  quantity: number;
}[];
const getCartScema = z.object({
  productName: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  quantity: z.number(),
});
type orderSchema = {
  productName: string;
  imageUrl: string;
  price: number;
  quantity: number;
  id: number;
  createdAt: Date;
  orderId: number;
  userID: number;
  sum: number;
};

const getUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  phoneNo: z.string(),
  email: z.string(),
});
type FectchUser = z.infer<typeof getUserSchema>;
export const fetchUser = async (userId: string): Promise<FectchUser> => {
  const option = {
    method: "GET",
    url: `http://127.0.0.1:3001/api/users/${userId}`,
  };
  console.log("Fetching user...");
  const requestData = await axios.request(option).then((r) => r.data);
  console.log(requestData);
  return requestData;
};

export const fetchProducts = async (category: string) => {
  const option = {
    method: "GET",
    url: `http://127.0.0.1:3001/api/products/all-products/${category}`,
  };
  console.log("Fetching items...");
  const requestData = await axios.request(option).then((r) => r.data);
  console.log(requestData);
  return requestData;
};

export const fetchProduct = async (id: string) => {
  const option = {
    method: "GET",
    url: `http://127.0.0.1:3001/api/products/${id}`,
  };
  const data = axios.request(option).then((r) => r.data);
  const header = axios.request(option).then((r) => r.headers);
  const status = axios.request(option).then((r) => r.status);
  console.log(data, header, status);
  return data;
};

type OrderProp = {
  id: number;
  createdAt: Date;
  userId: string;
  orderId: number;
  sum: number;
}[];

export const fetchOrderByUser = async (userId: string): Promise<OrderProp> => {
  const option = {
    method: "GET",
    url: `http://127.0.0.1:3001/api/orders/all-orders/${userId}`,
  };
  const data = await axios.request(option).then((r) => r.data);
  return data;
};
export const fetchOrderByOrderId = async (
  orderId: number
): Promise<orderSchema> => {
  const option = {
    method: "GET",
    url: `http://127.0.0.1:3001/api/orders/all-orders/${orderId}`,
  };
  const data = await axios.request(option).then((r) => r.data);
  console.log(data);
  return data;
};
