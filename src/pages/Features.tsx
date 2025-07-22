
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Heart, Calendar, Users, Camera, CreditCard, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Vendor Discovery",
      description: "Find and connect with verified wedding vendors in your area. Browse portfolios, read reviews, and compare services all in one place.",
      highlights: ["5000+ verified vendors", "Real customer reviews", "Portfolio galleries", "Direct messaging"]
    },
    {
      icon: Calendar,
      title: "Wedding Planning Timeline",
      description: "Stay organized with our comprehensive wedding planning checklist and timeline. Never miss an important milestone.",
      highlights: ["Customizable timeline", "Task reminders", "Progress tracking", "Milestone celebrations"]
    },
    {
      icon: CreditCard,
      title: "Budget Management",
      description: "Keep track of your wedding expenses with our intuitive budget planner. Monitor spending and stay within your budget.",
      highlights: ["Expense tracking", "Budget alerts", "Payment schedules", "Cost breakdown"]
    },
    {
      icon: Camera,
      title: "Digital Invitations",
      description: "Create beautiful digital wedding invitations that reflect your style. Track RSVPs and manage your guest list effortlessly.",
      highlights: ["Custom designs", "RSVP tracking", "Guest management", "Mobile responsive"]
    },
    {
      icon: MessageSquare,
      title: "Vendor Communication",
      description: "Streamline communication with all your vendors in one centralized platform. Keep all conversations organized.",
      highlights: ["Unified inbox", "File sharing", "Appointment scheduling", "Contract management"]
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your wedding data is protected with enterprise-grade security. Focus on planning while we handle the technical details.",
      highlights: ["Data encryption", "Regular backups", "24/7 monitoring", "GDPR compliant"]
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
                  <span className="text-sm font-medium">Everything You Need</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Powerful Features for Your
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Dream Wedding</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover all the tools and features that make PlanMyShadi the most comprehensive wedding planning platform for modern couples.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Start Planning Today
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-rose-100">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl mb-6">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of couples who are planning their dream weddings with PlanMyShadi's powerful features.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-rose-600 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Get Started Free
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
