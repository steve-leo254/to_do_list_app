import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthentication } from "../store/authAction";
import { Navigate } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AuthType {
  username: string;
  password: string;
}
interface ResponseData {
  access_token: string;
}

function Login() {
  
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      const responseData: ResponseData = response.data;
      console.log("test", responseData);
      localStorage.setItem("token", responseData.access_token);
      localStorage.setItem("isLoggedIn", true.toString()); //  login status to local storage

      setIsLoggedIn(true);
      navigate("/about");
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
