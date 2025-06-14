
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ResourcesSection = () => {
  const articles = [
    {
      title: "Awareness to Advocacy (A2A)",
      date: "April 17, 2023",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Building strong HCP Intent to Prescribe campaigns",
      date: "April 17, 2023",
      image: "/api/placeholder/300/200"
    },
    {
      title: "The Power of Insights",
      date: "April 17, 2023",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse our Articles and Resources
          </h2>
          <Button variant="outline" className="mb-8">
            Browse All Articles
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {article.title}
                </h3>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Begin Your Journey to HCP Advocacy
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Embrace the future of HCP engagement with Docquity. Contact us to unlock the full potential 
              of digital advocacy for your brand. The digital transformation of healthcare marketing is 
              advancing rapidly. Don't get left behind.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
