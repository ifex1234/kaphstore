import axios from "axios";
import { z } from "zod";
import {
  getUserSchema,
  OrderPropArray,
  Category,
  productSchema,
} from "./schemas/zod";

type FectchUser = z.infer<typeof getUserSchema>;
export const fetchUser = async (userId: string): Promise<FectchUser> => {
  const option = {
    method: "GET",
    url: `https://kaphstore-server.onrender.com/api/users/${userId}`,
  };
  console.log("Fetching user...");
  const requestData = await axios.request(option).then((r) => r.data);
  console.log(requestData);
  return requestData;
};
type Categories = z.infer<typeof Category>;
export const fetchProducts = async (category: Categories) => {
  const option = {
    method: "GET",
    url: `https://kaphstore-server.onrender.com/api/products/all-products/${category}`,
  };
  console.log("Fetching items...");
  const requestData = await axios.request(option).then((r) => r.data);
  console.log(requestData);
  return requestData;
};
type ProductProp2 = z.infer<typeof productSchema>;
export const fetchProduct = async (id: string): Promise<ProductProp2> => {
  const option = {
    method: "GET",
    url: `https://kaphstore-server.onrender.com/api/products/${id}`,
  };
  const data = axios.request(option).then((r) => r.data);
  const header = axios.request(option).then((r) => r.headers);
  const status = axios.request(option).then((r) => r.status);
  console.log(data, header, status);
  return data;
};

type OrderProp = z.infer<typeof OrderPropArray>;

export const fetchOrderByUser = async (userId: string): Promise<OrderProp> => {
  const option = {
    method: "GET",
    url: `https://kaphstore-server.onrender.com/api/orders/all-orders/${userId}`,
  };
  const data = await axios.request(option).then((r) => r.data);
  return data;
};
