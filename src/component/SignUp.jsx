import { useState } from "react";
import { useAuth, handleAuthError } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { signup, googleSignIn } = useAuth();
    const navigate = useNavigate();


    async function handleGoggleSignIn() {
        try {
            await googleSignIn();
            navigate("/dashboard");
        } catch (error) {
            setError(handleAuthError(error));
            console.log(error);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            return setError("Password does not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password);
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
                <h3>Create a new account</h3>
                <p>
                    <Link to="/login">Sign in to your existing account</Link>
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
                    <label htmlFor="confirm-password">Confirm Password </label>
                    <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        autoComplete="new-password"
                        required
                        placeholder="Enter confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Creating account" : "Signup"}
                    </button>
                </div>
            </form>

            <div>
                <button onClick={handleGoggleSignIn} disabled={loading}>
                    {loading ? "Loading" : "Siginup with google"}
                </button>
            </div>
        </>
    )
}

export default SignUp
