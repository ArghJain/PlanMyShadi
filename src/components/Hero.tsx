
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-pink-100/20"></div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center space-x-2 rounded-full bg-rose-100 px-4 py-2 text-rose-800">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Where Elegance Meets Joy</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
            Plan Your
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Dream Wedding </span>
            with PlanMyShadi
          </h1>
          
          <p className="mb-8 text-xl text-gray-600 lg:text-2xl">
            The comprehensive wedding planning platform that simplifies vendor booking, 
            budget management, and creates unforgettable digital experiences for your special day.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-rose-600 hover:to-pink-700 hover:shadow-xl"
            >
              Start Planning Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-rose-300 px-8 py-4 text-lg font-semibold text-rose-700 transition-all hover:bg-rose-50"
            >
              Join as Vendor
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>10,000+ Happy Couples</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>5,000+ Verified Vendors</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span>50+ Cities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
