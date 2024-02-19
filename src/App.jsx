import { useContext, useEffect, useState } from "react";

import { CartContext } from "./context/CartContext";
import axios from "axios";
import { Product } from "./components/product/Product";
import { AppContainer } from "./App.style";

function App() {
  const [productList, setProductList] = useState([]);
  // Obtener la función handleAddProduct del contexto CartContext
  const { handleAddProduct } = useContext(CartContext);

  // Efecto para cargar la lista de productos cuando la aplicación se carga
  useEffect(() => {
    // Realizar una solicitud GET a la API de fakestore para obtener la lista de productos
    axios.get("https://fakestoreapi.com/products").then((result) => {
      // Actualizar el estado con la lista de productos obtenida de la API
      setProductList(result.data);
    });
  }, []);

  const handleClick = (nameProduct) => {
    // Llamar a la función handleAddProduct del contexto CartContext pasando el nombre del producto
    handleAddProduct(nameProduct);
  };

  return (
    <AppContainer>
      {/* Mapear sobre la lista de productos y renderizar un componente Product para cada producto */}
      {productList.map((product) => {
        return (
          // Pasar la función handleClick como prop onAddProduct y el producto actual
          // como prop product al componente Product
          // Usar la propiedad key para identificar de manera única cada componente Product en la lista
          <Product
            key={product.id}
            onAddProduct={handleClick}
            product={product}
          />
        );
      })}
    </AppContainer>
  );
}

export default App;
