import React from "react";
import { X, Star, Filter,} from 'lucide-react';
import { useAddContext } from "../Context/ContextProvider";
export const Sidebar = () => {
  const { 
    isDark, 
    sidebarOpen, 
    setSidebarOpen, 
    selectedCategory, 
    setSelectedCategory 
  } = useAddContext();

  const categories = ['All', 'Electronics', 'Accessories', 'Home', 'Stationery'];
  const priceRanges = ['Under $25', '$25 - $50', '$50 - $100', 'Over $100'];
  const ratings = [4, 3, 2];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSidebarOpen(false);
  };

  return (
    <>
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen z-50 lg:z-0
        w-64 transform transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isDark ? 'bg-gray-900' : 'bg-white'}
        shadow-lg lg:block overflow-y-auto
      `}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Menu
            </h2>
            <button 
              onClick={() => setSidebarOpen(false)} 
              className="hover:rotate-90 transition-transform duration-300"
            >
              <X className={`w-6 h-6 ${isDark ? 'text-gray-200' : 'text-gray-700'}`} />
            </button>
          </div>

          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Filter className="w-5 h-5 mr-2" />
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : isDark 
                        ? 'hover:bg-gray-800 text-gray-300' 
                        : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Price Range
            </h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label key={range} className="flex items-center group cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mr-2 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 transition-transform group-hover:scale-110" 
                  />
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} group-hover:text-blue-600 transition-colors`}>
                    {range}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Rating
            </h3>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <label key={rating} className="flex items-center group cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mr-2 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 transition-transform group-hover:scale-110" 
                  />
                  <div className="flex items-center">
                    {Array(rating).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform" 
                        style={{ transitionDelay: `${i * 0.05}s` }} 
                      />
                    ))}
                    <span className={`ml-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      & up
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};