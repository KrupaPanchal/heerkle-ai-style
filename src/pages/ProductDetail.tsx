import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart, ArrowLeft, Package, Truck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addItem = useCart((state) => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Product not found</h2>
          <Button asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/shop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 capitalize">{product.category}</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-2">{product.title}</h1>
              <p className="text-3xl font-bold text-primary">₹{product.price}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Package className="mr-2 h-4 w-4" />
                    Color: <span className="ml-2 capitalize font-medium text-foreground">{product.color}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Truck className="mr-2 h-4 w-4" />
                    Stock: <span className="ml-2 font-medium text-foreground">{product.stock} items available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="w-full md:w-auto"
                onClick={() => addItem(product)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>

            <div className="pt-6 border-t border-border space-y-3 text-sm text-muted-foreground">
              <p>✓ Free shipping on orders over ₹2000</p>
              <p>✓ Easy returns within 7 days</p>
              <p>✓ Secure payment options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
