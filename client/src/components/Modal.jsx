import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    phone: "",
    age: "",
  });
  const handleChage = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseModal = () => setShowModal(false);
  const addNewEmployee = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (formData.phone.length < 11)
        return alert("Phone number must be 11 digit long.");
      const res = await fetch(`http://localhost:3000/store`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setShowModal(false);
        return alert(data?.message);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" fixed backdrop-blur-lg inset-0 flex items-center justify-center">
      <div className="no-scrollbar relative max-h-[calc(100vh-5em)] overflow-y-scroll border border-zinc-700 p-4 w-[600px] rounded-md">
        <button
          onClick={handleCloseModal}
          className=" flex justify-center items-center absolute top-2 right-2 leading-[0] h-8 w-8 rounded-sm hover:bg-zinc-900 duration-300 bg-zinc-700 text-white"
        >
          <IoClose />
        </button>
        <h1 className=" capitalize mb-6 text-center font-bold text-2xl">
          Add new employee
        </h1>
        <form
          onSubmit={addNewEmployee}
          className=" flex flex-wrap justify-center flex-col  gap-6"
        >
          <div className=" grid grid-cols-[10rem_1fr]">
            <label className=" text-sm text-zinc-100" htmlFor="name">
              Employee Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              onChange={handleChage}
              placeholder="Enter employee name"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>
          <div className=" grid grid-cols-[10rem_1fr]">
            <label className=" text-sm text-zinc-100" htmlFor="email">
              Employee Email
            </label>

            <input
              id="email"
              required
              onChange={handleChage}
              name="email"
              type="email"
              placeholder="Enter employee email"
              className="input input-sm input-bordered w-full max-w-xs"
            />
          </div>
          <div className=" grid grid-cols-[10rem_1fr]">
            <label className=" text-sm text-zinc-100" htmlFor="phone">
              Enter Employee Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              onChange={handleChage}
              required
              minLength={11}
              title="Phone number must be 11 digit long"
              placeholder="Enter employee phone No"
              className="input input-bordered w-full max-w-xs input-sm"
            />
          </div>
          <div className=" grid grid-cols-[10rem_1fr]">
            <label className=" text-sm text-zinc-100" htmlFor="designation">
              Employee designation
            </label>

            <input
              id="designation"
              type="text"
              name="designation"
              onChange={handleChage}
              required
              placeholder="Enter employee designation"
              className="input input-bordered w-full max-w-xs input-sm"
            />
          </div>
          <div className=" grid grid-cols-[10rem_1fr]">
            <label className=" text-sm text-zinc-100" htmlFor="age">
              Employee age
            </label>

            <input
              id="age"
              type="number"
              name="age"
              onChange={handleChage}
              required
              placeholder="Enter employee age"
              className="input input-bordered w-full max-w-xs input-sm"
            />
          </div>
          <div className=" flex gap-2 justify-end">
            <button
              disabled={loading}
              type="reset"
              onClick={handleCloseModal}
              className=" btn bg-transparent"
            >
              cancel
            </button>
            <button
              disabled={loading}
              type="submit"
              className=" btn capitalize"
            >
              add employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
