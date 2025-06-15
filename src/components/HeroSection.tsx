
import { Button } from "@/components/ui/button";
// ArrowRight is removed as it's not in the Figma design for this button

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-white to-[#E9EFEF] pt-10 pb-14"> {/* Adjusted padding and gradient based on Figma node 1:3041 */}
      <div className="max-w-[1440px] mx-auto px-[158px]"> {/* Adjusted padding and max-width based on Figma */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16"> {/* Two-column layout */}
          
          {/* Left Column: Illustration - Based on Figma node 1:3043 */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img 
              src="/img/Q-hero.png" 
              alt="Qmed Hero Logo" 
              className="w-full max-w-md md:max-w-full h-auto" // Adjusted size
            />
          </div>

          {/* Right Column: Text and Button - Based on Figma node 1:3111 */}
          <div className="md:w-1/2 text-left"> {/* Text aligned left */}
            <h1 className="font-roboto text-[32px] font-semibold text-[#1D1919] mb-8 leading-tight"> {/* Changed font, size, weight, leading */}
              Bridging Your Brand Communication<br />
              with Our <span className="bg-gradient-to-r from-[#00B5D5] to-[#1B4A52] text-transparent bg-clip-text">Online to Offline <br />
              (O2O) Engage</span> Program
            </h1>
            
            <p className="font-lexend text-lg font-medium text-[#737171] mb-12 max-w-lg leading-[26px]"> {/* Added font-lexend, Added font-medium, updated line height */}
              Step into a future-ready solution that empowers patients and HCPs in a continuous care loop. 
              Elevate your pharmaceutical brand to a new standard in healthcare engagement with our AI-powered Engage suite.
            </p>
            
            {/* Button based on Figma node 1:3115 */}
            <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-8 py-3 text-base font-semibold rounded-xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.2)] h-11 w-[164px]">
              Get In Touch
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
