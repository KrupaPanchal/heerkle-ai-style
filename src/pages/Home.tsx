import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Sparkles, ShoppingBag, Palette } from 'lucide-react';
import heroImage from '@/assets/hero-fashion.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Fashion That<br />Fits Your Tone
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover your perfect colors with AI-powered skin tone analysis.
              Find clothes that make you shine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/ai-scan">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Try AI Skin Scan
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/shop">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Browse Collection
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex p-3 rounded-full bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">AI Skin Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized color recommendations based on your skin tone
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex p-3 rounded-full bg-primary/10">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Curated Collection</h3>
              <p className="text-sm text-muted-foreground">
                Handpicked fashion items in colors that complement you
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex p-3 rounded-full bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Easy Shopping</h3>
              <p className="text-sm text-muted-foreground">
                Seamless experience from discovery to delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              New Arrivals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our latest collection of fashion essentials
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
