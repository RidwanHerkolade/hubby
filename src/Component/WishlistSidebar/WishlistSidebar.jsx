export const WishlistSidebar = () => {
  const { 
    isDark, 
    wishlistOpen, 
    setWishlistOpen, 
    wishlist,
    products,
    toggleWishlist,
    addToCart
  } = useAddContext();

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <>
      {wishlistOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={() => setWishlistOpen(false)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        />
      )}

      <div className={`
        fixed top-0 right-0 h-full w-full sm:w-96 z-50
        transform transition-all duration-500 ease-out
        ${wishlistOpen ? 'translate-x-0' : 'translate-x-full'}
        ${isDark ? 'bg-gray-900' : 'bg-white'}
        shadow-2xl flex flex-col
      `}>
        <div className={`p-6 border-b ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        } flex justify-between items-center`}>
          <h2 className={`text-2xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            My Wishlist
          </h2>
          <button 
            onClick={() => setWishlistOpen(false)} 
            className="hover:rotate-90 transition-transform duration-300"
          >
            <X className={`w-6 h-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="relative inline-block mb-4">
                <Heart className={`w-16 h-16 mx-auto ${
                  isDark ? 'text-gray-700' : 'text-gray-300'
                }`} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                Your wishlist is empty
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`${
                    isDark ? 'bg-gray-800' : 'bg-gray-50'
                  } p-4 rounded-lg transform transition-all duration-300 hover:scale-105`}
                  style={{ animation: `slideInRight 0.4s ease-out ${index * 0.1}s both` }}
                >
                  <div className="flex space-x-4 mb-3">
                    <div className={`w-20 h-20 ${
                      isDark 
                        ? 'bg-gradient-to-br from-gray-700 to-gray-900' 
                        : 'bg-gradient-to-br from-blue-50 to-purple-50'
                    } rounded-lg flex items-center justify-center text-3xl`}>
                      {product.image}
                    </div>

                    <div className="flex-1">
                      <h3 className={`font-semibold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {product.name}
                      </h3>
                      <p className={`text-sm mb-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {product.description}
                      </p>
                      <div className="flex items-center">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className={`text-xs ml-1 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${product.price}
                    </span>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => {
                          addToCart(product);
                          toggleWishlist(product.id);
                        }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="text-sm">Add to Cart</span>
                      </button>
                      <button 
                        onClick={() => toggleWishlist(product.id)}
                        className={`${
                          isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                        } p-2 rounded-lg transition-all hover:scale-110`}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {wishlistProducts.length > 0 && (
          <div className={`border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          } p-6`}>
            <button 
              onClick={() => {
                wishlistProducts.forEach(product => addToCart(product));
                setWishlistOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Add All to Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};