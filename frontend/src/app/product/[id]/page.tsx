"use client";

import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const { id } = use(params);
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/mock-products.json");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();
        const foundProduct = data.find((p) => p.id === id);
        if (!foundProduct) setError("Product not found");
        else setProduct(foundProduct);
      } catch (err) {
        const error = err instanceof Error ? err.message : "An error occurred";
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;
    setIsAddingToCart(true);
    try {
      addToCart({ ...product, quantity });
    } finally {
      setIsAddingToCart(false);
    }
  };

  if (loading)
    return <div className="text-center mt-10">Loading product...</div>;

  if (error)
    return (
      <div className="text-center mt-10 text-red-500" role="alert">
        {error}
      </div>
    );

  if (!product) return null;

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2 relative h-[400px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              unoptimized // keep if external image domain not configured in next.config.js
              priority
            />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
            <div className="text-2xl font-bold text-primary mb-6">
              ${product.price.toFixed(2)}
            </div>

            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </Button>
                <span id="quantity" className="w-12 text-center text-lg">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </Button>
              </div>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              aria-busy={isAddingToCart}
            >
              {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
            </Button>

            <div className="mt-6 text-sm text-gray-500">
              <h3 className="font-semibold mb-2">Product Details:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Free shipping on orders over $100</li>
                <li>30-day return policy</li>
                <li>1-year warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
