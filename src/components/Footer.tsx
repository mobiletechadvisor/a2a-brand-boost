
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 sm:py-8"> {/* Adjusted padding */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[158px]"> {/* Responsive container padding */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"> {/* Stack on very small screens, then row. Adjusted gap. */}
          <span className="font-manrope text-sm sm:text-base text-gray-600">brought to you by</span> {/* Slightly smaller text on xs */}
          <img 
            src="https://hello.qmed.asia/lovable-uploads/54a95437-19aa-4389-a978-29d1646c761d.png" 
            alt="QMed" 
            className="h-6" 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
