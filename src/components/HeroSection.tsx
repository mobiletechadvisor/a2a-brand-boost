
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Elevate Your Brand<br />
            with Our <span className="text-blue-600">Awareness<br />
            to Advocacy (A2A)</span> Program
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            Step into an era of strategic HCP engagement where awareness evolves into advocacy. 
            Propel your pharmaceutical brand to new heights with QMed's targeted, 
            data-driven approach in Southeast Asia.
          </p>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg animate-fade-in delay-300">
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-16">
          <p className="text-center text-gray-600 mb-8">Trusted across the entire medical landscape</p>
          <p className="text-center text-sm text-gray-500 mb-8">
            The leading names in healthcare trust QMed to amplify their message to HCPs.<br />
            See who's already advancing with our A2A program.
          </p>
          
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-gray-200 h-12 w-32 rounded animate-pulse"></div>
            <div className="bg-gray-200 h-12 w-32 rounded animate-pulse"></div>
            <div className="bg-gray-200 h-12 w-32 rounded animate-pulse"></div>
            <div className="bg-gray-200 h-12 w-32 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
