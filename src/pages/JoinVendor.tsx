import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Camera, Flower, Music, ChefHat, MapPin, Shirt, Users, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const JoinVendor = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    category: "",
    city: "",
    experience: ""
  });

  const categories = [
    { name: "Photography", icon: Camera },
    { name: "Videography", icon: Camera },
    { name: "Florists", icon: Flower },
    { name: "Music & DJ", icon: Music },
    { name: "Catering", icon: ChefHat },
    { name: "Venues", icon: MapPin },
    { name: "Wedding Attire", icon: Shirt },
    { name: "Makeup & Beauty", icon: Heart },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Access to Quality Clients",
      description: "Connect with serious couples actively planning their weddings"
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Increase bookings and revenue with our marketing tools"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Get paid securely and on time through our platform"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Vendor registration data:", formData);
  };

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
                  <span className="text-sm font-medium">Join Our Network</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Grow Your Wedding Business with
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> PlanMyShadi</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join India's leading wedding platform and connect with thousands of couples planning their dream weddings. 
                Showcase your services, manage bookings, and grow your business with us.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PlanMyShadi?</h2>
              <p className="text-xl text-gray-600">
                Join over 5,000 wedding vendors who trust PlanMyShadi to grow their business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl mb-6 mx-auto">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Start Your Journey</h2>
                  <p className="text-gray-600">Fill out the form below to join our vendor network</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="businessName" className="text-gray-700 font-medium">
                        Business Name *
                      </Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="mt-2 h-12 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Your business name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="ownerName" className="text-gray-700 font-medium">
                        Owner Name *
                      </Label>
                      <Input
                        id="ownerName"
                        name="ownerName"
                        type="text"
                        required
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        className="mt-2 h-12 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 h-12 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 h-12 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-gray-700 font-medium">
                      Service Category *
                    </Label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="mt-2 w-full h-12 px-3 border border-gray-300 rounded-md focus:border-rose-500 focus:ring-rose-500 bg-white"
                    >
                      <option value="">Select your service category</option>
                      {categories.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="city" className="text-gray-700 font-medium">
                        City *
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-2 h-12 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Your city"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience" className="text-gray-700 font-medium">
                        Years of Experience *
                      </Label>
                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="mt-2 w-full h-12 px-3 border border-gray-300 rounded-md focus:border-rose-500 focus:ring-rose-500 bg-white"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-rose-600 hover:text-rose-700 font-medium">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-rose-600 hover:text-rose-700 font-medium">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Join PlanMyShadi Network
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                  Already a vendor?{" "}
                  <a href="/signin" className="text-rose-600 hover:text-rose-700 font-medium">
                    Sign in here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Join India's Fastest Growing Wedding Platform
              </h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-rose-600 mb-2">5,000+</div>
                  <div className="text-gray-600">Active Vendors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-rose-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Happy Couples</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-rose-600 mb-2">50+</div>
                  <div className="text-gray-600">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-rose-600 mb-2">₹50Cr+</div>
                  <div className="text-gray-600">Business Generated</div>
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

export default JoinVendor;
