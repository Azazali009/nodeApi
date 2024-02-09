import React from "react";
import { IoClose } from "react-icons/io5";

const CloseButton = ({ handleCloseModal }) => {
  return (
    <button
      onClick={handleCloseModal}
      className=" flex justify-center items-center absolute top-2 right-2 leading-[0] h-8 w-8 rounded-sm hover:bg-zinc-900 duration-300 bg-zinc-700 text-white"
    >
      <IoClose />
    </button>
  );
};

export default CloseButton;
