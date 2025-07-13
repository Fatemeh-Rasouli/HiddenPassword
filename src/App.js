import './App.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from 'react';

function App() {
  const [type, setType] = useState("password");
  const isPassword = type === "password";

  const handleClick = () => {
    setType(isPassword ? "text" : "password");
  };

  const Icon = isPassword ? FaEyeSlash : FaEye;

  return (
    <div className='wrapper'>
      <div className='input-fields'>
        <span onClick={handleClick}>
          <Icon />
        </span>
        <input type={type} />
      </div>
    </div>
  );
}

export default App;
