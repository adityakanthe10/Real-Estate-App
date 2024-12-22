import "./login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password }); // Debugging line

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      console.log("Response:", res.data); // Debugging line
      updateUser(res.data);
      navigate("/");
    } catch (error) {
      console.error("Error:", error); // Debugging line
      // Safely handle error response
      const errorMessage =
        error.response?.data?.message ||
        "An unexpected error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            required
            type="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
