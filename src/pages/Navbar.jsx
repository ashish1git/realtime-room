import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={{
  position: "fixed",
  top: "10px",
  left: "10px",
  zIndex: 1000
}}>

      <button 
      onClick={()=> navigate("/")}
    style={{
      padding: "8px 16px",
      borderRadius: "8px",
      border: "none",
      background: "#007bff",
      color: "white",
      cursor: "pointer"
    }}
  >
        👈Back to Dashboard
      </button>
    </div>
  );
}

export default Navbar;
