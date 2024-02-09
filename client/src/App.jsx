import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import Table from "./components/Table";

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

  const handleShowModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className="text-white max-w-[1000px] mx-auto mt-8">
      {loading ? (
        // Display a loading indicator while retrieving data from the database to enhance user experience and provide feedback during the data-fetching process.
        <Loader />
      ) : (
        // table data
        <Table
          handleData={handleData}
          employees={employees}
          handleShowModal={handleShowModal}
        />
      )}
      {/* Show modal when click on add new button */}
      {showModal && (
        <Modal setShowModal={setShowModal} handleData={handleData} />
      )}
    </div>
  );
}

export default App;
