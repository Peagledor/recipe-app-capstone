import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Use navigate hook
import { loginUser } from "../controllers/userController"; // Reference this function
import { authActions } from "../redux/slices/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = { username, password };
    const user = await loginUser(credentials, navigate); // Pass navigate

    if (user) {
      dispatch(authActions.login(user)); // Update Redux store
      navigate("/"); // Redirect to Home page after login
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
