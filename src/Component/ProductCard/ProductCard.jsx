import React,{useState} from 'react'
import { useAddContext } from '../Context/ContextProvider';
import { ShoppingCart, Heart, Star, Zap} from 'lucide-react';
export const ProductCard = ({ product, index }) => {
  const { isDark, addToCart, toggleWishlist, isInWishlist } = useAddContext();
  const [isHovered, setIsHovered] = useState(false);
  const liked = isInWishlist(product.id);

  return (
    <div 
      className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
    >
      <div className="relative overflow-hidden">
        <div className={`h-48 ${
          isDark ? 'bg-gradient-to-br from-gray-700 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
        } flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}>
          <span className={`text-6xl transition-all duration-500 ${
            isHovered ? 'scale-125 rotate-12' : 'scale-100'
          }`}>
            {product.image}
          </span>
        </div>
        
        {product.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
            <Zap className="w-3 h-3" />
            <span>Featured</span>
          </div>
        )}
        
        <button 
          onClick={() => toggleWishlist(product.id)}
          className={`absolute top-3 right-3 ${
            isDark ? 'bg-gray-700' : 'bg-white'
          } rounded-full p-2 shadow-md hover:scale-125 transition-all duration-300`}
        >
          <Heart className={`w-5 h-5 transition-all duration-300 ${
            liked ? 'fill-red-500 text-red-500 scale-110' : isDark ? 'text-gray-300' : 'text-gray-600'
          }`} />
        </button>
      </div>

      <div className="p-4">
        <h3 className={`font-semibold text-lg mb-1 truncate ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {product.name}
        </h3>
        <p className={`text-sm mb-2 truncate ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {product.description}
        </p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 transition-all duration-300 ${
                  i < Math.floor(product.rating) 
                    ? 'fill-yellow-400 text-yellow-400 scale-100' 
                    : 'text-gray-300 scale-90'
                }`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>
          <span className={`text-sm ml-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};