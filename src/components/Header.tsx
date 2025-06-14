
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://hello.qmed.asia/lovable-uploads/54a95437-19aa-4389-a978-29d1646c761d.png" 
              alt="QMed" 
              className="h-8"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Company</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Careers</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block">Contact Us</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Get In Touch</Button>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
