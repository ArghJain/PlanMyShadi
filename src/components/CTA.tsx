
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center space-x-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Start Your Journey</span>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Plan Your
            <br />
            Dream Wedding?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of couples who chose EazyWed for their special day. 
            Experience the perfect blend of elegance, technology, and joy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-rose-600 px-8 py-4 text-lg font-semibold shadow-xl transition-all hover:bg-gray-50 hover:shadow-2xl hover:scale-105 group"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              View Demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-white/60"></div>
              <span>Free to start</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-white/60"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-white/60"></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-white/10 blur-xl"></div>
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-white/5 blur-xl"></div>
    </section>
  );
};

export default CTA;
