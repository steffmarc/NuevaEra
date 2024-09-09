const living = [
    {id: "S001", 
    nombre: "SILLÓN SEAWEST", 
    precio: 450000, 
    img:"../Img/seawest.jpg"},

    {id: "MR001", 
    nombre: "MESA RATONA SEA", 
    precio: 700000, 
    img:"../Img/mesa-de-centro-palm-springs-4.jpg"},

    {id: "MLCD001", 
    nombre: "MESA LCD SEA", 
    precio: 950000, 
    img:"../Img/mueble-new-lcd-con-2-cajones-3.jpg"},
]

export const getLiving = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const formattedLiving = living.map(item => ({
                ...item,
                precio: item.precio.toLocaleString('es-AR')
            }));
            resolve(formattedLiving);
        }, 2000);
    });
}

export const getProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = living.find(item => item.id === id);
            if (product) {
                product.precio = product.precio.toLocaleString('es-AR');
            }
            resolve(product);
        }, 2000);
    });
}