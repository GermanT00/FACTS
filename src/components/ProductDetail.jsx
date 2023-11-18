import React from 'react';
import { useParams } from 'react-router-dom'; // Importar useParams para obtener parámetros de la URL

const ProductDetail = () => {
  // Obtener el parámetro de la URL (el ID del producto)
  const { id } = useParams();

  // Supongamos que tienes una función o un hook para obtener los detalles del producto según el ID
  // Puedes usar esa función para obtener los detalles del producto usando el ID

  // Simulación de datos del producto
  const product = {
    id: id,
    name: 'Nombre del producto',
    description: 'Descripción del producto...',
    price: '$99.99',
    // Otros detalles del producto
  };

  return (
    <div>
      <h2>Detalles del producto:</h2>
      <p>ID: {product.id}</p>
      <p>Nombre: {product.name}</p>
      <p>Descripción: {product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
