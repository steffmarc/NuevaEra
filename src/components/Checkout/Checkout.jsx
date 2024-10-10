import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";

const Modal = ({ isVisible, ordenId, items }) => {
  if (!isVisible) return null;

  return (
    <div>
      <div>
        <h2 style={{ color: "#D5A6A4" }}>Gracias por tu compra!</h2>
        <p style={{ color: "grey", fontSize: "14px" }}>Detalle de tu compra:</p>
        <ul>
          {items.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} x {producto.cantidad}
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: "bold" }}>Número de orden: {ordenId}</p>
        <button onClick={() => (window.location.href = "/")}>
          Volver a la Home
        </button>
      </div>
    </div>
  );
};

const LoadingModal = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div>
      <div>
        <h2>Procesando tu compra...</h2>
        <p>Por favor, espera un momento.</p>
      </div>
    </div>
  );
};

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const { carrito, vaciarCarrito, total } = useContext(CartContext);

  const formatNumber = (number) => {
    return `$${number.toLocaleString("es-AR")}`;
  };

  const manejadorFormulario = async (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los correos no coinciden.");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
        subtotal: formatNumber(producto.item.precio * producto.cantidad),
      })),
      total: formatNumber(total),
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    try {
      setIsLoading(true);
      setIsFormVisible(false);

      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const productoRef = doc(db, "productos", productoOrden.id);
          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;

          if (stockActual >= productoOrden.cantidad) {
            await updateDoc(productoRef, {
              stock: stockActual - productoOrden.cantidad,
            });
          } else {
            throw new Error(
              `No hay suficiente stock para ${productoOrden.nombre}`
            );
          }
        })
      );

      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      vaciarCarrito();
      setNombre("");
      setApellido("");
      setTelefono("");
      setEmail("");
      setEmailConfirmacion("");

      setIsLoading(false);
      setIsModalVisible(true);
    } catch (error) {
      setIsLoading(false);
      setError(error.message || "Se produjo un error. Intente nuevamente.");
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="CheckoutContainer">
      <h2>Checkout</h2>
      {isFormVisible && (
        <form onSubmit={manejadorFormulario}>
          {carrito.map((producto) => (
            <div key={producto.item.id} style={{ marginBottom: "15px" }}>
              <p>{producto.item.nombre}</p>
              <p style={{ textAlign: "center" }}>
                {formatNumber(producto.item.precio)} x {producto.cantidad}
              </p>
              <p style={{ textAlign: "end" }}>
                Subtotal:{" "}
                {formatNumber(producto.item.precio * producto.cantidad)}
              </p>
            </div>
          ))}

          <div>
            <label>Nombre</label>
            <input
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div>
            <label>Apellido</label>
            <input
              type="text"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            />
          </div>
          <div>
            <label>Teléfono</label>
            <input
              type="text"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Confirmar Email</label>
            <input
              type="email"
              onChange={(e) => setEmailConfirmacion(e.target.value)}
              value={emailConfirmacion}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Confirmar Compra</button>
        </form>
      )}
      {isLoading && <LoadingModal isVisible={isLoading} />}
      <Modal
        isVisible={isModalVisible}
        ordenId={ordenId}
        items={carrito}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Checkout;
