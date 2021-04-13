import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { name, type, phone, email, _id } = contact;

  let contactType = "";
  switch (type) {
    case "professional":
      contactType = "badge-primary";
      break;
    case "personal":
      contactType = "badge-danger";
      break;
    case "family":
      contactType = "badge-success";
      break;
    default:
      contactType = "";
  }

  const onDeleteContactItem = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span style={{ float: "right" }} className={"badge " + contactType}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>

      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}

        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <div>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDeleteContactItem}>
          Delete
        </button>
      </div>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
