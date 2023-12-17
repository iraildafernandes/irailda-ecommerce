import { useState, createContext, useEffect } from "react";
import { IProductInfo } from "../types/product";
import api from "../services/api";

export const UserContext: React.Context<{}> = createContext({});

function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function getProducts() {
      try {
        const responseGetProducts = await api.get("/products");
        const data = responseGetProducts.data.products;

        const smartphones: IProductInfo[] = data.filter(
          (item: IProductInfo) => item.category === "smartphones"
        );

        const laptops: IProductInfo[] = data.filter(
          (item: IProductInfo) => item.category === "laptops"
        );

        const productsTech = smartphones.concat(laptops);
        setAllProducts(productsTech);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  function addCartItems(product) {
    if (cartItems.find((item) => item.id === product.id)) {
      alert("Item já adicionado ao carrinho");
    } else {
      setCartItems((cartItems) => [...cartItems, product]);
      setCount(count + 1);
    }
  }

  function removeCartItems(product) {
    const attCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(attCart);
    setCount(count - 1);
  }

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        count,
        allProducts,
        addCartItems,
        cartItems,
        removeCartItems,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
