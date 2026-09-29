import { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <p>{error.message}</p>}
      <button type="submit">Log In</button>

      <p>
        New User?. <NavLink to="/signup">Create an account</NavLink>
      </p>
    </form>
  );
}

export default Login;
