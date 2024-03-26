import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent: React.FC = () => {
  const [testState, setTestState] = useState([
    {
      name: "some name",
    },
  ]);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div>
        <p>Home Component</p>
        <nav>
          <button onClick={handleClick}>About us </button>
        </nav>
      </div>
    </>
  );
};

export default HomeComponent;
