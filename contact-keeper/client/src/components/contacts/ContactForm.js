import React, { useState, useEffect, useContext } from "react";

import ContactContext from "../../context/contact/contactContext";
import AlertContext from "../../context/alert/alertContext";
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "professional",
  });
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);
  const { addContact, current, updateContact, clearCurrent } = contactContext;
  const { setAlert } = alertContext;
  const { email, name, phone, type } = contact;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "professional",
      });

    // In here we have to pass contactContext to listen the changing of contactContext to update data in ContactList
  }, [contactContext, current]);

  const handleOnChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      setAlert(
        "Please fill in all fields before adding a new contact",
        "danger",
        4000
      );
    } else !current ? addContact(contact) : updateContact(contact);
    clearCurrent();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">
        {current === null ? "Add Contact" : "Edit Contact"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleOnChange}
      />
      <input
        type="email"
        placeholder="company@example.com"
        name="email"
        value={email}
        onChange={handleOnChange}
      />
      <input
        type="text"
        placeholder="9999.9999.88"
        name="phone"
        value={phone}
        onChange={handleOnChange}
      />
      <div className="d-flex">
        <h4 className="mr-2">Contact type:</h4>
        <label>
          <input
            type="radio"
            name="type"
            value="professional"
            checked={type === "professional"}
            onChange={handleOnChange}
          />
          {"  "}Professional
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="personal"
            checked={type === "personal"}
            onChange={handleOnChange}
            className="ml-1"
          />
          {"  "}Personal
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="family"
            checked={type === "family"}
            onChange={handleOnChange}
            className="ml-1"
          />
          {"  "}Family
        </label>
      </div>

      <div>
        <input
          type="submit"
          value={current === null ? "Add Contact" : "Edit Contact"}
          className="btn btn-primary btn-block"
        />
      </div>

      {/* Clear curren button */}
      {current && (
        <div>
          <button className="btn btn-danger btn-block" onClick={clearCurrent}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
