import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ArrowLeft, Package, User, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Market = () => {
  // Mock marketplace data
  const listings = [
    {
      id: 1,
      farmer: "Ramesh Patel",
      location: "Gujarat",
      crop: "Tomato",
      quantity: 150,
      pricePerQuintal: 2300,
      quality: "A Grade",
      available: true,
    },
    {
      id: 2,
      farmer: "Suresh Kumar",
      location: "Punjab",
      crop: "Wheat",
      quantity: 500,
      pricePerQuintal: 2150,
      quality: "Premium",
      available: true,
    },
    {
      id: 3,
      farmer: "Lakshmi Reddy",
      location: "Telangana",
      crop: "Onion",
      quantity: 200,
      pricePerQuintal: 1750,
      quality: "A Grade",
      available: true,
    },
  ];

  const buyers = [
    { name: "AgriTrade Co.", type: "Bulk Buyer", location: "Mumbai", verified: true },
    { name: "FreshMart Ltd.", type: "Retailer", location: "Delhi", verified: true },
    { name: "Export House", type: "Exporter", location: "Bangalore", verified: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              FasalSignal
            </span>
          </Link>
          <Link to="/dashboard">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Package className="h-8 w-8 text-primary" />
            Buyer Marketplace
          </h1>
          <p className="text-muted-foreground">
            Connect directly with buyers and maximize your profits
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Farmer Listings */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Active Produce Listings</CardTitle>
                <CardDescription>Fresh produce available from verified farmers</CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {listings.map((listing) => (
                <Card key={listing.id} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl">{listing.crop}</CardTitle>
                          <Badge variant="outline" className="bg-primary/10 text-primary">
                            {listing.quality}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {listing.farmer}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {listing.location}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          ₹{listing.pricePerQuintal}
                        </div>
                        <div className="text-sm text-muted-foreground">per quintal</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Available Quantity</div>
                        <div className="text-lg font-semibold">{listing.quantity} quintals</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline">View Details</Button>
                        <Button variant="hero">Contact Seller</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-primary/20 bg-gradient-card">
              <CardContent className="py-6">
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold">Want to List Your Produce?</h3>
                  <p className="text-muted-foreground">
                    Reach thousands of verified buyers directly
                  </p>
                  <Button variant="hero" size="lg">
                    Create Listing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Verified Buyers */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Verified Buyers</CardTitle>
                <CardDescription>Trusted buyers on our platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {buyers.map((buyer, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border hover:border-primary/50 transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold flex items-center gap-2">
                          {buyer.name}
                          {buyer.verified && (
                            <Badge variant="outline" className="bg-primary/10 text-primary text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{buyer.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {buyer.location}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <CardHeader>
                <CardTitle className="text-lg">Market Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-xs">1</span>
                  </div>
                  <p className="text-muted-foreground">
                    Always verify buyer credentials before transactions
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-xs">2</span>
                  </div>
                  <p className="text-muted-foreground">
                    Check market prices before accepting offers
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-xs">3</span>
                  </div>
                  <p className="text-muted-foreground">
                    Use our profit calculator for best deals
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
