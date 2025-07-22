
import { Star, MapPin, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Vendor {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  location: string;
  image: string;
  services: string[];
  availability: string;
}

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard = ({ vendor }: VendorCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-600"
            }`}
          />
        </button>
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              vendor.availability === "Available"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {vendor.availability}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">
            {vendor.name}
          </h3>
          <div className="text-lg font-bold text-rose-600">
            {vendor.price}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-2">{vendor.category}</p>

        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{vendor.rating}</span>
            <span className="text-sm text-gray-500">({vendor.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            {vendor.location}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {vendor.services.slice(0, 2).map((service, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {service}
              </span>
            ))}
            {vendor.services.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                +{vendor.services.length - 2} more
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white"
            disabled={vendor.availability === "Booked"}
          >
            <Calendar className="h-4 w-4 mr-2" />
            {vendor.availability === "Available" ? "Book Now" : "Booked"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
