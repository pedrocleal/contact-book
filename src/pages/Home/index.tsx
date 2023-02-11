import { MagnifyingGlass, Pencil, Plus, TrashSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ContactsContext } from "../../contexts/ContactsContext";
import { ActionsContainer, ContactBox, ContactInfo, ContactsList, Container, HeaderContainer, HeaderActions, Title } from "./styles";

interface Contact {
  id: number
  name: string;
  phone: string;
  email: string;
}

export default function Home() {
  const { contacts, deleteContact } = useContext(ContactsContext)
  const [search, setSearch] = useState('')

  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    deleteContact(id)
  }

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Container>
      <Header />
      <HeaderContainer>
        <Input
          placeholder="Pesquisar contatos"
          value={search}
          onChange={(event: any) => setSearch(event.target.value)}
        />
        <MagnifyingGlass size={24} className='search-icon' color="#fff" />
        <HeaderActions>
          <p>
            {contacts.length === 1 ? `${contacts.length} contato` : `${contacts.length} contatos`}
          </p>
          <Button
            onClick={() => navigate(`/create`)}
          >
            <Plus size={16} weight={"bold"} /> Adicionar
          </Button>
        </HeaderActions>
        <hr />
      </HeaderContainer>

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