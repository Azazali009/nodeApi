import React, { useState } from "react";
import ReadEmployees from "./ReadEmployees";
import CreateEmployee from "./CreateEmployee";
import UpdateEmployee from "./UpdateEmployee";

const Employee = () => {
  const [show, setShow] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState("");

  return (
    <div>
      <CreateEmployee
        editEmployee={editEmployee}
        setEditEmployee={setEditEmployee}
        show={show}
        setShow={setShow}
      />
      <ReadEmployees
        // show={show}
        // setShow={setShow}
        setShowEditForm={setShowEditForm}
        setEditEmployee={setEditEmployee}
      />
      {showEditForm && (
        <UpdateEmployee
          setShowEditForm={setShowEditForm}
          editEmployee={editEmployee}
          setEditEmployee={setEditEmployee}
        />
      )}
    </div>
  );
};

export default Employee;
