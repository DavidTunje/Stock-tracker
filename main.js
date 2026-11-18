import { fetchProducts } from "./api.js";
import { getLowStock, totalStockValue } from "./report.js";

const products = await fetchProducts();
console.log(products.length);
console.log(getLowStock(products, 10).length);

console.log(totalStockValue(products));




