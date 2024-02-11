import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateEmployee = ({ show, setShow, editEmployee, setEditEmployee }) => {
  const isEdit = Boolean(editEmployee._id);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    age: "",
    phone: "",
  });

  const inputData = isEdit
    ? { employeeID: editEmployee._id, ...formData }
    : formData;

  // This function is for add new employee and update employee
  // const addNewEmployeeData = async (e) => {
  const editAddEmployee = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:3000/${isEdit ? "update" : "store"}`,
        inputData
      );
      if (res.status === 201) {
        alert(res.data.message);
        setShow(false);
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
    isEdit && setFormData(editEmployee);
  }, [setFormData, editEmployee, isEdit]);
  return (
    <div className="p-8 ">
      <button onClick={() => setShow((show) => !show)} className="btn mb-8">
        add new employee
      </button>
      {show && (
        <form
          onSubmit={editAddEmployee}
          className=" shadow-2xl w-fit rounded-lg p-8 flex flex-col gap-5"
        >
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
          <div className=" grid grid-cols-[10rem_1fr] gap-2">
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
              className="btn btn-neutral capitalize"
            >
              cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`btn capitalize ${
                isEdit ? "btn-success" : "btn-neutral"
              }`}
            >
              {isEdit ? "Update employee" : "add employee"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateEmployee;
