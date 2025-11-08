import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground line-clamp-1">{product.title}</h3>
              <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">₹{product.price}</p>
            </div>
          </div>
          <Button
            size="sm"
            className="w-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </Card>
    </Link>
  );
};
