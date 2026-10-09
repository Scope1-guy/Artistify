import { useState } from "react";
import { signUp } from "../../services/firebase";
import "./SignUp.css";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    signUp(email, password)
      .then((result) => {
        const destination = location.state?.form?.pathname || "/";
        navigate(destination);
        console.log("Success:", result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="page-container page-section auth">
      <div className="auth__card">
        <h1 className="auth__title">Create your account</h1>
        <p className="auth__subtitle">
          Sign up to search artist and save your favorites.
        </p>

        {error && <p className="auth__error">{error}</p>}
        <form className="auth__form" onSubmit={handleSubmit}>
          <label className="auth__label" htmlFor="signup-email">
            Email
          </label>
          <input
            id="signup-email"
            className="auth__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <label className="auth__label" htmlFor="signup-password">
            Password
          </label>
          <input
            id="signup-password"
            className="auth__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            required
          />
          <button type="submit" className="auth__submit">
            Sign Up
          </button>
        </form>
      </div>

      <p className="auth__switch">
        Already has an account. <NavLink to="/signin">Log In</NavLink>
      </p>
    </div>
  );
}

export default SignUp;
