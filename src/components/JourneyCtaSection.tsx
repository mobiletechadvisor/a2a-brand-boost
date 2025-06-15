import { Button } from "@/components/ui/button";

const JourneyCtaSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#EAF0F0]"> {/* Background from Figma node 1:3139 */}
      <div className="max-w-[1440px] mx-auto px-[158px] py-8 flex flex-col md:flex-row items-center gap-16 md:gap-28"> {/* Layout from Figma node 1:3139 */}
        
        {/* Left Column: Image - Based on Figma node 1:3141 */}
        <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-none">
          <img 
            src="/img/cta-journey.png" 
            alt="Begin Your Journey" 
            className="rounded-2xl w-full max-w-md md:max-w-[648px] h-auto" // Image from Figma 1:3143, rounded corners from 1:3142
          />
        </div>

        {/* Right Column: Text and Button - Based on Figma node 1:3144 */}
        <div className="md:w-1/2 text-left order-2 md:order-none">
          <h2 className="text-[32px] font-medium text-black mb-6 leading-tight"> {/* Text style from Figma node 1:3146 */}
            Begin Your Journey
            <br />
            to HCP Advocacy
          </h2>
          <p className="text-base text-[#737171] mb-10 leading-relaxed max-w-md"> {/* Text style from Figma node 1:3147 */}
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
