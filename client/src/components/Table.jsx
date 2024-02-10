import axios from "axios";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import MainHeading from "./MainHeading";
import Button from "./Button";

const Table = ({ employees, handleShowModal, handleData }) => {
  // Handle delete employee function
  const handleDelete = async (employeeID) => {
    try {
      const res = await axios.post("http://localhost:3000/delete", {
        employeeID,
      });

      if (res.status === 200) {
        alert(res?.data.message);
        handleData();
      }
    } catch (error) {
      console.log("error", error);
      alert(error.response.data.message);
    }
  };
  return (
    <div className="overflow-x-auto my-8">
      <MainHeading>Registered Employee</MainHeading>
      {/* Add employee button */}
      <Button onClick={handleShowModal}>
        <IoPersonAdd />
        <span>Add new employee</span>
      </Button>
      {/* Table data */}
      <table className="table ">
        {/* head */}
        <TableHead />
        <TableBody employees={employees} handleDelete={handleDelete} />
      </table>
    </div>
  );
};
export default Table;
