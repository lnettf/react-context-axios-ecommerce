import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { HeaderContainer } from "./Header.style";

export function Header() {
  // Extraer la lista de productos del contexto CartContext
  const { products } = useContext(CartContext);

  console.warn({ products });

  return (
    <HeaderContainer>
      <h1>Header</h1>
      {/* Mostrar la cantidad de productos en el carrito */}
      <h6>Carrito: {products.length}</h6>
    </HeaderContainer>
  );
}