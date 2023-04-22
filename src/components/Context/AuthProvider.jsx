import { createContext, useState } from "react";
import { ToastContainer } from "react-bootstrap";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})
    const [cart, setCart] = useState({})
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState(false);

    return (
        <AuthContext.Provider value={{
            auth, user, cart, products, search,
            setAuth, setUser, setCart, setProducts, setSearch
        }}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    )
}

export default AuthContext;