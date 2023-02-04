import { MagnifyingGlass, Pencil, TrashSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components";
import { ContactsContext } from "../../contexts/ContactsContext";
import { ActionsContainer, ContactBox, ContactInfo, ContactsList, Container, Header, HeaderActions, Title } from "./styles";

interface Contact {
  id: number
  name: string;
  phone: string;
  email: string;
}

export default function Home() {
  const { contacts, deleteContact } = useContext(ContactsContext)
  const [search, setSearch] = useState('')

  const handleDelete = (id: number) => {
    deleteContact(id)
  }

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Container>
      <Header>
        <Title>CONTACTS <strong>LIST</strong></Title>
        <Input
          placeholder="Pesquisar contatos"
          value={search}
          onChange={(event) => setSearch(event.target.value)} />
        <MagnifyingGlass size={24} className='search-icon' color="#fff" />
        <HeaderActions>
          <p>
            {contacts.length === 1 ? `${contacts.length} contato` : `${contacts.length} contatos`}
          </p>
          {/* TODO: Create button component */}
          <Link to={'/create'}>Adicionar contato</Link>
        </HeaderActions>
        <hr />
      </Header>

      <ContactsList>
        {filteredContacts.map((contact) => (
          <ContactBox>
            <ContactInfo>
              <p>{contact.name}</p>
              <span>{contact.phone}</span>
            </ContactInfo>
            <ActionsContainer>
              <Link to={`/edit/${contact.id}`}>
                <Pencil color="#9B51E0" size={24} />
              </Link>
              <TrashSimple
                color="#D6014F"
                size={24}
                onClick={() => handleDelete(contact.id)}
                className='delete-icon'
              />
            </ActionsContainer>
          </ContactBox>
        ))}
      </ContactsList>
    </Container>
  )
}