import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      if (onAddToCart) onAddToCart({ ...product, quantity });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-xs">
      <CardContent className="pt-6 flex flex-col items-center">
        <Link href={`/product/${product.id}`} className="block">
        <Image
          src={product.image}
          alt={product.name}
          width={128}
          height={128}
          className="object-cover mb-4 rounded hover:opacity-90 transition-opacity"
          unoptimized
        />
        <h2 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{product.name}</h2>
      </Link>
        <p className="text-gray-600 text-sm mb-2 text-center">{product.description}</p>
        <div className="font-bold text-primary mb-4">${product.price.toFixed(2)}</div>
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="w-full"
                onClick={handleAddToCart}
                disabled={isLoading}
              >
                {isLoading ? "Adding..." : "Add to Cart"}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add {quantity} item{quantity > 1 ? "s" : ""} to cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default ProductCard; 