
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-rose-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl shadow-lg">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              PlanMyShadi
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Features
            </Link>
            <Link to="/vendors" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Find Vendors
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              About
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="ghost" className="text-gray-700 hover:text-rose-600">
                Sign In
              </Button>
            </Link>
            <Link to="/join-vendor">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all">
                Join as Vendor
              </Button>
            </Link>
          </div>
          
          <button
            className="md:hidden p-2 text-gray-700 hover:text-rose-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/features" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Features
              </Link>
              <Link to="/vendors" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Find Vendors
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Pricing
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-rose-100">
                <Link to="/signin">
                  <Button variant="ghost" className="text-gray-700 hover:text-rose-600 justify-start w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/join-vendor">
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg w-full">
                    Join as Vendor
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
