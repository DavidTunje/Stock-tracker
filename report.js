import { fetchProducts } from "./api.js"

export const getLowStock = (products, limit) => 
    products.filter(item => item.stock < limit);

export const totalStockValue = (products) => 
    products.reduce((total,item ) => total + (item.stock * item.price), 0);

export async function runReport (){
        const data = await fetchProducts();
        const lowStock = getLowStock(data, 10);
        const lowStockNames = lowStock.map(data => data.title);
        console.log("Low stock:", lowStockNames);
        console.log("Total stock value:", totalStockValue(data));

}