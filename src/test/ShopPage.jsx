import React from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

// Dummy product data
const products = [
  { id: 1, name: "Tunic Dress", category: "Dresses", price: 40, image: "https://picsum.photos/seed/dress1/300" },
  { id: 2, name: "Denim Bag", category: "Accessories", price: 34, image: "https://picsum.photos/seed/bag1/300" },
  { id: 3, name: "Skinny Jeans", category: "Pants & Jeans", price: 58, image: "https://picsum.photos/seed/jeans1/300" },
  { id: 4, name: "Wood Heel", category: "Accessories", price: 67, image: "https://picsum.photos/seed/heel1/300" },
  { id: 5, name: "Belted Dress", category: "Dresses", price: 14, image: "https://picsum.photos/seed/dress2/300", sale: true },
  { id: 6, name: "Isabelle Skirt", category: "Pants & Jeans", price: 49, image: "https://picsum.photos/seed/skirt1/300" },
  { id: 7, name: "Curzon Culotte", category: "Dresses", price: 32, image: "https://picsum.photos/seed/culotte1/300" },
  { id: 8, name: "Florence Point", category: "Accessories", price: 49, image: "https://picsum.photos/seed/point1/300" },
  { id: 9, name: "Tilly Bag", category: "Accessories", price: 42, image: "https://picsum.photos/seed/bag2/300" }
];

export default function ShopPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="w-full border-b text-xs py-2 flex justify-end px-4 space-x-2 text-gray-500">
        <span> {/* Social icons placeholder */} </span>
      </div>

      {/* Navigation */}
      <nav className="w-full flex justify-center py-4 border-b bg-white">
        <ul className="flex space-x-8 text-sm font-medium text-gray-700">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#" className="text-teal-600">Shop</a></li>
          <li><a href="#">Fashion</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Buy Theme</a></li>
        </ul>
      </nav>

      {/* Logo */}
      <header className="py-8 text-center bg-white">
        <h1 className="text-4xl font-bold tracking-wide">CHEER<span className="font-light">UP</span></h1>
        <p className="text-sm text-gray-500 mt-2">Modern Personal Blog Theme</p>
      </header>

      {/* Shop Title */}
      <div className="text-center py-6">
        <div className="uppercase text-xs text-gray-400 tracking-widest">Browsing</div>
        <h2 className="text-2xl font-semibold mt-1">The Shop</h2>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row gap-8">
        {/* Product List */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <select className="border rounded px-2 py-1 text-sm">
              <option>Sort by Latest</option>
              <option>Sort by Price</option>
            </select>
          </div>
          <ProductList products={products} />
        </section>
        {/* Sidebar */}
        <div className="w-full md:w-80 mt-8 md:mt-0">
          <Sidebar />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
          {/* About */}
          <div>
            <div className="mb-2 font-semibold">About</div>
            <p className="text-xs">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          </div>
          {/* Latest Posts */}
          <div>
            <div className="mb-2 font-semibold">Latest Posts</div>
            <ul className="space-y-1 text-xs">
              <li>My New Blond Hair</li>
              <li>Still in the Bed</li>
              <li>In a Casual Outfit</li>
            </ul>
          </div>
          {/* Top Rated Products */}
          <div>
            <div className="mb-2 font-semibold">Top Rated Products</div>
            <ul className="space-y-1 text-xs">
              <li>Tunic Dress ★★★★★ $40</li>
              <li>Belted Dress ★★★★☆ $14</li>
              <li>Wood Heel ★★★★☆ $67</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          © 2025 ThemeSphere. Designed by ThemeSphere.
        </div>
      </footer>
    </div>
  );
}