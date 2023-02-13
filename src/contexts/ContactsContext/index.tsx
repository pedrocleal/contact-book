import React, { createContext, useState } from "react"

export interface IContact {
  id: number
  name: string
  phone: string
}

interface ContactsContextData {
  contacts: IContact[],
  createContact: (contact: IContact) => void
  editContact: (updateContact: IContact) => void
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

  const createContact = (contact: IContact) => {
    const newList = [contact, ...contacts]
    setContacts(newList)
    localStorage.setItem('@contacts', JSON.stringify(newList))
  }

  const editContact = (updateContact: IContact) => {
    console.log({ updateContact })
    const newList = contacts.map((contact: IContact) => contact.id === updateContact.id ? updateContact : contact);

    console.log({ newList })
    setContacts(newList);
    localStorage.setItem('@contacts', JSON.stringify(newList));
  }

  const deleteContact = (id: number) => {
    const newList = contacts.filter((contact: IContact) => contact.id !== id);
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