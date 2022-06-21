import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./style.scss"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { authenticated, login } = useContext(AuthContext)

    console.log(authenticated)

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
    };
    return (
        <div id="login">
            <p>{String(authenticated)}</p>
            <h1 className="title">Login Do Sistema</h1>
            <form action="" className="form">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="actions">
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Logar</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
