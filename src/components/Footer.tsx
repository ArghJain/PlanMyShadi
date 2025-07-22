
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl shadow-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                PlanMyShadi
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Where elegance meets joy. We're dedicated to making your wedding planning journey 
              as beautiful and memorable as your special day itself.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@planmyshadi.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Couples</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Find Vendors</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Budget Planner</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Digital Invitations</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Wedding Checklist</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Vendors</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-rose-400 transition-colors">List Your Business</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Vendor Dashboard</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PlanMyShadi. All rights reserved. Made with ❤️ for couples in love.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
