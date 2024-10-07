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
  const requestData = await axios.request(option).then((r) => r.data);
  return requestData;
};
type Categories = z.infer<typeof Category>;
export const fetchProducts = async (category: Categories) => {
  const option = {
    method: "GET",
    url: `https://kaphstore-server.onrender.com/api/products/all-products/${category}`,
  };
  const requestData = await axios.request(option).then((r) => r.data);
  console.log(requestData);
  return requestData;
};
export const fetchProduct = async (id: string) => {
  const option = {
    method: "GET",
    url: `https://kaphstore-server.onrender.com/api/products/${id}`,
  };
  const data = axios.request(option).then((r) => r.data);
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
