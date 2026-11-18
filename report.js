export const getLowStock = (products, limit) => 
    products.filter(item => item.stock < limit);

export const totalStockValue = (products) => 
    products.reduce((total,item ) => total + (item.stock * item.price), 0);