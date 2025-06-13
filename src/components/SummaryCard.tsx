import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, CheckCircle, DollarSign, Award, AlertTriangle } from "lucide-react";

interface SummaryItem {
  title: string;
  subtitle: string;
  description: string;
  icon: "check" | "dollar" | "award" | "warning";
  type: "positive" | "negative";
}

interface SummaryCardProps {
  items: SummaryItem[];
}

const iconMap = {
  check: CheckCircle,
  dollar: DollarSign,
  award: Award,
  warning: AlertTriangle,
};

export function SummaryCard({ items }: SummaryCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-teal-100 to-teal-200">
        <CardTitle className="text-2xl font-bold text-center text-foreground">
          Summary & Recommendations
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            const borderColor = item.type === "positive" ? "border-l-teal-500" : "border-l-orange-500";
            const iconColor = item.type === "positive" ? "text-teal-600" : "text-orange-600";
            
            return (
              <div
                key={index}
                className={`border-l-4 ${borderColor} pl-4 space-y-2`}
              >
                <div className="flex items-start gap-3">
                  <IconComponent className={`w-6 h-6 mt-1 ${iconColor}`} />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="font-medium text-muted-foreground text-sm">{item.subtitle}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}