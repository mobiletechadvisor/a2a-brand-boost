import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#E9EFEF] to-white py-12 md:py-16 lg:py-20"> {/* Responsive section padding */}
      <div className="max-w-[1124px] mx-auto px-4 sm:px-6 md:px-8 text-center"> {/* Responsive container padding */}
        
        <h2 className="font-lexend text-2xl sm:text-3xl md:text-[32px] font-medium text-[#1D1919] mb-4 sm:mb-6 leading-tight sm:leading-10"> {/* Responsive font size & margin */}
          Ready to Bridge Your Brand with O2O Engagement?
        </h2>
        
        <p className="font-manrope text-base font-medium text-[#737171] mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed sm:leading-6"> {/* Responsive margin & line height */}
          Embrace the future of healthcare engagement with Qmed Engage Suite. Contact us to unlock the full potential of digital advocacy for your brand.
        </p>
        <p className="font-manrope text-base font-medium text-[#737171] mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed sm:leading-6"> {/* Responsive margin & line height */}
          Our team is ready to guide you through how our integrated O2O program can empower your brand, activate patients, and support HCPs- delivering measurable results at every step of the healthcare journey.
        </p>

        <Button className="bg-gradient-to-r from-[#252424] to-[#424242] hover:opacity-90 text-white px-6 py-3 text-base sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 font-semibold rounded-lg sm:rounded-xl shadow-[0px_8px_20px_0px_rgba(0,0,0,0.2)] h-auto w-auto"> {/* Responsive padding & font size */}
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default FinalCtaSection;
