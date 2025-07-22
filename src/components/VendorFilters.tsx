
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface VendorFiltersProps {
  showFilters: boolean;
  onToggleFilters: () => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
}

const VendorFilters = ({
  showFilters,
  onToggleFilters,
  priceRange,
  onPriceRangeChange
}: VendorFiltersProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleFilters}
          className="lg:hidden"
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium text-gray-900 mb-3 block">
            Price Range
          </Label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}+</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div>
          <Label className="text-sm font-medium text-gray-900 mb-3 block">
            Minimum Rating
          </Label>
          <div className="space-y-2">
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <label key={rating} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  className="text-rose-600 focus:ring-rose-500"
                />
                <span className="text-sm text-gray-700">
                  {rating}+ Stars
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <Label className="text-sm font-medium text-gray-900 mb-3 block">
            Availability
          </Label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="text-rose-600 focus:ring-rose-500"
              />
              <span className="text-sm text-gray-700">Available Now</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="text-rose-600 focus:ring-rose-500"
              />
              <span className="text-sm text-gray-700">Available This Month</span>
            </label>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            onPriceRangeChange([0, 5000]);
            // Reset other filters
          }}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default VendorFilters;
