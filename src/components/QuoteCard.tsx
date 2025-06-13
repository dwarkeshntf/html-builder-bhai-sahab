import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface QuoteCardProps {
  title: string;
  systemSize: string;
  finalPrice: string;
  pricePerKwp: string;
  additionalInfo?: string;
  quality: {
    rating: number;
    features: string[];
  };
  value: {
    rating: number;
    features: string[];
  };
  confidence: {
    rating: number;
    features: string[];
  };
  isRecommended?: boolean;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-orange-400 text-orange-400" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

export function QuoteCard({
  title,
  systemSize,
  finalPrice,
  pricePerKwp,
  additionalInfo,
  quality,
  value,
  confidence,
  isRecommended = false,
}: QuoteCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-teal-100 to-teal-200 relative">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground">{systemSize}</p>
          </div>
          {isRecommended && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
              RECOMMENDED
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="bg-muted p-4 text-center">
          <p className="text-lg font-semibold text-foreground">
            Final Price: {finalPrice} ({pricePerKwp}) {additionalInfo && `| ${additionalInfo}`}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-0">
          <div className="p-6 border-r border-border">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-semibold text-foreground">Quality</h4>
              <StarRating rating={quality.rating} />
            </div>
            <ul className="space-y-2">
              {quality.features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 border-r border-border">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-semibold text-foreground">Value</h4>
              <StarRating rating={value.rating} />
            </div>
            <ul className="space-y-2">
              {value.features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-semibold text-foreground">Confidence</h4>
              <StarRating rating={confidence.rating} />
            </div>
            <ul className="space-y-2">
              {confidence.features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}