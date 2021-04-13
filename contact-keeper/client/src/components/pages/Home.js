import React from "react";
import { ContactFilter } from "../contacts/ContactFilter";
import ContactForm from "../contacts/ContactForm";
import ContactList from "../contacts/ContactList";

const Home = () => {
  return (
    <div className="grid-2">
      {/* Contact form */}
      <div className="contact-form">
        <ContactForm />
      </div>

      {/* Contact list */}
      <div>
        <ContactFilter />
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
