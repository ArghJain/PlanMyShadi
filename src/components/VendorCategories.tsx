
import { Camera, Flower, Music, ChefHat, MapPin, Shirt } from "lucide-react";

interface VendorCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { name: "All", icon: null, count: 150 },
  { name: "Photography", icon: Camera, count: 45 },
  { name: "Florists", icon: Flower, count: 28 },
  { name: "Music", icon: Music, count: 22 },
  { name: "Catering", icon: ChefHat, count: 35 },
  { name: "Venues", icon: MapPin, count: 15 },
  { name: "Attire", icon: Shirt, count: 18 },
];

const VendorCategories = ({ selectedCategory, onCategoryChange }: VendorCategoriesProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.name;
          
          return (
            <button
              key={category.name}
              onClick={() => onCategoryChange(category.name)}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                isSelected
                  ? "bg-rose-50 text-rose-700 border border-rose-200"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                {Icon && <Icon className="h-5 w-5" />}
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-sm text-gray-500">
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VendorCategories;
