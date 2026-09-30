import { useState } from "react";
import { signUp } from "../../services/firebase";
import "./SignUp.css";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
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
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p className="signup-error">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        {/* <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          required
        /> */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already has an account. <NavLink to="/signin">Log In</NavLink>
      </p>
    </div>
  );
}

export default SignUp;
