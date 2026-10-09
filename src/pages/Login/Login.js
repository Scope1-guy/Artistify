import { useState } from "react";
import "./Login.css"
import { signIn } from "../../services/firebase";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    signIn(email, password)
      .then((result) => {
        console.log("Success:", result);
        const destination = location.state?.from?.pathname || "/";
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="page-container page-section auth">
      <div className="auth__card">
        <h1 className="auth__title">Welcome back</h1>
        <p className="auth__subtitle">Log in to continue to Artistify.</p>

        {error && <p className="auth__error">{error}</p>}

        <form className="auth__form" onSubmit={handleSubmit}>
          <label className="auth__label" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            className="auth__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <label className="auth__label" htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            className="auth__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
          />

          <button className="auth__submit" type="submit">
            Log In
          </button>
        </form>

        <p>
          New User?. <NavLink to="/signup">Create an account</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
