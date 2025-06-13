import { QuoteCard } from "@/components/QuoteCard";
import { SummaryCard } from "@/components/SummaryCard";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Index = () => {
  const summaryItems = [
    {
      title: "Top Choice: Proposal 954 (Eco Ease)",
      subtitle: "Best overall balance of quality, value, and confidence",
      description: "CEC approved retailer with comprehensive warranties and premium components. Guarantees target achievement with $2,110 annual savings.",
      icon: "check" as const,
      type: "positive" as const,
    },
    {
      title: "Best Value: Quote 1 (Jinko/Sungrow)",
      subtitle: "Exceptional price point at $4,278",
      description: "Exceptional price point at $4,278 with the same system size. Requires verification of installer credentials and warranties before proceeding.",
      icon: "dollar" as const,
      type: "positive" as const,
    },
    {
      title: "Quality Focus: Quote 3 (DMEGC/Growatt)",
      subtitle: "Outstanding workmanship warranty and installation quality",
      description: "Outstanding workmanship warranty and installation quality. Strategic approach with expansion planning for long-term energy independence.",
      icon: "award" as const,
      type: "positive" as const,
    },
    {
      title: "Avoid: Battery-Only Quotes",
      subtitle: "Quotes 4 & 6 cannot achieve your solar generation goals",
      description: "Quotes 4 & 6 cannot achieve your solar generation goals as they don't include panels. Only suitable as additions to existing solar systems.",
      icon: "warning" as const,
      type: "negative" as const,
    },
  ];

  const quotes = [
    {
      title: "Proposal 954 - Eco Ease Electrical",
      systemSize: "13.2kWp Solar System",
      finalPrice: "$10,884.74",
      pricePerKwp: "~$825/kWp",
      additionalInfo: "Estimated Annual Savings: $2,110",
      isRecommended: true,
      quality: {
        rating: 5,
        features: [
          "Trina panels (25-year product, 30-year power warranty)",
          "SolarEdge inverter & optimizers (12-25 year warranty)",
          "CEC accredited installers",
          "10-year whole system warranty"
        ]
      },
      value: {
        rating: 5,
        features: [
          "Competitive pricing for premium components",
          "Exceeds target savings by $910/year",
          "Detailed performance simulation included",
          "Strong ROI potential"
        ]
      },
      confidence: {
        rating: 5,
        features: [
          "CEC Approved Retailer",
          "Comprehensive warranty coverage",
          "Detailed complaint handling process",
          "Perfect fit for 50% bill reduction goal"
        ]
      }
    },
    {
      title: "Quote 2 - Jinko/Tigo/iStore Hybrid",
      systemSize: "13.2kWp Solar System - VIC",
      finalPrice: "$9,700",
      pricePerKwp: "~$735/kWp",
      additionalInfo: "Battery-Ready System",
      quality: {
        rating: 4,
        features: [
          "Jinko panels (reputable brand)",
          "Tigo optimizers (25-year warranty)",
          "iStore Hybrid inverter (limited brand info)"
        ]
      },
      value: {
        rating: 5,
        features: [
          "Competitive pricing",
          "Battery-ready for future expansion",
          "Good potential for target achievement"
        ]
      },
      confidence: {
        rating: 3,
        features: [
          "Missing installer information",
          "Limited warranty details",
          "System size appropriate for goal"
        ]
      }
    },
    {
      title: "Quote 1 - Jinko/Sungrow",
      systemSize: "13.2kWp Solar System - VIC",
      finalPrice: "$4,278",
      pricePerKwp: "~$324/kWp",
      additionalInfo: "Exceptional Value",
      quality: {
        rating: 4,
        features: [
          "Jinko panels (reputable brand)",
          "Sungrow inverter (known brand)",
          "Warranty details not specified"
        ]
      },
      value: {
        rating: 5,
        features: [
          "Extremely low price after rebates",
          "Outstanding value proposition",
          "Will significantly exceed savings target"
        ]
      },
      confidence: {
        rating: 2,
        features: [
          "Installer name not provided",
          "Limited warranty information",
          "No customer review access",
          "System size suitable for target"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-blue-600">
              Quote<span className="text-orange-500">Trust</span>
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            QuoteTrust Solar Analysis
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive comparison of solar proposals for optimal savings
          </p>
          
          {/* Target Goal */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6 bg-gradient-to-r from-orange-100 to-blue-100">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Target Goal</h3>
              <p className="text-lg text-muted-foreground mb-2">
                Achieve 50% reduction on $600/quarter electricity bill
              </p>
              <p className="text-xl font-bold text-blue-600">
                Target Annual Savings: $1,200
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Summary */}
        <SummaryCard items={summaryItems} />
        
        {/* Quote Details */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Quote Details
          </h2>
          {quotes.map((quote, index) => (
            <QuoteCard key={index} {...quote} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
