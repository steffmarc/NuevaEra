const living = [
    {id: "S-001", nombre: "Sillón Seawest", precio: 450000, img:"../public/Img/seawest.jpg"},
    {id: "MR-001", nombre: "Mesa ratona", precio: 700000, img:"../public/Img/mesa-de-centro-palm-springs-4.jpg"},
    {id: "MLCD-001", nombre: "Mesa LCD", precio: 950000, img:"../public/Img/mueble-new-lcd-con-2-cajones-3.jpg"},
]

export const getLiving = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(living)
        }, 2000);
    })
}