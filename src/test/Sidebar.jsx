// components/Shop/Sidebar.jsx
export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 p-4 bg-white rounded shadow-sm">
      <div className="mb-6">
        <label className="block text-xs font-semibold mb-2">Filter by Price</label>
        <input type="range" min="10" max="100" className="w-full" />
        <div className="flex justify-between text-xs mt-1">
          <span>$10</span>
          <span>$100</span>
        </div>
        <button className="mt-2 w-full bg-teal-600 text-white py-1 rounded">Filter</button>
      </div>
      <div className="mb-6">
        <h4 className="font-semibold text-sm mb-2">Product Categories</h4>
        <ul className="text-xs space-y-1">
          <li>Accessories (4)</li>
          <li>Dresses (2)</li>
          <li>Pants & Jeans (3)</li>
          <li>Uncategorized (1)</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-2">Top Rated Products</h4>
        <ul className="text-xs space-y-2">
          <li>Tunic Dress ★★★★★ $40</li>
          <li>Belted Dress ★★★★☆ $14</li>
          <li>Wood Heel ★★★★☆ $67</li>
        </ul>
      </div>
    </aside>
  );
}