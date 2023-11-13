import { useState, createContext } from "react";

export const UserContext: React.Context<{}> = createContext({});

function UserProvider({children}){
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState<number>(0);

    function addCartItems(product){
        setCartItems(cartItems => [...cartItems, product])
        setCount(count + 1)
    }

    return(
        <UserContext.Provider value={{count, addCartItems, cartItems}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;