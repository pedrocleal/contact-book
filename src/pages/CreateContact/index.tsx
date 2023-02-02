import React, { useState, useEffect, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import { ContactsContext } from "../../contexts/ContactsContext";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function CreateContact() {
  const [loading, setLoading] = useState(false);
  const { createContact } = useContext(ContactsContext);

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
  })

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createContact({
      id: Math.random(),
      name: formValues.name,
      phone: formValues.phone,
    })
  }

  return (
    <div>
      <h1>Adicionar novo contato</h1>
      {/* <ContactForm contact={contact} /> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" onChange={(e) => setFormValues({
            ...formValues,
            name: e.target.value,
          })} />
        </div>

        <div>
          <label htmlFor="name">Telefone</label>
          <input type="text" id="name" name="name" onChange={(e) => setFormValues({
            ...formValues,
            phone: e.target.value,
          })} />
        </div>

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};
