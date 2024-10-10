import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosQuery = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

    getDocs(productosQuery)
      .then((res) => {
        const newProduct = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(newProduct);
      })
      .catch((error) => {
        toast.error("Error al obtener los productos: " + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);

  return (
    <>
      <h2>Estilo y confort para tu casa</h2>
      <p className="subtitle">
        Descubrí nuestra selección de muebles diseñados para hacer de tu casa un
        espacio acogedor y elegante. Combina estilo y funcionalidad para crear
        un ambiente que refleje tu personalidad y se adapte a tus momentos de
        descanso y convivencia.
      </p>
      <ToastContainer />
      {loading ? (
        <p
          style={{ textAlign: "center", marginTop: "50px", fontWeight: "bold" }}
        >
          Cargando productos...
        </p>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};

export default ItemListContainer;
