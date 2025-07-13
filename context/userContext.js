"use client"
import { createContext, useContext, useEffect, useState } from "react"


const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(()=> {
        const storedUser = localStorage.setItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    },[])

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem(JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user")
    }


    return(
        <UserContext.Provider value={{user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);