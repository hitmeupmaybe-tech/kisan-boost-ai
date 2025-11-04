import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, Calculator, Users, Package, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  // Mock data - will be replaced with real API data
  const mandiPrices = [
    { crop: "Tomato", market: "Azadpur, Delhi", price: 2400, change: 8.5, unit: "quintal" },
    { crop: "Onion", market: "Lasalgaon, Maharashtra", price: 1800, change: -3.2, unit: "quintal" },
    { crop: "Potato", market: "Agra, UP", price: 1200, change: 5.1, unit: "quintal" },
    { crop: "Wheat", market: "Indore, MP", price: 2150, change: 2.3, unit: "quintal" },
  ];

  const alerts = [
    { type: "weather", title: "Heavy Rain Alert", desc: "Expected in next 48 hours", severity: "high" },
    { type: "price", title: "Price Surge", desc: "Tomato prices up 12% today", severity: "medium" },
    { type: "disease", title: "Fungal Risk", desc: "High humidity detected", severity: "high" },
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
          <div className="flex items-center gap-4">
            <Link to="/calculator">
              <Button variant="ghost">
                <Calculator className="mr-2 h-4 w-4" />
                Calculator
              </Button>
            </Link>
            <Link to="/market">
              <Button variant="ghost">
                <Package className="mr-2 h-4 w-4" />
                Market
              </Button>
            </Link>
            <Button variant="outline">Profile</Button>
          </div>
        </div>
      </nav>

      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Farmer!</h1>
          <p className="text-muted-foreground">Here's your market overview for today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="border-2 border-primary/20 bg-gradient-card">
            <CardHeader className="pb-3">
              <CardDescription>Best Market Today</CardDescription>
              <CardTitle className="text-2xl">Azadpur</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-primary">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span className="font-semibold">+8.5% higher</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription>Average Price (Tomato)</CardDescription>
              <CardTitle className="text-2xl">₹2,400</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">per quintal</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription>Weekly Forecast</CardDescription>
              <CardTitle className="text-2xl">+12%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-primary font-semibold">Bullish trend</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-destructive/20">
            <CardHeader className="pb-3">
              <CardDescription>Active Alerts</CardDescription>
              <CardTitle className="text-2xl">3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-destructive font-semibold">Needs attention</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Live Mandi Prices */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Live Mandi Prices</CardTitle>
                    <CardDescription>Updated 5 minutes ago</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    LIVE
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mandiPrices.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 transition-colors"
                    >
                      <div>
                        <div className="font-semibold">{item.crop}</div>
                        <div className="text-sm text-muted-foreground">{item.market}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">₹{item.price}</div>
                        <div className="text-sm text-muted-foreground">per {item.unit}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.change > 0 ? (
                          <>
                            <TrendingUp className="h-4 w-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                              +{item.change}%
                            </span>
                          </>
                        ) : (
                          <>
                            <TrendingDown className="h-4 w-4 text-destructive" />
                            <span className="text-sm font-semibold text-destructive">
                              {item.change}%
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/market">
                  <Button variant="outline" className="w-full mt-4">
                    View All Markets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Alerts & Risk Advisory */}
          <div className="space-y-6">
            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Active Alerts
                </CardTitle>
                <CardDescription>Requires your attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg border ${
                      alert.severity === "high"
                        ? "border-destructive/30 bg-destructive/5"
                        : "border-secondary/30 bg-secondary/5"
                    }`}
                  >
                    <div className="font-semibold text-sm">{alert.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{alert.desc}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 border-primary/20 bg-gradient-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/calculator">
                  <Button variant="outline" className="w-full justify-start">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Profit
                  </Button>
                </Link>
                <Link to="/market">
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="mr-2 h-4 w-4" />
                    Browse Buyers
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Book Logistics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
