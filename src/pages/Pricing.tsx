
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Heart, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for couples just starting their wedding planning journey",
      features: [
        "Basic vendor search",
        "Wedding checklist",
        "Budget tracker (up to ₹5 lakhs)",
        "Guest list (up to 50 guests)",
        "Basic digital invitations",
        "Community support"
      ],
      cta: "Get Started Free",
      popular: false,
      icon: Heart
    },
    {
      name: "Premium",
      price: "₹999",
      period: "per month",
      description: "Everything you need for comprehensive wedding planning",
      features: [
        "Everything in Free",
        "Unlimited vendor search & messaging",
        "Advanced budget management",
        "Guest list (up to 300 guests)",
        "Premium digital invitations",
        "Vendor contract management",
        "Timeline management",
        "Priority support",
        "Wedding website"
      ],
      cta: "Start Premium Trial",
      popular: true,
      icon: Crown
    },
    {
      name: "Luxury",
      price: "₹2,499",
      period: "per month",
      description: "For couples who want the ultimate wedding planning experience",
      features: [
        "Everything in Premium",
        "Dedicated wedding planner",
        "Unlimited guests",
        "Custom invitation design",
        "Vendor negotiation assistance",
        "Real-time wedding coordination",
        "Post-wedding analytics",
        "Premium vendor partnerships",
        "24/7 concierge support"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex items-center space-x-2 rounded-full bg-rose-100 px-4 py-2 text-rose-800">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm font-medium">Simple Pricing</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Choose the Perfect Plan for Your
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Wedding Journey</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                From free planning tools to luxury concierge service, we have the right plan to make your wedding dreams come true.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div 
                    key={index} 
                    className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 ${
                      plan.popular ? 'border-rose-500 scale-105' : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl mb-4 mx-auto">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full py-3 font-semibold ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg hover:shadow-xl' 
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600">
                All plans include a 14-day free trial. No credit card required for Free plan.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I change my plan anytime?
                  </h3>
                  <p className="text-gray-600">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What happens to my data if I cancel?
                  </h3>
                  <p className="text-gray-600">
                    Your data remains accessible for 30 days after cancellation. You can export all your information or reactivate your account during this period.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you offer refunds?
                  </h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
