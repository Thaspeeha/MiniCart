"use client";

import React, { useEffect, useState } from "react";
import ProductCard, { Product } from "../components/ProductCard";

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("/mock-products.json");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product: Product) => {
    // dO: Integrate with cart context
    alert(`Added ${product.name} to cart!`);
  };

  if (loading) return <div className="text-center mt-10">Loading products...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

    return (
    <div className="container mx-auto py-8 px-4">
      {/* Website Name */}
      <h1 className="text-4xl font-extrabold text-center mb-2 text-primary">
        MiniCart
      </h1>

      {/* Tagline */}
      <p className="text-center text-lg text-gray-600 mb-8 italic">
        Discover shopping with our new launched products
      </p>

      {/* Section Title */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Products</h2>

      {/* Product Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}
