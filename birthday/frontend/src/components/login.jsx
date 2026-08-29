import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Heart, Lock } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!code.trim()) {
      setError("Please enter the secret code ❤️");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/code",
        {
          code: code.trim(),
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      navigate("/birthday");

    } catch (error) {
      console.log(error);

      setError(
        error.response?.data?.message ||
        "Something went wrong ❤️"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="heart heart-one">❤️</div>
      <div className="heart heart-two">💕</div>
      <div className="heart heart-three">💗</div>
      <div className="heart heart-four">❤️</div>

      <div className="login-card">

        <div className="login-heart">
          <Heart size={42} fill="currentColor" />
        </div>

        <h1>For Tamanna</h1>

        <p className="login-subtitle">
          A little surprise is waiting for you ❤️
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-box">

            <Lock size={20} />

            <input
              type="password"
              placeholder="Enter the secret code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

          </div>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            className="login-button"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Opening..."
              : "Enter My Heart ❤️"}
          </button>

        </form>

        <p className="login-bottom">
          Only you know the way in ❤️
        </p>

      </div>

    </div>
  );
}

export default Login;