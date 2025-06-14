
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      number: "10%",
      title: "Market Share Growth",
      description: "Within just one year, our A2A program has been instrumental in helping a pharmaceutical client in the Philippines surge their market share by an impressive 10%, navigating a highly competitive market landscape.",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      number: "2.5x",
      title: "HCP Reach",
      description: "Amplify your brand's voice with our strategy that has proven to increase HCP reach by 250%, ensuring your key messages resonate with a broader, yet targeted, medical audience.",
      icon: Users,
      color: "text-blue-600"
    },
    {
      number: "80%",
      title: "Cost Savings",
      description: "Revolutionize your marketing spend by leveraging Docquity's digital solutions, achieving over 80% in cost savings compared to conventional marketing strategies.",
      icon: DollarSign,
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The A2A Advantage: By the Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the measurable impact of our Awareness to Advocacy program (A2A), 
            underpinned by robust data that speaks to the success of our partners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                
                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {stat.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
