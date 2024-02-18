// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   function handleSubmit(e) {
//     e.preventDefault();
//     // Send login credentials to the server for validation
//     fetch("http://localhost:4000/admin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Redirect to admin dashboard or do further actions
//           navigate("/about");
//         } else {
//           setError("Incorrect username or password");
//         }
//       })
//       .catch((error) => {
//         console.error("Error occurred:", error);
//         setError("An error occurred. Please try again later.");
//       });

//       fetch ('http://localhost:4000/teacher',{
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json'
//         }
//       })
//       .then(response=>{
//         if (!response.ok ){
//             console.error('unsuccessful login'),404
//         }
//         else{
//             console.error('login success'),200
//         }

//       })
//       .catch()

//       fetch('http://localhost:4000/student',{
//         method:'POST',
//         headers:{
//             'Content_Type':'application/json'
//         }
//       })
//       .then()
//   }

//   return (
//     <div>
//       <h3>Select Your Role</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e, role) {
    e.preventDefault();

    let url = "";
    if (role === "admin") {
      url = "http://localhost:4000/admin";
    } else if (role === "teacher") {
      url = "http://localhost:4000/teacher";
    } else if (role === "student") {
      url = "http://localhost:4000/student";
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect or handle login success based on role
          if (role === "admin") {
            navigate("/about");
          } else if (role === "teacher") {
            navigate("/about");
          } else if (role === "student") {
            navigate("/about");
          }
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
      <form>
        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            onChange={() => setUsername("")} // Clear username field on role change
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="teacher"
            onChange={() => setUsername("")} // Clear username field on role change
          />
          Teacher
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="student"
            onChange={() => setUsername("")} // Clear username field on role change
          />
          Student
        </label>
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
        <button
          type="submit"
          onClick={(e) =>
            handleSubmit(
              e,
              document.querySelector('input[name="role"]:checked')?.value
            )
          }
        >
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Home;
