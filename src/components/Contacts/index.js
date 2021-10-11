import React from "react";
import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehtap Ugur",
      phone_number: "53535",
    },
    {
      fullname: "Diana Ross",
      phone_number: "15151",
    },
    {
      fullname: "John Clim",
      phone_number: "79797",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h2>Contacts</h2>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
