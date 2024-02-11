import React, { useEffect, useState } from "react";
import axios from "axios";

const ReadEmployees = ({ show, setShow, setEditEmployee }) => {
  const [employees, setEmployees] = useState([]);

  // Get employees data
  const getEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:3000");
      if (res.status === 200) {
        setEmployees(res.data.response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Delete employee
  const deleteEmployee = async (employeeID) => {
    try {
      const res = await axios.post("http://localhost:3000/delete", {
        employeeID,
      });
      if (res.status === 200) {
        alert("Employee deleted successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update employee
  const getSingleEmployee = async (employeeID) => {
    try {
      const res = await axios.post("http://localhost:3000/show", {
        employeeID,
      });
      if (res.status === 200) {
        setEditEmployee(res.data);
        setShow(true);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Load employee data on component mount -> when employees state are manipulated then this component will re-mount
  useEffect(() => {
    getEmployees();
  }, [employees]);

  return (
    <div className="overflow-x-auto shadow-2xl w-[1000px] p-12 mb-8 mx-auto rounded-lg">
      <h1 className=" text-center text-4xl my-8 font-bold text-sky-500">
        Registered Employee
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>age</th>
            <th>phone</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, i) => (
            <tr key={employee._id}>
              <th>{i + 1}</th>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.designation}</td>
              <td>{employee.age}</td>
              <td>{employee.phone}</td>
              <td className=" flex gap-2">
                <button
                  onClick={() => deleteEmployee(employee._id)}
                  className="btn capitalize btn-error btn-sm"
                >
                  delete
                </button>
                <button
                  onClick={() => getSingleEmployee(employee._id)}
                  className="btn capitalize btn-primary btn-sm"
                >
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadEmployees;
