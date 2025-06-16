
import { Button } from "@/components/ui/button";
// ArrowRight is removed as it's not in the Figma design for this button

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-white to-[#E9EFEF] pt-8 pb-10 md:pt-10 md:pb-14"> {/* Responsive section padding */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[158px]"> {/* Responsive container padding */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16"> {/* Adjusted gap for different screens */}
          
          {/* Left Column: Illustration - Based on Figma node 1:3043 */}
          <div className="md:w-1/2 flex justify-center md:justify-start order-2 md:order-1"> {/* Image appears below text on mobile */}
            <img 
              src="/img/Q-hero.png" 
              alt="Qmed Hero Logo" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto" // Adjusted max-width for smaller screens
            />
          </div>

          {/* Right Column: Text and Button - Based on Figma node 1:3111 */}
          <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start order-1 md:order-2"> {/* Text centered on mobile, button centered */}
            <h1 className="font-roboto text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#1D1919] mb-6 md:mb-8 leading-tight"> {/* Responsive font size & margin */}
              Bridging Your Brand Communication<br />
              with Our <span className="bg-gradient-to-r from-[#00B5D5] to-[#1B4A52] text-transparent bg-clip-text">Online to Offline <br className="hidden sm:inline" /> {/* Break only on sm+ */}
              (O2O) Engage</span> Program
            </h1>
            
            <p className="font-lexend text-base sm:text-lg font-medium text-[#737171] mb-8 md:mb-12 max-w-lg leading-[24px] sm:leading-[26px]"> {/* Responsive font size & line height, margin */}
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
