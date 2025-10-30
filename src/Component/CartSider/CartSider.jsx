import { useAddContext } from "../Context/ContextProvider";
import { ShoppingCart, X,  Minus, Plus, Trash2,} from 'lucide-react';
export const CartSidebar = () => {
  const { 
    isDark, 
    cartOpen, 
    setCartOpen, 
    setCheckoutOpen,
    cartItems, 
    updateCartQuantity, 
    removeFromCart,
    cartSubtotal,
    cartShipping,
    cartTotal
  } = useAddContext();

  return (
    <>
      {cartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        />
      )}

      <div className={`
        fixed top-0 right-0 h-full w-full sm:w-96 z-50
        transform transition-all duration-500 ease-out
        ${cartOpen ? 'translate-x-0' : 'translate-x-full'}
        ${isDark ? 'bg-gray-900' : 'bg-white'}
        shadow-2xl flex flex-col
      `}>
        <div className={`p-6 border-b ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        } flex justify-between items-center`}>
          <h2 className={`text-2xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Shopping Cart
          </h2>
          <button 
            onClick={() => setCartOpen(false)} 
            className="hover:rotate-90 transition-transform duration-300"
          >
            <X className={`w-6 h-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="relative inline-block mb-4">
                <ShoppingCart className={`w-16 h-16 mx-auto ${
                  isDark ? 'text-gray-700' : 'text-gray-300'
                }`} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`flex space-x-4 ${
                    isDark ? 'bg-gray-800' : 'bg-gray-50'
                  } p-4 rounded-lg transform transition-all duration-300 hover:scale-105`}
                  style={{ animation: `slideInRight 0.4s ease-out ${index * 0.1}s both` }}
                >
                  <div className={`w-20 h-20 ${
                    isDark 
                      ? 'bg-gradient-to-br from-gray-700 to-gray-900' 
                      : 'bg-gradient-to-br from-blue-50 to-purple-50'
                  } rounded-lg flex items-center justify-center text-3xl`}>
                    {item.image}
                  </div>

                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.name}
                    </h3>
                    <p className="text-blue-600 font-bold mb-2">
                      ${item.price}
                    </p>

                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className={`${
                          isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                        } p-1 rounded transition-all hover:scale-110`}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className={`w-8 text-center font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className={`${
                          isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                        } p-1 rounded transition-all hover:scale-110`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 hover:scale-110 transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={`border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          } p-6 space-y-4`}>
            <div className="space-y-2">
              <div className={`flex justify-between ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className={`flex justify-between ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span>Shipping</span>
                <span>${cartShipping.toFixed(2)}</span>
              </div>
              <div className={`flex justify-between text-xl font-bold pt-2 border-t ${
                isDark ? 'border-gray-800 text-white' : 'border-gray-200 text-gray-900'
              }`}>
                <span>Total</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"  onClick={() => { setCartOpen(false); setCheckoutOpen(true); }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};