import { fetchProducts } from "./api.js";
import { getLowStock, totalStockValue, runReport } from "./report.js";

const products = await fetchProducts();
console.log("All products are: ", products.length);
console.log("Low stock below 10: ", getLowStock(products, 10).length);

console.log("Total stock value is: ", totalStockValue(products));
runReport();




