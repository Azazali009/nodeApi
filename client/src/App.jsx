import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [deleteId,setDeleteId] = useState('')

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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeID: id }),
      });
      const deleteEmployee = await res.json();
      if (res.ok) {
        alert(deleteEmployee?.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className="text-white max-w-[1000px] mx-auto mt-8">
      {loading ? (
        <div className="text-center capitalize text-3xl font-semibold ">
          {" "}
          <p>loading...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Designation</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {employees?.map((employe, i) => {
                return (
                  <tr key={employe._id}>
                    <th>{i + 1}</th>
                    <td>{employe.name}</td>
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
    </div>
  );
}

export default App;
