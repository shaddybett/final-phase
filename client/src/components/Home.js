import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Send login credentials to the server for validation
    fetch("http://localhost:5000/admin", {
      method: "POST",
      headers: {
        "Content-Type": "applicatiopn/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to admin dashboard or do further actions
          navigate("/about");
        } else {
          setError("Incorrect username or password");
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        setError("An error occurred. Please try again later.");
      });
  }

  return (
    <div>
      <h3>Select Your Role</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Home;
