import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";

const Table = ({ employees, handleShowModal, handleData }) => {
  // Handle delete employee function
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeID: id }),
      });
      const deleteEmployee = await res.json();
      if (res.ok) {
        alert(deleteEmployee?.message);
        handleData();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="overflow-x-auto my-8">
      <h1 className=" text-center text-sky-600 font-bold text-2xl mb-8">
        Registered Employee
      </h1>
      <button
        onClick={handleShowModal}
        className=" flex btn gap-2 text-blue-600"
      >
        <IoPersonAdd />
        <span>Add new employee</span>
      </button>
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* render database employees data */}
          {employees?.map((employe, i) => {
            return (
              <tr key={employe._id}>
                <th>{i + 1}</th>
                <td>{employe.name}</td>
                <td>{employe.email}</td>
                <td>{employe.designation}</td>
                <td>{employe.phone}</td>
                <td>{employe.age}</td>
                <td className=" flex gap-2 items-center">
                  <button onClick={() => handleDelete(employe._id)}>
                    <FaTrash color="red" />
                  </button>
                  <button>
                    <FaEdit className=" text-sky-600" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
