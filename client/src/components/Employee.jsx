import React, { useState } from "react";
import ReadEmployees from "./ReadEmployees";
import CreateEmployee from "./CreateEmployee";
import UpdateEmployee from "./UpdateEmployee";

const Employee = () => {
  const [show, setShow] = useState(false);
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
        show={show}
        setShow={setShow}
        setEditEmployee={setEditEmployee}
      />
      {/* <UpdateEmployee /> */}
    </div>
  );
};

export default Employee;
