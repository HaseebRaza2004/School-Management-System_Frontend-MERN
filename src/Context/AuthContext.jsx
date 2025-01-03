import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { BASE_URL } from "../Constant/Constant";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            const userID = Cookies.get("userId");
            if (userID) {
                axios.get(`${BASE_URL}users/${userID}`)
                    .then((res) => {
                        setUser(res?.data?.user);
                    }).catch((err) => console.log(err.response.data.message))
            };
        };
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
    )
};  