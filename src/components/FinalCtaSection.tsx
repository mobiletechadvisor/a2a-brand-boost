import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#E9EFEF] to-white py-20"> {/* New background based on general theme, added padding */}
      <div className="max-w-[1124px] mx-auto px-8 text-center"> {/* Centered content */}
        
        <h2 className="font-lexend text-[32px] font-medium text-[#1D1919] mb-6 leading-10"> {/* Added font-lexend, Updated styles */}
          Ready to Bridge Your Brand with O2O Engagement?
        </h2>
        
        <p className="font-manrope text-base font-medium text-[#737171] mb-4 max-w-3xl mx-auto leading-6"> {/* Added font-manrope, Updated styles */}
          Embrace the future of healthcare engagement with Qmed Engage Suite. Contact us to unlock the full potential of digital advocacy for your brand.
        </p>
        <p className="font-manrope text-base font-medium text-[#737171] mb-10 max-w-3xl mx-auto leading-6"> {/* Added font-manrope, Updated styles */}
          Our team is ready to guide you through how our integrated O2O program can empower your brand, activate patients, and support HCPs- delivering measurable results at every step of the healthcare journey.
        </p>

        <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.2)] h-auto w-auto">
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default FinalCtaSection;
