import React, { useState } from "react";
import CloseButton from "./CloseButton";
import EmployeeForm from "./EmployeeForm";

const Modal = ({ setShowModal, handleData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    phone: "",
    age: "",
  });

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className=" fixed backdrop-blur-lg inset-0 flex items-center justify-center">
      <div className="no-scrollbar bg-zinc-700/35 relative max-h-[calc(100vh-5em)] overflow-y-scroll border border-zinc-700 p-4 w-[600px] rounded-md">
        {/* Modal close button */}
        <CloseButton handleCloseModal={handleCloseModal} />
        <h1 className=" capitalize mb-6 text-center font-bold text-2xl">
          Add new employee
        </h1>

        {/* Employee form */}
        <EmployeeForm
          formData={formData}
          setFormData={setFormData}
          handleCloseModal={handleCloseModal}
          handleData={handleData}
        />
      </div>
    </div>
  );
};

export default Modal;
