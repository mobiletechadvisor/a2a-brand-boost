
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
    <section className="py-12 md:py-16 lg:py-20 bg-white"> {/* Responsive section padding */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[158px] flex flex-col items-center"> {/* Responsive container padding */}
        {/* Title and Subtitle */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16"> {/* Responsive margin */}
          <h2 className="font-lexend text-2xl sm:text-3xl md:text-[32px] font-medium text-black mb-3 sm:mb-4"> {/* Responsive font size & margin */}
            Creating Impact Across the Healthcare Continuum
          </h2>
          <p className="font-lexend text-base sm:text-lg font-medium text-[#737171] max-w-3xl mx-auto leading-relaxed sm:leading-[26px]"> {/* Responsive font size & line height */}
            <strong>The Engage Suite</strong> completes the loop - turning awareness into measurable action
          </p>
        </div>

        {/* Main Content Area: Tabs on left, Image & Description on right */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 w-full"> {/* Responsive gap */}
          {/* Left Column: Tabs */}
          <div className="md:w-2/5 space-y-3 sm:space-y-4"> {/* Adjusted space between tabs */}
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`w-full flex items-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300
                  ${activeTab === index ? `${tab.bgColor} border-[#C9C9C9] shadow-lg` : 'bg-white border-transparent hover:bg-gray-50'}`}
              > {/* Responsive padding & border-radius */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-[79px] md:h-[79px] rounded-full flex items-center justify-center ${tab.iconOuterBg} mr-3 sm:mr-4 flex-shrink-0`}> {/* Responsive icon container size & margin */}
                  <tab.icon className={`h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 ${activeTab === index ? tab.iconColor : 'text-gray-500'}`} /> {/* Responsive icon size */}
                </div>
                <div className="text-left">
                  <h3 className={`font-lexend text-base sm:text-lg font-medium ${activeTab === index ? 'text-black' : 'text-gray-800'}`}>{tab.title}</h3> {/* Responsive font size */}
                  <p className={`font-lexend text-sm sm:text-base md:text-lg font-medium ${activeTab === index ? 'text-black' : 'text-gray-800'}`}>{tab.subtitle}</p> {/* Responsive font size */}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Image and Description */}
          <div className="md:w-3/5">
            <div className="relative mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden min-h-[200px] xs:min-h-[250px] sm:min-h-[300px] md:min-h-[441px]"> {/* Responsive min-height, margin & border-radius */}
              <img 
                src="https://yrnbbkljrdwoyqjpswtv.supabase.co/storage/v1/object/public/assets//img-o2o-1.jpeg" 
                alt="HCP Advocacy" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            {/* Description Box */}
            <div className="bg-gradient-to-br from-[rgba(255,255,255,0.96)] via-white to-[rgba(255,255,255,0.74)] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#C9C9C9] shadow-[0px_21px_54px_0px_rgba(0,0,0,0.25)] min-h-[120px] sm:min-h-[150px] flex flex-col justify-between"> {/* Responsive padding, min-height & border-radius */}
              <div>
                <p className="font-manrope text-sm sm:text-base font-bold text-[#737171] leading-relaxed sm:leading-6"> {/* Responsive font size & line height */}
                  {tabs[activeTab].description}
                </p>
              </div>
              {tabs[activeTab].id === "awareness" ? (
                <div className="mt-4 sm:mt-6 text-center sm:text-left"> {/* Centered on mobile, left on sm+ */}
                  <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-5 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-md sm:rounded-lg shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] h-8 sm:h-9 w-auto"> {/* Responsive padding, font size, border-radius & height */}
                    Get in Touch
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Get in Touch Button */}
        <div className="mt-10 md:mt-12 lg:mt-16 text-center"> {/* Responsive margin */}
          <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-8 py-3 text-base font-semibold rounded-xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.2)] h-11 w-[164px]">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvocacyPathSection;
