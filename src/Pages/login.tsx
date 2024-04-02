import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthentication } from "../store/authAction.ts";
import axios from "axios";

// Define the type for authentication payload
interface AuthType {
  username: string;
  password: string;
}

interface ResponseType {
  access_token: string;
}
function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let formContent: AuthType = {
      username: username,
      password: password,
    };
    try {
      const apiUrl = "http://127.0.0.1:5000/login";
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Done.", response.data);

      const responseData: ResponseType = {
        ...response.data,
      };

      console.log("response data.", responseData);

      localStorage.setItem("token", responseData.access_token)


      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {isLoggedIn && <p>Welcome, {username}!</p>}
    </div>
  );
}

export default Login;