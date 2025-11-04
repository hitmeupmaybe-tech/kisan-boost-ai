import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calculator as CalcIcon, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface ProfitResult {
  market: string;
  sellingPrice: number;
  totalRevenue: number;
  totalCost: number;
  netProfit: number;
  profitMargin: number;
}

const Calculator = () => {
  const [calculating, setCalculating] = useState(false);
  const [results, setResults] = useState<ProfitResult[]>([]);
  const [formData, setFormData] = useState({
    crop: "Tomato",
    quantity: "",
    yieldCost: "",
    transportCost: "",
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculating(true);

    // Mock calculation - will be replaced with real logic
    setTimeout(() => {
      const mockResults: ProfitResult[] = [
        {
          market: "Azadpur, Delhi",
          sellingPrice: 2400,
          totalRevenue: 2400 * parseFloat(formData.quantity),
          totalCost: parseFloat(formData.yieldCost) + parseFloat(formData.transportCost),
          netProfit: 2400 * parseFloat(formData.quantity) - (parseFloat(formData.yieldCost) + parseFloat(formData.transportCost)),
          profitMargin: ((2400 * parseFloat(formData.quantity) - (parseFloat(formData.yieldCost) + parseFloat(formData.transportCost))) / (2400 * parseFloat(formData.quantity))) * 100,
        },
        {
          market: "Indore, MP",
          sellingPrice: 2200,
          totalRevenue: 2200 * parseFloat(formData.quantity),
          totalCost: parseFloat(formData.yieldCost) + 800,
          netProfit: 2200 * parseFloat(formData.quantity) - (parseFloat(formData.yieldCost) + 800),
          profitMargin: ((2200 * parseFloat(formData.quantity) - (parseFloat(formData.yieldCost) + 800)) / (2200 * parseFloat(formData.quantity))) * 100,
        },
        {
          market: "Agra, UP",
          sellingPrice: 2100,
          totalRevenue: 2100 * parseFloat(formData.quantity),
          totalCost: parseFloat(formData.yieldCost) + 500,
          netProfit: 2100 * parseFloat(formData.quantity) - (parseFloat(formData.yieldCost) + 500),
          profitMargin: ((2100 * parseFloat(formData.quantity) - (parseFloat(formData.yieldCost) + 500)) / (2100 * parseFloat(formData.quantity))) * 100,
        },
      ].sort((a, b) => b.netProfit - a.netProfit);

      setResults(mockResults);
      setCalculating(false);
      toast.success("Profit calculated successfully!");
    }, 1500);
  };

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
            <CalcIcon className="h-8 w-8 text-primary" />
            Smart Profit Calculator
          </h1>
          <p className="text-muted-foreground">
            Calculate your exact profit across different mandis
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Input Form */}
          <Card className="lg:col-span-1 border-2">
            <CardHeader>
              <CardTitle>Enter Details</CardTitle>
              <CardDescription>Provide your crop and cost information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCalculate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="crop">Crop Type</Label>
                  <select
                    id="crop"
                    value={formData.crop}
                    onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  >
                    <option>Tomato</option>
                    <option>Onion</option>
                    <option>Potato</option>
                    <option>Wheat</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity (quintals)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="e.g., 100"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yieldCost">Total Yield Cost (₹)</Label>
                  <Input
                    id="yieldCost"
                    type="number"
                    placeholder="e.g., 50000"
                    value={formData.yieldCost}
                    onChange={(e) => setFormData({ ...formData, yieldCost: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transportCost">Transport Cost (₹)</Label>
                  <Input
                    id="transportCost"
                    type="number"
                    placeholder="e.g., 5000"
                    value={formData.transportCost}
                    onChange={(e) => setFormData({ ...formData, transportCost: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  disabled={calculating}
                >
                  {calculating ? "Calculating..." : "Calculate Profit"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="lg:col-span-2">
            {results.length === 0 ? (
              <Card className="h-full flex items-center justify-center border-2 border-dashed">
                <CardContent className="text-center py-12">
                  <CalcIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ready to Calculate</h3>
                  <p className="text-muted-foreground">
                    Enter your details and click calculate to see profit analysis
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <Card className="border-2 border-primary/30 bg-gradient-card">
                  <CardHeader>
                    <CardTitle>Profit Analysis Results</CardTitle>
                    <CardDescription>Ranked by highest net profit</CardDescription>
                  </CardHeader>
                </Card>

                {results.map((result, i) => (
                  <Card
                    key={i}
                    className={`border-2 ${
                      i === 0 ? "border-primary/50 bg-primary/5" : "border-border"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {i === 0 && (
                              <span className="inline-flex items-center rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                                BEST
                              </span>
                            )}
                            {result.market}
                          </CardTitle>
                          <CardDescription>
                            Selling Price: ₹{result.sellingPrice}/quintal
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            ₹{result.netProfit.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">Net Profit</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Total Revenue</div>
                          <div className="font-semibold">
                            ₹{result.totalRevenue.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Total Cost</div>
                          <div className="font-semibold">
                            ₹{result.totalCost.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Profit Margin</div>
                          <div className="font-semibold text-primary">
                            {result.profitMargin.toFixed(1)}%
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
