import React, { useState } from "react";
import Button from "./Button";
import FormRow from "./FormRow";

const EmployeeForm = ({
  formData,
  setFormData,
  handleCloseModal,
  handleData,
}) => {
  const [loading, setLoading] = useState(false);

  //   handle form input field data
  const handleChage = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //   Add new employee function
  const addNewEmployee = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (formData.phone.length < 11)
        return alert("Phone number must be 11 digit long.");
      const res = await fetch(`http://localhost:3000/store`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        handleCloseModal();
        handleData();
        return alert(data?.message);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={addNewEmployee}
      className=" flex flex-wrap justify-center flex-col  gap-6"
    >
      <FormRow label={"Employee name"}>
        <input
          id="name"
          type="text"
          name="name"
          required
          onChange={handleChage}
          placeholder="Enter employee name"
          className="input input-sm input-bordered w-full max-w-xs"
        />
      </FormRow>
      <FormRow label={"employee email"}>
        <input
          id="email"
          required
          onChange={handleChage}
          name="email"
          type="email"
          placeholder="Enter employee email"
          className="input input-sm input-bordered w-full max-w-xs"
        />
      </FormRow>
      <FormRow label={"Employee phone"}>
        <input
          type="number"
          id="phone"
          name="phone"
          onChange={handleChage}
          required
          minLength={11}
          title="Phone number must be 11 digit long"
          placeholder="Enter employee phone No"
          className="input input-bordered w-full max-w-xs input-sm"
        />
      </FormRow>
      <FormRow label={"Employee designation"}>
        <input
          id="designation"
          type="text"
          name="designation"
          onChange={handleChage}
          required
          placeholder="Enter employee designation"
          className="input input-bordered w-full max-w-xs input-sm"
        />
      </FormRow>
      <FormRow label={"Employee age"}>
        <input
          id="age"
          type="number"
          name="age"
          onChange={handleChage}
          required
          placeholder="Enter employee age"
          className="input input-bordered w-full max-w-xs input-sm"
        />
      </FormRow>
      <div className=" flex gap-2 justify-end">
        <Button disabled={loading} onClick={handleCloseModal}>
          cancel
        </Button>
        <Button disabled={loading}>add new employee</Button>
      </div>
    </form>
  );
};

export default EmployeeForm;
