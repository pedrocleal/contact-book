import React, { createContext, useState } from "react"

interface Contact {
  id: number
  name: string
  phone: string
}

interface ContactsContextData {
  contacts: Contact[],
  createContact: (contact: Contact) => void
  editContact: (id: number, updateContact: Contact) => void
  deleteContact: (id: number) => void
}

export const ContactsContext = createContext({} as ContactsContextData)

export default function ContactsProvider({ children }: React.PropsWithChildren) {

  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('@contacts')

    if (contacts) {
      return JSON.parse(contacts)
    }

    return []
  });

  const createContact = (contact: Contact) => {
    const newList = [...contacts, contact]
    setContacts(newList)
    localStorage.setItem('@contacts', JSON.stringify(newList))
  }

  const editContact = (id: number, updateContact: Contact) => {
    const newList = contacts.map((contact: Contact) => contact.id === id ? updateContact : contact);
    setContacts(newList);
    localStorage.setItem('@contacts', JSON.stringify(newList));
  }

  const deleteContact = (id: number) => {
    const newList = contacts.filter((contact: Contact) => contact.id !== id);
    setContacts(newList);
    localStorage.setItem('@contacts', JSON.stringify(newList));
  }

  return (
    <ContactsContext.Provider value={{
      contacts,
      createContact,
      editContact,
      deleteContact
    }}>
      {children}
    </ContactsContext.Provider>
  )
}