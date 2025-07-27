import React from "react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center w-full max-w-xs">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-2 text-center">{product.description}</p>
      <div className="font-bold text-primary mb-4">${product.price.toFixed(2)}</div>
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        onClick={() => onAddToCart && onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard; 