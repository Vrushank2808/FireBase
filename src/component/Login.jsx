import React, { useState } from "react";
import { useAuth, handleAuthError } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/dashboard");
        } catch (error) {
            setError(handleAuthError(error)); 
            alert(error);
        }
        setLoading(false);
    }

    return (
        <>
            <div>
                <h3>Welcome back </h3>
                <p>
                    <Link to="/signup">Signup to create an account</Link>
                </p>
            </div>

            {error && <div>{error}</div>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email-address">Email address </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Loading" : "Login"}
                    </button>
                </div>
            </form>
        </>
    );
}

export default Login;
