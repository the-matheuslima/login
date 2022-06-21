import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from 'react-router-dom';

const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        const getUser = localStorage.getItem("user");
        console.log(user)
        if (getUser) {
            setUser(JSON.parse(getUser))
            console.log(user);
        }
        else {
            return
        }

    }, []);

    const login = (email, password) => {

        const loggetUser = {
            id: "123",
            email
        }

        localStorage.setItem("user", JSON.stringify(loggetUser))

        if (password === "123") {
            setUser({ id: "123", email })
            navigate('/');
        }
        console.log(email, password)
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AppProvider;