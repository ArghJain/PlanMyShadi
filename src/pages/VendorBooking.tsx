
import { useState } from "react";
import { Search, MapPin, Star, Calendar, Heart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VendorCard from "@/components/VendorCard";
import VendorCategories from "@/components/VendorCategories";
import VendorFilters from "@/components/VendorFilters";

// Mock vendor data
// const mockVendors = [
//   {
//     id: 1,
//     name: "Elegant Moments Photography",
//     category: "Photography",
//     rating: 4.9,
//     reviews: 127,
//     price: "$2,500",
//     location: "Los Angeles, CA",
//     image: "/placeholder.svg",
//     services: ["Wedding Photography", "Engagement Shoots", "Albums"],
//     availability: "Available"
//   },
//   {
//     id: 2,
//     name: "Bloom & Blossom Florists",
//     category: "Florists",
//     rating: 4.8,
//     reviews: 89,
//     price: "$800",
//     location: "Beverly Hills, CA",
//     image: "/placeholder.svg",
//     services: ["Bridal Bouquets", "Ceremony Decor", "Reception Centerpieces"],
//     availability: "Available"
//   },
//   {
//     id: 3,
//     name: "Harmony Strings Quartet",
//     category: "Music",
//     rating: 4.7,
//     reviews: 64,
//     price: "$1,200",
//     location: "Santa Monica, CA",
//     image: "/placeholder.svg",
//     services: ["Ceremony Music", "Cocktail Hour", "Reception"],
//     availability: "Booked"
//   },
//   {
//     id: 4,
//     name: "Gourmet Delights Catering",
//     category: "Catering",
//     rating: 4.9,
//     reviews: 156,
//     price: "$85/person",
//     location: "Hollywood, CA",
//     image: "/placeholder.svg",
//     services: ["Full Service Catering", "Bar Service", "Wedding Cakes"],
//     availability: "Available"
//   },
//   {
//     id: 5,
//     name: "Dream Venue Gardens",
//     category: "Venues",
//     rating: 4.8,
//     reviews: 203,
//     price: "$3,500",
//     location: "Malibu, CA",
//     image: "/placeholder.svg",
//     services: ["Outdoor Ceremonies", "Reception Halls", "Bridal Suites"],
//     availability: "Available"
//   },
//   {
//     id: 6,
//     name: "Luxe Bridal Boutique",
//     category: "Attire",
//     rating: 4.6,
//     reviews: 78,
//     price: "$1,800",
//     location: "West Hollywood, CA",
//     image: "/placeholder.svg",
//     services: ["Wedding Dresses", "Alterations", "Accessories"],
//     availability: "Available"
//   }
// ];
const mockVendors = [
  {
    id: 1,
    name: "Moments Captured 1",
    category: "Photography",
    rating: 4.7,
    reviews: 215,
    price: "₹20000",
    location: "Amritsar",
    image: "/placeholder.svg",
    services: ["Wedding Photography", "Engagement Shoots", "Albums"],
    availability: "Available"
  },
  {
    id: 2,
    name: "Shree Shringar 2",
    category: "Attire",
    rating: 4.8,
    reviews: 197,
    price: "₹30000",
    location: "Agra",
    image: "/placeholder.svg",
    services: ["Reception Centerpieces", "Ceremony Decor", "Bridal Bouquets"],
    availability: "Booked"
  },
  {
    id: 3,
    name: "Candid Vows 3",
    category: "Photography",
    rating: 4.6,
    reviews: 115,
    price: "₹40000",
    location: "Chandigarh",
    image: "/placeholder.svg",
    services: ["Engagement Shoots", "Wedding Photography", "Albums"],
    availability: "Available"
  },
  {
    id: 4,
    name: "Annapurna Caterers 4",
    category: "Catering",
    rating: 4.8,
    reviews: 210,
    price: "₹200000",
    location: "Amritsar",
    image: "/placeholder.svg",
    services: ["Reception Centerpieces", "Ceremony Decor", "Bridal Bouquets"],
    availability: "Available"
  },
  {
    id: 5,
    name: "Shaadi Blooms 5",
    category: "Florists",
    rating: 5.0,
    reviews: 171,
    price: "₹150000",
    location: "Lucknow",
    image: "/placeholder.svg",
    services: ["Ceremony Decor", "Reception Centerpieces", "Bridal Bouquets"],
    availability: "Available"
  },
  {
    id: 6,
    name: "Vivah Couture 6",
    category: "Attire",
    rating: 4.6,
    reviews: 122,
    price: "₹75000",
    location: "Chandigarh",
    image: "/placeholder.svg",
    services: ["Bridal Bouquets", "Ceremony Decor", "Reception Centerpieces"],
    availability: "Booked"
  },
  {
    id: 7,
    name: "Sundar Garden 7",
    category: "Venues",
    rating: 4.3,
    reviews: 177,
    price: "₹250000",
    location: "Dehradun",
    image: "/placeholder.svg",
    services: ["Bridal Bouquets", "Ceremony Decor", "Reception Centerpieces"],
    availability: "Booked"
  },
  {
    id: 8,
    name: "Candid Vows 8",
    category: "Photography",
    rating: 5.0,
    reviews: 62,
    price: "₹75000",
    location: "Chandigarh",
    image: "/placeholder.svg",
    services: ["Engagement Shoots", "Albums", "Wedding Photography"],
    availability: "Booked"
  },
  {
    id: 9,
    name: "Raaga Ensemble 9",
    category: "Music",
    rating: 4.7,
    reviews: 118,
    price: "₹50000",
    location: "New Delhi",
    image: "/placeholder.svg",
    services: ["Bridal Bouquets", "Reception Centerpieces", "Ceremony Decor"],
    availability: "Available"
  },
  {
    id: 10,
    name: "Shree Shringar 10",
    category: "Attire",
    rating: 5.0,
    reviews: 184,
    price: "₹50000",
    location: "Amritsar",
    image: "/placeholder.svg",
    services: ["Reception Centerpieces", "Ceremony Decor", "Bridal Bouquets"],
    availability: "Available"
  },
  {
    id: 11,
    name: "Shaadi Blooms 11",
    category: "Florists",
    rating: 4.4,
    reviews: 161,
    price: "₹50000",
    location: "Shimla",
    image: "/placeholder.svg",
    services: ["Ceremony Decor", "Bridal Bouquets", "Reception Centerpieces"],
    availability: "Booked"
  },
  {
    id: 12,
    name: "Wedding Beats 12",
    category: "Music",
    rating: 4.4,
    reviews: 218,
    price: "₹40000",
    location: "Amritsar",
    image: "/placeholder.svg",
    services: ["Ceremony Decor", "Reception Centerpieces", "Bridal Bouquets"],
    availability: "Booked"
  },
  {
    id: 13,
    name: "Candid Vows 13",
    category: "Photography",
    rating: 4.9,
    reviews: 207,
    price: "₹250000",
    location: "Shimla",
    image: "/placeholder.svg",
    services: ["Wedding Photography", "Albums", "Engagement Shoots"],
    availability: "Booked"
  },
  {
    id: 14,
    name: "Sundar Garden 14",
    category: "Venues",
    rating: 4.9,
    reviews: 243,
    price: "₹100000",
    location: "Lucknow",
    image: "/placeholder.svg",
    services: ["Ceremony Decor", "Bridal Bouquets", "Reception Centerpieces"],
    availability: "Available"
  },
  {
    id: 15,
    name: "Sundar Garden 15",
    category: "Venues",
    rating: 4.5,
    reviews: 65,
    price: "₹75000",
    location: "Shimla",
    image: "/placeholder.svg",
    services: ["Bridal Bouquets", "Ceremony Decor", "Reception Centerpieces"],
    availability: "Available"
  },
  {
    id: 16,
    name: "The Flower Cart 16",
    category: "Florists",
    rating: 4.9,
    reviews: 148,
    price: "₹50000",
    location: "Jaipur",
    image: "/placeholder.svg",
    services: ["Reception Centerpieces", "Bridal Bouquets", "Ceremony Decor"],
    availability: "Available"
  },
  {
    id: 17,
    name: "Shree Shringar 17",
    category: "Attire",
    rating: 4.5,
    reviews: 137,
    price: "₹10000",
    location: "Dehradun",
    image: "/placeholder.svg",
    services: ["Reception Centerpieces", "Ceremony Decor", "Bridal Bouquets"],
    availability: "Available"
  },
  {
    id: 18,
    name: "Riwaaz Bridal Studio 18",
    category: "Attire",
    rating: 4.9,
    reviews: 81,
    price: "₹50000",
    location: "Agra",
    image: "/placeholder.svg",
    services: ["Ceremony Decor", "Bridal Bouquets", "Reception Centerpieces"],
    availability: "Available"
  },
  {
    id: 19,
    name: "Vivah Couture 19",
    category: "Attire",
    rating: 4.4,
    reviews: 184,
    price: "₹30000",
    location: "Varanasi",
    image: "/placeholder.svg",
    services: ["Reception Centerpieces", "Bridal Bouquets", "Ceremony Decor"],
    availability: "Available"
  },
  {
    id: 20,
    name: "Panache Boutique 20",
    category: "Attire",
    rating: 4.6,
    reviews: 165,
    price: "₹200000",
    location: "Chandigarh",
    image: "/placeholder.svg",
    services: ["Ceremony Decor", "Bridal Bouquets", "Reception Centerpieces"],
    availability: "Available"
  }
];

const VendorBooking = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [location, setLocation] = useState("");

  const filteredVendors = mockVendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || vendor.category === selectedCategory;
    const matchesLocation = !location || vendor.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Find Your Perfect Wedding Vendors
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover and book trusted professionals for your special day
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg p-4 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search vendors, services, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-gray-900"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 h-12 text-gray-900 md:w-48"
                  />
                </div>
                <Button className="h-12 px-8 bg-rose-600 hover:bg-rose-700">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <VendorCategories
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            <VendorFilters
              showFilters={showFilters}
              onToggleFilters={() => setShowFilters(!showFilters)}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === "All" ? "All Vendors" : selectedCategory}
                </h2>
                <p className="text-gray-600">
                  {sortedVendors.length} vendors found
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                
                <div className="flex items-center gap-2">
                  <Label htmlFor="sort" className="text-sm font-medium">
                    Sort by:
                  </Label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                  >
                    <option value="rating">Rating</option>
                    <option value="reviews">Reviews</option>
                    <option value="name">Name</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Vendor Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>

            {/* No Results */}
            {sortedVendors.length === 0 && (
              <div className="text-center py-16">
                <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No vendors found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or explore different categories
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VendorBooking;
