import { useState } from "react";
import axios from "axios";
import { Heart, Send } from "lucide-react";

function MessageForm() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!name.trim() || !message.trim()) {
      setError("Please fill both fields ❤️");
      return;
    }

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/messages",
        {
          name,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName("");
      setMessage("");

      setSuccess(
        "Your beautiful message has been saved ❤️"
      );

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Unable to send your message."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="message-section">

      <div className="message-card">

        <div className="message-icon">
          <Heart size={34} fill="currentColor" />
        </div>

        <p className="message-small">
          ONE LAST THING...
        </p>

        <h2>
          Leave a <span>Message 💌</span>
        </h2>

        <p className="message-description">
          Before you leave, write something for me.
          I promise I'll keep it safe ❤️
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Write something for me..."
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          {success && (
            <p className="form-success">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            <Send size={18} />

            {loading
              ? "Sending..."
              : "Send With Love ❤️"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default MessageForm;