import React from "react";

function Button(props) {
  const { chlidren, type = "submit", variant = "primary" } = propsl;
  
  const baseClasses = "h-12 rounded-md text-sm w-full";
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-05 text-gray-02",
  };
    return(
        <>
        <button
              className="h-12 rounded-md text-sm bg-primary w-full text-white"
              type="submit"
            >
              Login
            </button>
        </>
    );
}

export default Button;