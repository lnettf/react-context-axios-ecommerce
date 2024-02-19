import { ProductContainer } from "./Product.style";

export const Product = ({ onAddProduct, product }) => {
  return (
    <ProductContainer>
      <h4>{product.title}</h4>
      <img src={product.image} width={200} />
      {/* Botón para agregar el producto al carrito, el onClick llama a la función onAddProduct */}
      <button onClick={() => onAddProduct(product.title)}>
        Añadir al carrito
      </button>
    </ProductContainer>
  );
};
