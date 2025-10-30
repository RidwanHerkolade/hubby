import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { products } from "../Product/product";

const AddContext = createContext();
export const AppProvider = ({ children }) => {
  // Theme State
  const [isDark, setIsDark] = useState(false);

  // UI State
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
   const [wishlistOpen, setWishlistOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Product State
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Cart State
  const [cartItems, setCartItems] = useState([]);

  // Wishlist State
  const [wishlist, setWishlist] = useState([]);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

  // Cart Calculations
  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );
  
  const cartSubtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const cartShipping = cartSubtotal > 0 ? 5.99 : 0;
  const cartTotal = cartSubtotal + cartShipping;

  // Theme Toggle
  const toggleTheme = () => setIsDark(!isDark);

  // Cart Actions
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist Actions
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const value = {
    isDark,
    toggleTheme,
    sidebarOpen,
    setSidebarOpen,
    cartOpen,
    setCartOpen,
    searchOpen,
    setSearchOpen,
    isScrolled,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    cartItems,
    cartCount,
    cartSubtotal,
    cartShipping,
    cartTotal,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    wishlist,
    toggleWishlist,
    wishlistOpen,
    setWishlistOpen,
    isInWishlist,
    checkoutOpen,
    setCheckoutOpen
  };

  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
};

export const useAddContext = () => {
  return useContext(AddContext);
};
