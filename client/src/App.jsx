import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import Modal from "./components/Modal";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Load employees data function
  const handleData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3000`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        setEmployees(data?.response);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleShowModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className="text-white max-w-[1000px] mx-auto mt-8">
      {loading ? (
        // loading
        <div className="text-center capitalize text-3xl font-semibold ">
          {" "}
          <p>loading...</p>
        </div>
      ) : (
        // table data
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
      )}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
