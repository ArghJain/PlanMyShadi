
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      wedding: "Beach Wedding, Goa",
      content: "EazyWed made our dream beach wedding a reality! The vendor recommendations were spot-on, and the budget tracking helped us save ₹50,000. The digital invitations were absolutely stunning!",
      rating: 5,
      image: "👰🏻"
    },
    {
      name: "Priya & Arjun",
      wedding: "Traditional Wedding, Jaipur",
      content: "The AI chatbot was incredibly helpful in finding the perfect vendors for our traditional Rajasthani wedding. Everything was so well organized, and the real-time budget updates were a lifesaver!",
      rating: 5,
      image: "🤵🏻"
    },
    {
      name: "Emma & David",
      wedding: "Garden Wedding, Bangalore",
      content: "From vendor booking to digital invitations, EazyWed handled everything seamlessly. The platform's elegance matches the joy it brought to our wedding planning journey. Highly recommended!",
      rating: 5,
      image: "👸🏼"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Love Stories Made
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Effortless</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of couples who trusted EazyWed to make their wedding planning journey beautiful and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-white shadow-xl border-0 overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-8 w-8 text-rose-500" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-rose-600">{testimonial.wedding}</p>
                  </div>
                </div>
              </CardContent>
              <div className="absolute -bottom-2 -left-2 h-16 w-16 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 opacity-5 group-hover:opacity-10 transition-opacity"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
