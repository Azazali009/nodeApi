import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateEmployee = ({ editEmployee, setEditEmployee, setShowEditForm }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    age: "",
    phone: "",
  });
  const updateEmployee = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`http://localhost:3000/update`, {
        employeeID: editEmployee._id,
        ...formData,
      });
      if (res.status === 201) {
        alert(res.data.message);
        setShowEditForm(false);
        setFormData({
          name: "",
          email: "",
          designation: "",
          age: "",
          phone: "",
        });
        setEditEmployee("");
      }
    } catch (error) {
      console.log(error);
      alert("Error occured");
    } finally {
      setLoading(false);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    setFormData(editEmployee);
  }, [setFormData, editEmployee]);
  return (
    <div className=" flex justify-center items-center mb-8 mx-auto">
      <form
        onSubmit={updateEmployee}
        className=" shadow-2xl w-fit rounded-lg p-8 flex flex-col gap-5"
      >
        <h1 className=" text-center text-2xl my-8 font-bold text-sky-500">
          Update Employee{" "}
          <span className=" text-green-500">{`"${editEmployee.name}"`}</span>
        </h1>
        <div className=" grid grid-cols-[10rem_1fr] gap-2">
          <label>Employee Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInput}
            placeholder="Enter employee name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className=" grid grid-cols-[10rem_1fr] gap-2">
          <label>Employee Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            placeholder="Enter employee email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-[10rem_1fr] gap-2">
          <label>Employee Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInput}
            placeholder="Enter employee age"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className=" grid grid-cols-[10rem_1fr] gap-2">
          <label>Employee Designation:</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInput}
            placeholder="Enter employee designation"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className=" grid grid-cols-[10rem_1fr] gap-2">
          <label>Employee Phone:</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInput}
            minLength={11}
            placeholder="Enter employee phone"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className=" flex gap-2">
          <button
            type="reset"
            disabled={loading}
            onClick={() => setShowEditForm(false)}
            className="btn btn-neutral capitalize"
          >
            cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`btn capitalize 
              btn-success`}
          >
            Update employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;
