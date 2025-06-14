
import { Target, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const steps = [
    {
      title: "Awareness Amplification",
      subtitle: "Connect with Confidence",
      description: "We begin by casting a wide net to elevate your brand's visibility among HCPs. Through targeted key message ads on Docquity and strategic social media placement, we ensure your brand's key messages reach the right HCPs, at the right time, on the right platform.",
      icon: Target,
      color: "bg-blue-500"
    },
    {
      title: "Trust Through Science",
      subtitle: "Convince with Credibility",
      description: "Building credibility through scientific evidence and peer-reviewed content that resonates with healthcare professionals. We establish your brand as a trusted authority in the medical community.",
      icon: Shield,
      color: "bg-green-500"
    },
    {
      title: "Engagement & Advocacy",
      subtitle: "Convert with Precision",
      description: "Transform awareness into active advocacy through targeted engagement strategies. We help convert interested HCPs into brand advocates who actively promote and prescribe your solutions.",
      icon: Zap,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simplify the Path to HCP Advocacy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Harnessing the power of VMRs to elevate healthcare communications and boost ROI
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''} gap-12`}>
              <div className="flex-1">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-blue-600 mb-4">
                  {step.subtitle}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>
                
                <Button variant="outline" className="hover:bg-blue-50">
                  Get in Touch
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="bg-white rounded-lg shadow-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="w-32 h-32 bg-gray-100 rounded-lg mb-4 mx-auto"></div>
                    <p>Process Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
