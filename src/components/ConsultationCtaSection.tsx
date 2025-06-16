import { Button } from "@/components/ui/button";

const ConsultationCtaSection = () => {
  return (
    <section className="bg-[#1B4A52]"> {/* Background color from original design */}
      <div className="max-w-[1124px] mx-auto px-4 py-8 sm:px-6 md:px-8 rounded-none sm:rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16"> {/* Responsive padding, gap & border-radius */}
        
        <div className="flex flex-col text-center sm:flex-row sm:text-left items-center gap-4 sm:gap-6 md:gap-8"> {/* Responsive layout & gap */}
          <img 
            src="/img/contact-us-banner.png" 
            alt="Contact Us" 
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] rounded-full object-cover flex-shrink-0" // Responsive image size
          />
          <h2 className="font-lexend text-xl sm:text-2xl font-medium text-white leading-tight"> {/* Responsive font size */}
            Contact Us Today for a Free Consultation
          </h2>
        </div>

        <Button 
          variant="outline" 
          className="bg-transparent border-white text-white hover:bg-white hover:text-[#1B4A52] transition-colors px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl h-10 sm:h-11 w-full sm:w-auto md:w-[309px]" // Added bg-transparent for default state
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default ConsultationCtaSection;
