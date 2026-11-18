import { fetchProducts } from "./api.js";

const products = await fetchProducts();
console.log(products.length);

