import React from "react";

const FormRow = ({ children, label }) => {
  return (
    <div className=" grid items-center grid-cols-[10rem_1fr]">
      <label
        className=" text-sm text-zinc-100 capitalize"
        htmlFor={children.props.id}
      >
        {label}
        <span className=" text-red-500">*</span>
      </label>
      {children}
    </div>
  );
};

export default FormRow;
