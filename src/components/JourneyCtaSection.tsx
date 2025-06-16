import { Button } from "@/components/ui/button";

const JourneyCtaSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#EAF0F0] py-10 md:py-12 lg:py-16"> {/* Responsive section padding */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[158px] py-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 xl:gap-28"> {/* Responsive container padding & gap */}
        
        {/* Left Column: Image - Based on Figma node 1:3141 */}
        <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-none">
          <img 
            src="/img/cta-journey.png" 
            alt="Begin Your Journey" 
            className="rounded-xl sm:rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[648px] h-auto" // Responsive max-width & border-radius
          />
        </div>

        {/* Right Column: Text and Button - Based on Figma node 1:3144 */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-none flex flex-col items-center md:items-start"> {/* Text centered on mobile, button centered */}
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-medium text-black mb-4 sm:mb-6 leading-tight"> {/* Responsive font size & margin */}
            Begin Your Journey
            <br />
            to HCP Advocacy
          </h2>
          <p className="text-base text-[#737171] mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-md"> {/* Responsive margin */}
            Embrace the future of HCP engagement with Docquity. Contact us to unlock the full potential of digital advocacy for your brand.
            <br /><br />
            The digital transformation of healthcare marketing is advancing rapidly. Don't get left behind. Partner with Docquity to seamlessly integrate your brand into the HCP digital experience. Our team is ready to guide you through each step of the A2A program, ensuring your brand stands out in a crowded marketplace.
          </p>
          {/* Button based on Figma node 1:3148 */}
          <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-8 py-3 text-base font-semibold rounded-xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.2)] h-11 w-[164px]">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JourneyCtaSection;
