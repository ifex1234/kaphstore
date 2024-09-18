import axios from "axios";

export const fetchProducts = async () => {
  const option = {
    method: "GET",
    url: "http://127.0.0.1:3001/api/products",
  };
  console.log("Fetching items...");
  const requestData = axios.request(option).then((r) => r.data);
  return requestData;
};
export const fetchProduct = async () => {};

export const postProduct = async () => {
  const option = {
    method: "POST",
    url: "http://127.0.0.1:3001/api/products",
  };
  console.log("Posting items...");
  const postData = axios
    .post("http://127.0.0.1:3001/api/products", {
      firstName: "Fred",
      lastName: "Flintstone",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
