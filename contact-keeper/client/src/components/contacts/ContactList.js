import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../layouts/Spinner";

const ContactList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  return (
    <Fragment>
      {contacts !== null ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => {
                return (
                  <CSSTransition
                    classNames="item"
                    timeout={400}
                    key={contact._id}
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                );
              })
            : contacts.map((contact) => {
                return (
                  <CSSTransition
                    classNames="item"
                    timeout={400}
                    key={contact._id}
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                );
              })}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
export default ContactList;
