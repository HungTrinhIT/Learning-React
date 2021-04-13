import React, { useReducer } from "react";
import contactReducer from "./contactReducer";
import ContactContext from "./contactContext";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../type";
import { v4 as uuidv4 } from "uuid";
const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        _id: "45645b90-8d40-4dbb-8408-8f446834373b",
        name: "Trinh Vu Minh Hung",
        email: "minhhung.it99@gmail.com",
        phone: "0822511296",
        type: "family",
      },
      {
        _id: "d9e49b97-8efc-44f9-80cc-c8e70e08cc71",
        name: "Vo Thi My Lien",
        email: "minhhung.it99@gmail.com",
        phone: "0822511296",
        type: "personal",
      },
      {
        _id: "bb8ffec6-de74-44af-9d53-28781dd2e810",
        name: "Nguyen Quang Hai",
        email: "minhhung.it99@gmail.com",
        phone: "0822511296",
        type: "professional",
      },
    ],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get contacts

  // Add contact
  const addContact = (contact) => {
    contact._id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };
  // Delete contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  //Set current contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  // Clear current contacts
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
      payload: null,
    });
  };

  // Update contact
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  // Filter contacts
  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
      payload: null,
    });
  };
  // Clear current contacts

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
