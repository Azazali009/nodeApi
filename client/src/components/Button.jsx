import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={() => onClick?.()}
      disabled={disabled}
      type="submit"
      className=" btn capitalize"
    >
      {children}
    </button>
  );
};

export default Button;
