import { useState } from "react";
import "../../components/AuthStyles/AuthStyles.css";
import { signIn, signInWithGoogle } from "../../services/firebase";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);

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

  const handleGoogle = () => {
    setError("");
    setGoogleLoading(true);

    signInWithGoogle()
      .then(() => {
        const destination = location.state?.from?.pathname || "/";
        navigate(destination);
      })
      .catch((err) => {
        if (
          err.code !== "auth/cancelled-popup-request" &&
          err.code !== "auth/popup-closed-by-user"
        ) {
          setError(err.message);
        }
      })
      .finally(() => {
        setGoogleLoading(false);
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

        <div className="auth__divider">
          <span>or</span>
        </div>

        <button
          type="button"
          className="auth__google"
          onClick={handleGoogle}
          disabled={googleLoading}
        >
          <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
            <path
              fill="#EA4335"
              d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z"
            />
            <path
              fill="#FBBC05"
              d="M10.5 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"
            />
          </svg>
          Continue with Google
        </button>

        <p>
          New User?. <NavLink to="/signup">Create an account</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
