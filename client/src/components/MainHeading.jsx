import React from "react";

const MainHeading = ({ children }) => {
  return (
    <h1 className=" text-center text-sky-600 font-bold text-2xl mb-8">
      {children}
    </h1>
  );
};

export default MainHeading;
