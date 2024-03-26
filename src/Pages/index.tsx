import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent: React.FC = () => {
//   const [testState, setTestState] = useState([
//     {
//       name: "some name",
//     },
//   ]);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
    // setTestState ([{name : "update name"}]);
  };

  return (
    <>
      <div className="header">
        <h1>Welcome</h1>
        <nav>
            <ul>
                <li className="">
                    <a className="nav-link arial-current">About</a>
                </li>
                <li>
                    <a> </a>
                </li>
            </ul>
          <button onClick={handleClick}>About us </button>
        </nav>
      </div>
    </>
  );
};

export default HomeComponent;
