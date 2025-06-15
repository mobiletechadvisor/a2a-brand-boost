import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Removed Star

const Footer = () => {
  // Link columns removed as they are not in the new Figma text for the footer.

  return (
    <footer className="bg-black text-[#CED4DA] py-10 rounded-t-2xl">
      <div className="max-w-[1440px] mx-auto px-[158px]">
        
        {/* Top section: Newsletter - Simplified */}
        <div className="flex flex-col md:flex-row justify-end gap-12 mb-10"> {/* justify-end to push newsletter to the right */}
          {/* Newsletter Section */}
          <div className="md:w-2/5 lg:w-1/3">
            <h4 className="font-lexend font-semibold text-white text-lg mb-3 leading-[22px]">Newsletter</h4> {/* Added font-lexend, Added line-height */}
            <p className="font-manrope text-base font-semibold mb-5 leading-[26px]"> {/* Added font-manrope, Updated size, weight, line-height */}
              Subscribe to our newsletter to get the latest news and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <Input 
                type="email"
                placeholder="Enter your email" 
                className="bg-[rgba(255,255,255,0.19)] border border-[#69727D] text-white placeholder-gray-300 rounded-sm h-[51px] flex-grow"
              />
              <Button className="bg-[#E2504B] hover:bg-[#E2504B]/90 text-white font-medium text-base rounded h-[51px] px-5">
                Subscribe
              </Button>
            </div>
            {/* Rating stars and review text removed */}
          </div>
        </div>

        {/* Middle section: Social Icons - App Badges removed */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8"> {/* Centered social icons */}
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
          {/* App badges removed */}
        </div>
        
        {/* Divider */}
        <hr className="border-[rgba(255,255,255,0.16)] mb-8" />

        {/* Bottom section: Logo, Copyright, Legal Links - Figma node 1:3242 */}
        <div className="font-manrope flex flex-col md:flex-row justify-between items-center text-sm"> {/* Added font-manrope to this block */}
          <img src="https://hello.qmed.asia/lovable-uploads/54a95437-19aa-4389-a978-29d1646c761d.png" alt="QMed" className="h-[37px] mb-4 md:mb-0" /> {/* Updated src, removed brightness-0 invert */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>© 2025 | QMed. All rights reserved</p> {/* Text from Figma node 1:3245, updated */}
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a> {/* Text from Figma node 1:3246 */}
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> {/* Text from Figma node 1:3247 */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
