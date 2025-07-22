
import { Search, Brain, Calculator, Mail, Users, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Vendor Booking & Management",
      description: "Browse, compare, and book vendors with integrated payment options. Communicate seamlessly through in-app messaging.",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Get personalized vendor suggestions tailored to your preferences, budget, and location using our smart recommendation engine.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Calculator,
      title: "Real-Time Budget Tracking",
      description: "Manage your wedding budget with categorized expense tracking, real-time updates, and smart cost-saving insights.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Digital Invitations",
      description: "Create stunning customizable invitations with our drag-and-drop editor. Send via email or WhatsApp with RSVP tracking.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Comprehensive Profiles",
      description: "Manage your wedding plans with personalized dashboards. Vendors showcase services with verified, trusted profiles.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: MessageCircle,
      title: "AI Chatbot Assistance",
      description: "Get 24/7 support with our AI-powered chatbot for instant assistance, personalized guidance, and vendor inquiries.",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Your
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Perfect Wedding</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with elegant design 
            to make your wedding planning journey effortless and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
              <div className={`absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-r ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
