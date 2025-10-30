export const CheckoutModal = () => {
  const { 
    isDark, 
    checkoutOpen, 
    setCheckoutOpen,
    cartItems,
    cartSubtotal,
    cartShipping,
    cartTotal,
    setCartItems
  } = useAddContext();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setCartItems([]);
      setCheckoutOpen(false);
      setOrderPlaced(false);
      setStep(1);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVV: ''
      });
    }, 3000);
  };

  if (!checkoutOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => !orderPlaced && setCheckoutOpen(false)}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      >
        <div 
          className={`${
            isDark ? 'bg-gray-900' : 'bg-white'
          } rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          {orderPlaced ? (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Order Placed Successfully!
              </h2>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Thank you for your purchase. Your order will be delivered soon.
              </p>
            </div>
          ) : (
            <>
              <div className={`p-6 border-b ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              } flex justify-between items-center`}>
                <h2 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Checkout
                </h2>
                <button 
                  onClick={() => setCheckoutOpen(false)} 
                  className="hover:rotate-90 transition-transform duration-300"
                >
                  <X className={`w-6 h-6 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-center mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= 1 ? 'bg-blue-600 text-white' : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'
                    }`}>
                      1
                    </div>
                    <div className={`h-1 w-20 ${
                      step >= 2 ? 'bg-blue-600' : isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}></div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= 2 ? 'bg-blue-600 text-white' : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'
                    }`}>
                      2
                    </div>
                    <div className={`h-1 w-20 ${
                      step >= 3 ? 'bg-blue-600' : isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}></div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= 3 ? 'bg-blue-600 text-white' : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'
                    }`}>
                      3
                    </div>
                  </div>
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Shipping Information
                    </h3>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                        }`}
                      />
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                        }`}
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Payment Information
                    </h3>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                      }`}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                        }`}
                      />
                      <input
                        type="text"
                        name="cardCVV"
                        placeholder="CVV"
                        value={formData.cardCVV}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                        }`}
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Order Summary
                    </h3>
                    <div className="space-y-4 mb-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className={`flex items-center space-x-4 p-4 rounded-lg ${
                          isDark ? 'bg-gray-800' : 'bg-gray-50'
                        }`}>
                          <span className="text-3xl">{item.image}</span>
                          <div className="flex-1">
                            <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {item.name}
                            </h4>
                            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <span className="font-bold text-blue-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className={`border-t pt-4 space-y-2 ${
                      isDark ? 'border-gray-800' : 'border-gray-200'
                    }`}>
                      <div className={`flex justify-between ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span>Subtotal</span>
                        <span>${cartSubtotal.toFixed(2)}</span>
                      </div>
                      <div className={`flex justify-between ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span>Shipping</span>
                        <span>${cartShipping.toFixed(2)}</span>
                      </div>
                      <div className={`flex justify-between text-xl font-bold pt-2 border-t ${
                        isDark ? 'border-gray-800 text-white' : 'border-gray-200 text-gray-900'
                      }`}>
                        <span>Total</span>
                        <span className="text-blue-600">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4 mt-8">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                      }`}
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={() => step === 3 ? handlePlaceOrder() : setStep(step + 1)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    {step === 3 ? 'Place Order' : 'Continue'}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};