
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, UserCircle2, X } from "lucide-react"; // Added ChevronDown, UserCircle2, and X
import { useState } from "react"; // Added useState

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[158px] py-4 md:py-8"> {/* Responsive padding & adjusted default py */}
        <div className="flex justify-between items-center h-auto md:h-[74px]"> {/* Adjusted height for mobile */}
          <div className="flex items-center">
            <img
              src="/img/o2oegagementsuit.png"
              alt="O2O Engage Suite Logo"
              className="h-12 md:h-[74px]" // Adjusted height for mobile
            />
            <div className="font-lexend font-bold uppercase hidden">
              <span className="bg-gradient-to-r from-[#00B5D5] to-[#1B4A52] bg-clip-text text-transparent text-2xl">O2O </span>
              <span className="bg-gradient-to-r from-[#00B5D5] to-[#1B4A52] bg-clip-text text-transparent text-3xl">Engage </span>
              <span className="bg-gradient-to-r from-[#00B5D5] to-[#1B4A52] bg-clip-text text-transparent text-xl">Suite</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6"> {/* Adjusted spacing */}
            <a href="#" className="font-manrope font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center"> {/* Added font classes */}
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="font-manrope font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center"> {/* Added font classes */}
              Company <ChevronDown className="ml-1 h-4 w-4" />
            </a>
          </nav>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Placeholder for User Profile Icon - based on Figma node 1:3033 */}
            <div className="w-12 h-9 sm:w-[60px] sm:h-[38px] border border-gray-200 rounded-[25px] flex items-center justify-center shadow-[0px_4px_25px_0px_rgba(0,0,0,0.05)] cursor-pointer">
              <UserCircle2 className="h-5 w-5 text-gray-700" /> {/* Placeholder icon */}
            </div>
            <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="font-manrope font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a href="#" className="font-manrope font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
