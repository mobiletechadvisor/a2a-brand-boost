
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, ThumbsUp, Target } from "lucide-react"; // Updated icons

const AdvocacyPathSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "awareness",
      title: "Awareness Amplification",
      subtitle: "Connect with Confidence",
      icon: MessageCircle,
      description: "We drive your brand's visibility among HCPs through a integrated O2O approach. Using targeted messaging on our AI-powered Engage suite combined with strategic cross-channel measurement, we deliver your brand's key messages to the right HCPs, at the right time, on the right platform.",
      bgColor: "bg-[#F4F6F7]",
      iconOuterBg: "bg-[#B1CBCF]/25",
      iconColor: "text-[#1B4A52]",
    },
    {
      id: "advocacy",
      title: "Engagement & Advocacy",
      subtitle: "Convert with Precision",
      icon: ThumbsUp,
      description: "Transform awareness into active advocacy through targeted engagement strategies. We help convert interested HCPs into brand advocates who actively promote and prescribe your solutions, driving growth and market leadership.",
      bgColor: "bg-white",
      iconOuterBg: "bg-[#B1CBCF]/25",
      iconColor: "text-[#1B4A52]",
    },
    {
      id: "action",
      title: "Action Focus",
      subtitle: "Conversion Catalyst",
      icon: Target,
      description: "Drive measurable outcomes through precision-targeted actions. Our suite transforms engagement into concrete results, creating a systematic approach that converts healthcare professional interest into tangible business impact and sustainable growth.",
      bgColor: "bg-white",
      iconOuterBg: "bg-[#B1CBCF]/25",
      iconColor: "text-[#1B4A52]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-[158px] flex flex-col items-center">
        {/* Title and Subtitle */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-lexend text-[32px] font-medium text-black mb-4">
            Creating Impact Across the Healthcare Continuum
          </h2>
          <p className="font-lexend text-lg font-medium text-[#737171] max-w-3xl mx-auto leading-[26px]">
            <strong>The Engage Suite</strong> completes the loop - turning awareness into measurable action
          </p>
        </div>

        {/* Main Content Area: Tabs on left, Image & Description on right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
          {/* Left Column: Tabs */}
          <div className="md:w-2/5 space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`w-full flex items-center p-6 rounded-2xl border transition-all duration-300
                  ${activeTab === index ? `${tab.bgColor} border-[#C9C9C9] shadow-lg` : 'bg-white border-transparent hover:bg-gray-50'}`}
              >
                <div className={`w-[79px] h-[79px] rounded-full flex items-center justify-center ${tab.iconOuterBg} mr-4 flex-shrink-0`}>
                  <tab.icon className={`h-10 w-10 ${activeTab === index ? tab.iconColor : 'text-gray-500'}`} />
                </div>
                <div className="text-left">
                  <h3 className={`font-lexend text-lg font-medium ${activeTab === index ? 'text-black' : 'text-gray-800'}`}>{tab.title}</h3>
                  <p className={`font-lexend text-lg font-medium ${activeTab === index ? 'text-black' : 'text-gray-800'}`}>{tab.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Image and Description */}
          <div className="md:w-3/5">
            <div className="relative mb-6 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[441px]">
              <img 
                src="/img/handshake.png" 
                alt="HCP Advocacy" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            {/* Description Box */}
            <div className="bg-gradient-to-br from-[rgba(255,255,255,0.96)] via-white to-[rgba(255,255,255,0.74)] p-6 rounded-2xl border border-[#C9C9C9] shadow-[0px_21px_54px_0px_rgba(0,0,0,0.25)] min-h-[150px] flex flex-col justify-between">
              <div>
                <p className="font-manrope text-base font-bold text-[#737171] leading-6">
                  {tabs[activeTab].description}
                </p>
              </div>
              {tabs[activeTab].id === "awareness" ? (
                <div className="mt-6 text-left">
                  <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-6 py-2 text-sm font-semibold rounded-lg shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] h-9 w-auto">
                    Get in Touch
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Get in Touch Button */}
        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-8 py-3 text-base font-semibold rounded-xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.2)] h-11 w-[164px]">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvocacyPathSection;
