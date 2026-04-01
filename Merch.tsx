import { Link } from "react-router";
import { ShoppingBag, Heart, Search, Filter, Star, TrendingUp, Package, Truck, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

export function Merch() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("featured");

  const merchItems = [
    {
      id: 1,
      name: "Taylor Swift Eras Tour T-Shirt",
      artist: "Taylor Swift",
      price: "$45.00",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
      category: "apparel",
      rating: 4.8,
      reviews: 342,
      featured: true,
      inStock: true,
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Drake For All The Dogs Hoodie",
      artist: "Drake",
      price: "$75.00",
      originalPrice: "$90.00",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      category: "apparel",
      rating: 4.9,
      reviews: 189,
      featured: true,
      inStock: true,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Coachella 2026 Festival Poster",
      artist: "Coachella",
      price: "$25.00",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b4?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.6,
      reviews: 98,
      featured: false,
      inStock: true,
      sizes: null
    },
    {
      id: 4,
      name: "Beyoncé Renaissance Tour Cap",
      artist: "Beyoncé",
      price: "$35.00",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.7,
      reviews: 156,
      featured: true,
      inStock: true,
      sizes: ["One Size"]
    },
    {
      id: 5,
      name: "NBA Finals 2026 Championship Jersey",
      artist: "NBA",
      price: "$120.00",
      originalPrice: "$150.00",
      image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=400&fit=crop",
      category: "apparel",
      rating: 5.0,
      reviews: 412,
      featured: true,
      inStock: false,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 6,
      name: "Hamilton Broadway Tote Bag",
      artist: "Hamilton",
      price: "$28.00",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.5,
      reviews: 87,
      featured: false,
      inStock: true,
      sizes: null
    },
    {
      id: 7,
      name: "Rolling Stones No Filter Tour Vinyl",
      artist: "Rolling Stones",
      price: "$55.00",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1488509082528-cefbba5ad692?w=400&h=400&fit=crop",
      category: "collectibles",
      rating: 4.9,
      reviews: 234,
      featured: false,
      inStock: true,
      sizes: null
    },
    {
      id: 8,
      name: "Travis Scott Utopia Long Sleeve",
      artist: "Travis Scott",
      price: "$65.00",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&h=400&fit=crop",
      category: "apparel",
      rating: 4.8,
      reviews: 276,
      featured: true,
      inStock: true,
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 9,
      name: "Lollapalooza 2026 Water Bottle",
      artist: "Lollapalooza",
      price: "$22.00",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      category: "accessories",
      rating: 4.4,
      reviews: 123,
      featured: false,
      inStock: true,
      sizes: null
    }
  ];

  const categories = [
    { id: "all", label: "All Items", count: merchItems.length },
    { id: "apparel", label: "Apparel", count: merchItems.filter(i => i.category === "apparel").length },
    { id: "accessories", label: "Accessories", count: merchItems.filter(i => i.category === "accessories").length },
    { id: "collectibles", label: "Collectibles", count: merchItems.filter(i => i.category === "collectibles").length }
  ];

  const sortOptions = [
    { id: "featured", label: "Featured" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "rating", label: "Top Rated" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? merchItems 
    : merchItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/member-dashboard" className="text-pink-500 hover:text-pink-400 text-sm mb-4 inline-flex items-center gap-1">
            ← Back to Member Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <ShoppingBag className="size-8 text-purple-500" />
              </div>
              <div>
                <h1 className="text-white text-3xl">Official Merch Store</h1>
                <p className="text-gray-400">Authentic merchandise from your favorite artists and events</p>
              </div>
            </div>
            <Button className="bg-[#1a1d23] hover:bg-[#24272e] text-white px-4 py-2 rounded-lg border border-[#24272e] flex items-center gap-2">
              <ShoppingBag className="size-4" />
              Cart (0)
            </Button>
          </div>
        </div>

        {/* Benefits Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#1a1d23] rounded-lg p-4 border border-[#24272e] flex items-center gap-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Shield className="size-5 text-green-500" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">100% Authentic</div>
              <div className="text-gray-400 text-xs">Official merchandise only</div>
            </div>
          </div>
          
          <div className="bg-[#1a1d23] rounded-lg p-4 border border-[#24272e] flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Truck className="size-5 text-blue-500" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">Free Shipping</div>
              <div className="text-gray-400 text-xs">On orders over $50</div>
            </div>
          </div>
          
          <div className="bg-[#1a1d23] rounded-lg p-4 border border-[#24272e] flex items-center gap-3">
            <div className="p-2 bg-pink-500/20 rounded-lg">
              <Package className="size-5 text-pink-500" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">Member Exclusive</div>
              <div className="text-gray-400 text-xs">20% off select items</div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] sticky top-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-white font-semibold mb-4">
                  <Filter className="size-4" />
                  Filters
                </div>

                {/* Search */}
                <div className="relative mb-6">
                  <Search className="size-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search merch..."
                    className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg pl-10 pr-4 py-2 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <div className="text-gray-400 text-xs uppercase mb-3">Categories</div>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          selectedCategory === category.id
                            ? 'bg-pink-500/20 text-pink-400 font-medium'
                            : 'text-gray-400 hover:text-white hover:bg-[#24272e]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.label}</span>
                          <span className="text-xs">{category.count}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <div className="text-gray-400 text-xs uppercase mb-3">Sort By</div>
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filters */}
            <div className="lg:hidden mb-6 flex gap-3">
              <Button className="flex-1 bg-[#1a1d23] hover:bg-[#24272e] text-white px-4 py-2 rounded-lg border border-[#24272e] flex items-center justify-center gap-2">
                <Filter className="size-4" />
                Filters
              </Button>
              <Button className="flex-1 bg-[#1a1d23] hover:bg-[#24272e] text-white px-4 py-2 rounded-lg border border-[#24272e] flex items-center justify-center gap-2">
                <TrendingUp className="size-4" />
                Sort
              </Button>
            </div>

            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <div className="text-gray-400 text-sm">
                Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  selectedCategory === category.id && category.id !== "all" && (
                    <div key={category.id} className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full flex items-center gap-2">
                      {category.label}
                      <button onClick={() => setSelectedCategory("all")} className="hover:text-pink-300">×</button>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-[#1a1d23] rounded-lg overflow-hidden border border-[#24272e] hover:border-pink-500/50 transition-all group">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-white font-semibold px-4 py-2 bg-red-500/80 rounded-lg">
                          Out of Stock
                        </div>
                      </div>
                    )}
                    {item.featured && item.inStock && (
                      <div className="absolute top-3 left-3 bg-purple-500/90 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Featured
                      </div>
                    )}
                    {item.originalPrice && (
                      <div className="absolute top-3 right-3 bg-red-500/90 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Sale
                      </div>
                    )}
                    <button className="absolute bottom-3 right-3 p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-pink-500/80 transition-colors opacity-0 group-hover:opacity-100">
                      <Heart className="size-5 text-white" />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="text-gray-400 text-xs mb-1">{item.artist}</div>
                    <h3 className="text-white font-medium mb-2 line-clamp-2 min-h-[2.5rem]">{item.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`size-3 ${
                              i < Math.floor(item.rating)
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-xs">({item.reviews})</span>
                    </div>

                    {/* Sizes */}
                    {item.sizes && (
                      <div className="mb-3">
                        <div className="text-gray-400 text-xs mb-1">Available Sizes</div>
                        <div className="flex gap-1">
                          {item.sizes.map((size) => (
                            <div
                              key={size}
                              className="px-2 py-1 bg-[#0a0b0e] border border-[#24272e] rounded text-gray-400 text-xs"
                            >
                              {size}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-white font-bold text-lg">{item.price}</div>
                      {item.originalPrice && (
                        <div className="text-gray-500 text-sm line-through">{item.originalPrice}</div>
                      )}
                    </div>

                    {/* Actions */}
                    <Button
                      disabled={!item.inStock}
                      className={`w-full px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 ${
                        item.inStock
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingBag className="size-4" />
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="bg-[#1a1d23] rounded-lg p-12 border border-[#24272e] text-center">
                <ShoppingBag className="size-12 text-gray-600 mx-auto mb-4" />
                <div className="text-white text-lg font-medium mb-2">No items found</div>
                <div className="text-gray-400 text-sm mb-4">
                  Try adjusting your filters or search terms
                </div>
                <Button
                  onClick={() => setSelectedCategory("all")}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}