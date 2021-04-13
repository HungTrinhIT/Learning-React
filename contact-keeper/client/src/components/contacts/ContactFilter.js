import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { clearFilter, filterContacts, filtered } = contactContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChangeHandler = (e) => {
    console.log(text.current);
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        onChange={onChangeHandler}
        type="text"
        ref={text}
        placeholder="Filter contacts..."
        style={{ marginTop: 0 }}
      />
    </form>
  );
};
