
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthentication } from "../store/authAction";
import axios from 'axios';

// Define the type for authentication payload
interface AuthType {
    username: string;
    password: string;
}

function Register() { // Renamed the component to Register
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(""); // State to hold error messages

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let formContent: AuthType = {
            username: username,
            password: password
        };
        try {
            const apiUrl = "http://127.0.0.1:5000/register";
            const response = await axios.post(apiUrl, formContent);

            // Check if the registration was successful
            if (response.status === 200) {
                // Dispatch authentication action (if needed)
                // dispatch(setAuthentication(formContent));

                // Set isLoggedIn state to true
                setIsLoggedIn(true);
            } else {
                // Handle other status codes if needed
                setError("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required // Added required attribute for form validation
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required // Added required attribute for form validation
                    />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
            {error && <p>{error}</p>} {/* Display error message if error state is set */}
            {isLoggedIn && <p>Welcome, {username}!</p>}
        </div>
    );
}

export default Register;
