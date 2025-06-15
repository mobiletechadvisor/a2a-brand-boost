import { Button } from "@/components/ui/button";

const ConsultationCtaSection = () => {
  return (
    <section className="bg-[#1B4A52]"> {/* Background color from original design */}
      <div className="max-w-[1124px] mx-auto px-8 py-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        
        <div className="flex items-center gap-8">
          <img 
            src="/img/contact-us-banner.png" 
            alt="Contact Us" 
            className="w-[60px] h-[60px] rounded-full object-cover flex-shrink-0"
          />
          <h2 className="font-lexend text-2xl font-medium text-white leading-tight"> {/* Added font-lexend */}
            Contact Us Today for a Free Consultation
          </h2>
        </div>

        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-[#1B4A52] transition-colors px-8 py-3 text-base font-semibold rounded-xl h-11 w-auto md:w-[309px]"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default ConsultationCtaSection;
