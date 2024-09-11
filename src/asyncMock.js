const products = [
    {id: "S001",
    nombre: "SILLÓN SEAWEST",
    precio: 450000,
    img: "../Img/seawest.jpg",
    idCat: "living",
    descripcion: "Sillón realizado artesanalmente con sistema de resortes y placa soft de alta densidad en su interior.",
    medidas: "2.00×0.90×0.90m  //  3.00×0.90×0.90m",
    tapizados: "A elección del cliente. Cuero vacuno / Simil cuero / Chenille / Pana / Géneros 100% algodón / Cuero curtido al vegetal",
    terminaciones: "Lustre natural o patinado. Tachas a elección"},

    {id: "MR001", 
    nombre: "MESA RATONA SEA", 
    precio: 700000, 
    img:"../Img/mesa-de-centro-palm-springs-4.jpg",
    idCat: "living",
    descripcion: "Elegante y funcional, esta mesa destaca por su diseño moderno y su acabado de alta calidad.",
    medidas: "1.40×0.70×0.41m.  (Con Tapa 50mm)",
    material: "Madera maciza de Abedul.",
    terminaciones: "Clean finish, base negra."},

    {id: "MLCD001", 
    nombre: "MESA LCD SEA", 
    precio: 950000, 
    img:"../Img/mueble-new-lcd-con-2-cajones-3.jpg",
    idCat: "living",
    descripcion: "Nuestro modelo estándar está fabricado con dos cajones y un estante hueco.",
    medidas: "1.73 x 0.42 x 0.56m",
    color: "Laqueado color blanco, wengue tapa laqueada o madera maciza de Acacia o Prosopis (familia del algarrobo)."},

    {id: "SNCA001", 
    nombre: "SILLA NET CON APOYABRAZOS", 
    precio: 250000, 
    img:"../Img/silla-net-con-apoyabrazos-prosopis-2.jpg",
    idCat: "comedor",
    medidas: "2.40×1.60×0.85m. y  2.80×2.00×0.85m.",
    material: "Madera de Prosopis (familia del Algarrobo). Tambien en madera maciza de Abedul y Acacia canadiense. Asiento compuesto por  placa de poliuretano flexible moldeado.",
    tapizados: "A elección del cliente. Chenille / Símil cuero / Cuero vacuno / Cuero de búfalo / Cuero curtido al vegetal.",
    terminaciones: "Lustre natural, clean finish o laqueada."},

    {id: "MMP001", 
    nombre: "MESA MICHIGAN EN PROSOPIS", 
    precio: 1500000, 
    img:"../Img/MESA-MICHIGAN-SILLA-NET-min.jpg",
    idCat: "comedor",
    descripcion: "Versátil y resistente, esta mesa se adapta a diferentes espacios, opciones de acabado en maderas de alta calidad.",
    medidas: "1,20×0,78m. / 1.40×0.78m.",
    material: "Madera maciza de Prosopis (familia del algarrobo).  También en madera maciza de Abedul, Lapacho o laqueada.",
    Terminaciones: "Cera siliconada.  Opcional pátina o lacas."},

    {id: "CB001", 
    nombre: "CRISTALERA BERLIN", 
    precio: 850000, 
    img:"../Img/CRISTALERA-BERLIN-3.jpg",
    idCat: "comedor",
    descripcion: "Cristalera  3 puertas con 5 hileras de estantes.",
    medidas: "1.60×1.80",
    material: "Madera maciza de Abedul."},

    {id: "CD001", 
    nombre: "CÓMODA DISTRESS", 
    precio: 750000, 
    img:"../Img/comoda-distress-1_XdCH7gbO.jpg",
    idCat: "dormitorio",
    descripcion: "LÍNEA RESTORATION DISTRESS.",
    medidas: "1.66×0.82×0.48m",
    color: "Café o Tiza.",
    terminaciones: "Pátina."},

    {id: "MND001", 
    nombre: "MESA DE NOCHE DISTRESS", 
    precio: 750000, 
    img:"../Img/mesa-de-noche-distress-1-1_JIdDoCBI.jpg",
    idCat: "dormitorio",
    descripcion: "LÍNEA RESTORATION DISTRESS.",
    medidas: "0.61X0.72X0.47",
    color: "Café o Tiza.",
    terminaciones: "Pátina."},

    {id: "RCD001", 
    nombre: "RESPALDO DE CAMA DISTRESS", 
    precio: 750000, 
    img:"../Img/CABEZAL-DISTRESS-ALMOHADON-1-1.jpg",
    idCat: "dormitorio",
    descripcion: "LÍNEA RESTORATION DISTRESS.",
    medidas: "Colchón de 1,40 (1.57×1.50m) // Colchón de 1.60 (1.77×1.50m) // Colchón de 1.80 (1.97×1.50m) // Colchón de 2.00 (2.17×1.50m)",
    color: "Café o Tiza.",
    terminaciones: "Pátina."},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const formattedLiving = products.map(item => ({
                ...item,
                precio: item.precio.toLocaleString('es-AR')
            }));
            resolve(formattedLiving);
        }, 100);
    });
}

export const getProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(item => item.id === id);
            if (product) {
                product.precio = product.precio.toLocaleString('es-AR');
            }
            resolve(product);
        }, 100);
    });
}

export const getProductByCat = (id) =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            const product = products.filter(item => item.idCat === id) 
            resolve(product)
        }, 100)
    } )
}