import React from 'react'
import { ShoppingCart, Search, Menu, X, Heart, Star, Filter, ChevronDown, Minus, Plus, Trash2, Home, Package, User, Moon, Sun, TrendingUp, Zap, Award } from 'lucide-react';
import { useAddContext } from '../Context/ContextProvider';
const Nav = () => {
   const { 
    isDark, 
    toggleTheme, 
    cartCount, 
    searchOpen,
    setSearchOpen,
    onMenuClick,
    onCartClick,
    isScrolled,
    isInWishList,
    setWishlistOpen,
    setCartOpen,
    setSidebarOpen,
    wishlist,
    searchQuery,
    setSearchQuery
  } = useAddContext();
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 p-[1rem] ${
      isDark ? 'bg-gray-900' : 'bg-white'
    } ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden group">
              <Menu className={`cursor-pointer w-6 h-6 ${isDark ? 'text-gray-200' : 'text-gray-700'} group-hover:scale-110 transition-transform`} />
            </button>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Package className=" cursor-pointer w-8 h-8 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} hidden sm:block`}>
                Hubby
              </span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                isDark ? 'text-gray-400' : 'text-gray-400'
              } group-hover:text-blue-500 transition-colors`} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden group"
            >
              <Search className={`cursor-pointer w-6 h-6 ${isDark ? 'text-gray-200' : 'text-gray-700'} group-hover:scale-110 transition-transform`} />
            </button>
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <div className="relative w-6 h-6">
                <Sun className={`cursor-pointer absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 ${
                  isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <Moon className={`cursor-pointer absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
                  isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                }`} />
              </div>
            </button>

            <button className="hidden sm:block group" onClick={() => setWishlistOpen(true)}>
              <div className="relative">
                <Heart className={`cursor-pointer w-6 h-6 ${isDark ? 'text-gray-200' : 'text-gray-700'} hover:text-red-500 group-hover:scale-110 transition-all`} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </button>
            
            <button  onClick={() => setCartOpen(true)} className="relative group">
              <ShoppingCart className={`cursor-pointer w-6 h-6 ${isDark ? 'text-gray-200' : 'text-gray-700'} group-hover:text-blue-600 group-hover:scale-110 transition-all`} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Nav