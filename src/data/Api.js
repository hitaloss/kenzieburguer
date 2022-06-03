import axios from "axios";

export const data = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
  timeout: 50000,
});
