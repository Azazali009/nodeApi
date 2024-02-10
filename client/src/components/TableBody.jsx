import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TableBody = ({ employees, handleDelete }) => {
  return (
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
  );
};

export default TableBody;
