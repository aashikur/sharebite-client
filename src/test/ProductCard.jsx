// components/Shop/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition duration-300 rounded-xl p-2 flex flex-col items-center space-y-3 border border-gray-100 dark:border-gray-700">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-square object-cover rounded-sm shadow-sm"
      />

      <div className="text-center space-y-1">
        <h3 className="font-medium text-base text-gray-800 dark:text-gray-100">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>

        <div className="flex justify-center items-center gap-2 mt-2">
          <div className="text-lg font-semibold text-teal-600 dark:text-teal-400">
            ${product.price}
          </div>

          {product.sale && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              On Sale
            </span>
          )}
        </div>
      </div>
    </div>
  );
}