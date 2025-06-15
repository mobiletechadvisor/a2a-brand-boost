import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, ThumbsUp } from "lucide-react"; // Icons for tabs

const AdvocacyPathSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "awareness",
      title: "Awareness Amplification",
      subtitle: "Connect with Confidence",
      icon: MessageCircle, // Figma: doc chat (1:1361)
      description: "We begin by casting a wide net to elevate your brand’s visibility among HCPs. Through targeted key message ads on Qmed Engage suite and strategic social media placement, we ensure your brand’s key messages reach the right HCPs, at the right time, on the right platform.", // Updated "Docquity" to "Qmed Engage suite" and removed last sentence as it's not in new text.
      bgColor: "bg-[#F4F6F7]", // Selected tab bg from Figma (1:3137;22654:21506)
      iconOuterBg: "bg-[#B1CBCF]/25", // Icon outer circle bg
      iconColor: "text-[#1B4A52]", // Icon color for selected
    },
    {
      id: "trust",
      title: "Trust Through Science",
      subtitle: "Convince with Credibility",
      icon: Users, // Figma: we team up to grow more (1:1370)
      description: "Building credibility through scientific evidence and peer-reviewed content that resonates with healthcare professionals. We establish your brand as a trusted authority in the medical community, fostering belief in your products through transparent and verifiable data.",
      bgColor: "bg-white",
      iconOuterBg: "bg-[#B1CBCF]/25",
      iconColor: "text-[#1B4A52]",
    },
    {
      id: "advocacy",
      title: "Engagement & Advocacy",
      subtitle: "Convert with Precision",
      icon: ThumbsUp, // Figma: CEO approval (1:1386)
      description: "Transform awareness into active advocacy through targeted engagement strategies. We help convert interested HCPs into brand advocates who actively promote and prescribe your solutions, driving growth and market leadership.",
      bgColor: "bg-white",
      iconOuterBg: "bg-[#B1CBCF]/25",
      iconColor: "text-[#1B4A52]",
    },
  ];

  return (
    <section className="py-20 bg-white"> {/* Section styling from Figma node 1:3129 */}
      <div className="max-w-[1440px] mx-auto px-[158px] flex flex-col items-center">
        {/* Title and Subtitle - Figma node 1:3131 & 1:3136 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-lexend text-[32px] font-medium text-black mb-4"> {/* Added font-lexend */}
            Creating Impact Across the Healthcare Continuum
          </h2>
          <p className="font-lexend text-lg font-medium text-[#737171] max-w-3xl mx-auto leading-[26px]"> {/* Added font-lexend, Added font-medium and line-height */}
            Engage Suite completes the loop - turning awareness into measurable action
          </p>
        </div>

        {/* Main Content Area: Tabs on left, Image & Description on right - Figma node 1:3137 */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
          {/* Left Column: Tabs - Figma node I1:3137;22654:21505 */}
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
                  <h3 className={`font-lexend text-lg font-medium ${activeTab === index ? 'text-black' : 'text-gray-800'}`}>{tab.title}</h3> {/* Added font-lexend */}
                  <p className={`font-lexend text-lg font-medium ${activeTab === index ? 'text-black' : 'text-gray-800'}`}>{tab.subtitle}</p> {/* Added font-lexend, Updated size, weight, inactive color */}
                </div>
              </button>
            ))}
            {/* Progress dots - Figma node I1:3137;22654:21509 */}
            {/* <div className="flex justify-start space-x-2 pl-6 pt-4">
                {[0,1,2].map(i => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${activeTab === i ? 'bg-[#E2504B]' : 'bg-[#C3D4D7]'}`}></div> 
                ))}
            </div> */}
          </div>

          {/* Right Column: Image and Description - Figma node I1:3137;22654:21513 */}
          <div className="md:w-3/5">
            <div className="relative mb-6 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[441px]"> {/* Image container from Figma node I1:3137;22654:21515 */}
              <img 
                src="/img/handshake.png" 
                alt="HCP Advocacy" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            {/* Description Box - Figma node I1:3137;22654:21518 */}
            <div className="bg-gradient-to-br from-[rgba(255,255,255,0.96)] via-white to-[rgba(255,255,255,0.74)] p-6 rounded-2xl border border-[#C9C9C9] shadow-[0px_21px_54px_0px_rgba(0,0,0,0.25)] min-h-[150px] flex flex-col justify-between"> {/* Added flex flex-col justify-between */}
              <div> {/* Wrapper for text content */}
                <p className="font-manrope text-base font-bold text-[#737171] leading-6"> {/* Added font-manrope, Added font-bold, updated line-height */}
                  {tabs[activeTab].description}
                </p>
              </div>
              {tabs[activeTab].id === "awareness" ? (
                <div className="mt-6 text-left"> {/* Button container */}
                  <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-6 py-2 text-sm font-semibold rounded-lg shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] h-9 w-auto">
                    Get in Touch
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Get in Touch Button - Figma node 1:3138 (This one is for the whole section, kept as is) */}
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
