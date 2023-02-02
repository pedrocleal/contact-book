import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContactsContext } from "../../contexts/ContactsContext";

interface Contact {
  id: number
  name: string;
  phone: string;
  email: string;
}

export default function Home() {
  const { contacts, deleteContact } = useContext(ContactsContext)

  const handleDelete = (id: number) => {
    deleteContact(id)
  }

  return (
    <div>
      <div>
        <h1>Lista de contatos</h1>
        <Link to={'/create'}>Adicionar contato</Link>
      </div>

      {contacts.map((contact) => (
        <ul key={contact.id}>
          <li>
            {contact.name}
          </li>
          <button onClick={() => handleDelete(contact.id)}>excluir</button>
        </ul>
      ))}
    </div>
  )
}