import React from "react";
// import { Home } from "lucide-react";
import { Sidebar } from "../Sidebar/Sidebar";
import { StatsBanner } from "../StatsBanners/StatsBanner";
import { ProductCard } from "../ProductCard/ProductCard";
import { CartSidebar } from "../CartSider/CartSider";
import Nav from "../Nav/Nav";
import { useAddContext } from "../Context/ContextProvider";

export const Homepage = () => {
  const { isDark, filteredProducts, selectedCategory } = useAddContext();
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <Nav />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div
              className="mb-8"
              style={{ animation: "fadeInUp 0.6s ease-out" }}
            >
              <h1
                className={`text-3xl sm:text-4xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {selectedCategory === "All" ? "All Products" : selectedCategory}
              </h1>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Showing {filteredProducts.length} products
              </p>
            </div>

            <StatsBanner />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </main>
      </div>

      <CartSidebar />
    </div>
  );
};
