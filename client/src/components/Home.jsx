import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Table from "./Table";
import Modal from "./Modal";

const Home = () => {
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

  // Show modal function
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Load employee dat on component mount
  useEffect(() => {
    handleData();
  }, [showModal]);
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
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default Home;
