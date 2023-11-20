import { useState, createContext } from "react";

export const UserContext: React.Context<{}> = createContext({});

function UserProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState<number>(0);
  const [couponCode, setCouponCode] = useState<string>("");
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);

  function applyCoupon() {
    if (couponCode === "DISCOUNT10") {
      setCouponCode(couponCode);
      setDiscountPercentage(0.1);
    } else {
      setCouponCode("");
      setDiscountPercentage(0);
      alert("Invalid coupon code");
    }
  }

  function addCartItems(product) {
    setCartItems((cartItems) => [...cartItems, product]);
    setCount(count + 1);
  }

  function removeCartItems(product) {
    let attCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(attCart);
    setCount(count - 1);
  }

  function calculateTotal() {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * (1 - discountPercentage);
    }
    return total;
  }

  return (
    <UserContext.Provider
      value={{
        count,
        addCartItems,
        cartItems,
        removeCartItems,
        couponCode,
        applyCoupon,
        discountPercentage,
        calculateTotal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
