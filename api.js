export async function fetchProducts() {
    try{
        const response = await fetch("https://dummyjson.com/products");

        if(!response.ok){
            throw new Error(`Http error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.products;

    }catch(error){
        console.log("Failed to fetch products:", error.message);
    }
}
