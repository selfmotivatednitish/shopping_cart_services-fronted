import { createContext, useState, useEffect } from "react";
import { ToastContainer } from "react-bootstrap";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})
    const [addresses, setAddresses] = useState({})
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0)
    const [cartPrice, setCartPrice] = useState(0)

    useEffect(() => {
        let count = 0
        let price = 0
        cart.forEach((cartItem) => {
            count += cartItem.quantity
            price += cartItem.quantity * cartItem.product.price
        })
        setCartItemCount(count)
        setCartPrice(price)
	}, [cart])

    return (
        <AuthContext.Provider value={{
            auth, user, cart, products, search,cartItemCount, cartPrice, addresses, orders,
            setAuth, setUser, setCart, setProducts, setSearch, setCartItemCount, setCartPrice, setAddresses, setOrders
        }}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    )
}

export default AuthContext;