import { useState, useEffect, useContext, createContext, Children } from "react";


const AuthContext = createContext();


const AuthProvider = ({ Children }) => {
    const [auth, setAuth] = useState({
        name: null,
        token: "",
    })

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {Children}
        </AuthContext.Provider>
    );
};

// custome hook

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider };