import { createContext, useState } from "react";

// Crear un nuevo contexto para el carrito
export const CartContext = createContext();

// Definir el proveedor de contexto para el carrito
export const CartProvider = ({ children }) => {
  // Definir el estado para almacenar la lista de productos en el carrito
  const [products, setProducts] = useState([]);

  // Función para manejar la adición de un producto al carrito
  const handleAddProduct = (name) => {
    // Mostrar un mensaje en la consola indicando el producto que se está añadiendo
    console.log("Añadiendo producto", name);
    // Agregar el nombre del producto al estado de productos utilizando el spread operator
    setProducts([...products, name]);
  };

  // Valor del contexto del carrito que contiene la función handleAddProduct y la lista de productos
  const cartContextValue = {
    handleAddProduct,
    products,
  };

  // Devolver el proveedor del contexto del carrito con el valor del contexto establecido
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
