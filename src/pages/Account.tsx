import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Package, Heart } from 'lucide-react';

const Account = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">My Account</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-2">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Profile</h3>
            <p className="text-sm text-muted-foreground">
              Manage your personal information
            </p>
            <Button variant="outline" className="w-full">View Profile</Button>
          </Card>

          <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-2">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Orders</h3>
            <p className="text-sm text-muted-foreground">
              Track your order history
            </p>
            <Button variant="outline" className="w-full">View Orders</Button>
          </Card>

          <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow">
            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-2">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Wishlist</h3>
            <p className="text-sm text-muted-foreground">
              Save your favorite items
            </p>
            <Button variant="outline" className="w-full">View Wishlist</Button>
          </Card>
        </div>

        <Card className="mt-8 p-8 text-center">
          <p className="text-muted-foreground mb-4">
            Sign in to access your account and enjoy personalized shopping
          </p>
          <div className="flex gap-4 justify-center">
            <Button>Sign In</Button>
            <Button variant="outline">Create Account</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Account;
