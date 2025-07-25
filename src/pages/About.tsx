import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Happy Couples", icon: Heart },
    { number: "5,000+", label: "Verified Vendors", icon: Users },
    { number: "50+", label: "Cities Covered", icon: Globe },
    { number: "99%", label: "Satisfaction Rate", icon: Award }
  ];

  // const team = [
  //   {
  //     name: "Priya Sharma",
  //     role: "Co-Founder & CEO",
  //     image: "/placeholder.svg",
  //     description: "Former wedding planner with 10+ years of experience in luxury weddings."
  //   },
  //   {
  //     name: "Rahul Patel",
  //     role: "Co-Founder & CTO",
  //     image: "/placeholder.svg",
  //     description: "Tech entrepreneur passionate about solving real-world problems through technology."
  //   },
  //   {
  //     name: "Anjali Gupta",
  //     role: "Head of Vendor Relations",
  //     image: "/placeholder.svg",
  //     description: "Expert in vendor management with extensive network across India."
  //   },
  //   {
  //     name: "Vikram Singh",
  //     role: "Head of Product",
  //     image: "/placeholder.svg",
  //     description: "Product strategist focused on creating delightful user experiences."
  //   }
  // ];

   const team = [
    {
      name: "Argh Jain",
      image: "/pic.JPG",
      description: "Tech entrepreneur passionate about solving real-world problems through technology.",
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
                  <span className="text-sm font-medium">Our Story</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Making Wedding Dreams
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Come True</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                PlanMyShadi was born from the belief that planning your dream wedding should be as beautiful and joyful as the day itself. We're here to transform the wedding planning experience for couples across India.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Founded in 2023, PlanMyShadi emerged from the personal wedding planning struggles of our founders. 
                      After experiencing the chaos and stress of traditional wedding planning, we knew there had to be a better way.
                    </p>
                    <p>
                      We set out to create a platform that would bring together technology, elegance, and joy to make 
                      wedding planning an experience couples would actually enjoy. Today, we're proud to be India's 
                      most comprehensive wedding planning platform.
                    </p>
                    <p>
                      Our mission is simple: to ensure every couple can plan their dream wedding without stress, 
                      within budget, and with complete confidence that their special day will be perfect.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-lg">
                      To become the most trusted wedding planning companion for couples worldwide, 
                      making every wedding celebration a seamless blend of tradition, technology, and joy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-xl text-gray-600">
                These numbers represent the trust couples and vendors place in us every day.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl mb-4 mx-auto">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/*
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                <p className="text-xl text-gray-600">
                  The passionate people behind PlanMyShadi who work tirelessly to make your wedding dreams come true.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                <p className="text-xl text-gray-600">
                  The passionate people behind PlanMyShadi who work tirelessly to make your wedding dreams come true.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Wedding Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the PlanMyShadi family and let us help you create the wedding of your dreams.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-rose-600 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
