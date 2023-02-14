import { MagnifyingGlass, Pencil, Plus, TrashSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { DeleteModal } from "../../components/DeleteModal";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ContactsContext, IContact } from "../../contexts/ContactsContext";
import { ActionsContainer, ContactBox, ContactInfo, ContactsList, Container, HeaderContainer, HeaderActions, Title, NoContacts } from "./styles";

interface Contact {
  id: number
  name: string;
  phone: string;
}

export default function Home() {
  const { contacts, deleteContact } = useContext(ContactsContext);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact>({} as Contact);
  const [search, setSearch] = useState('')

  const navigate = useNavigate();

  const handleDelete = (contact: IContact) => {
    setContactToDelete(contact);
    setIsDeleteModalOpen(true);
  }

  const filteredContacts = contacts.filter((contact) => {
    return contact?.name?.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <DeleteModal
        isVisible={isDeleteModalOpen}
        contact={contactToDelete}
        close={() => setIsDeleteModalOpen(false)}
      />

      <Container>
        <Header />

        {contacts.length > 0 ? (
          <>
            <HeaderContainer>
              <Input
                placeholder="Search contacts"
                value={search}
                onChange={(event: any) => setSearch(event.target.value)}
              />
              <MagnifyingGlass size={24} className='search-icon' color="#fff" />
              <HeaderActions>
                <p>
                  {filteredContacts.length === 1 ? `${filteredContacts.length} contact` : `${filteredContacts.length} contacts`}
                </p>
                <Button
                  onClick={() => navigate(`/create`)}
                >
                  <Plus size={16} weight={"bold"} /> Add new
                </Button>
              </HeaderActions>
              <hr />
            </HeaderContainer>

            <ContactsList>
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact) => (
                  <ContactBox key={contact.id}>
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
                        onClick={() => handleDelete(contact)}
                        className='delete-icon'
                      />
                    </ActionsContainer>
                  </ContactBox>
                ))
              ) : (
                <Title style={{ fontSize: '24px' }}>Sorry, no results found.</Title>
              )}
            </ContactsList>
          </>
        ) : (
          <NoContacts>
            <HeaderContainer>
              <HeaderActions>
                <p>
                  {filteredContacts.length === 1 ? `${filteredContacts.length} contact` : `${filteredContacts.length} contacts`}
                </p>
                <Button
                  onClick={() => navigate(`/create`)}
                >
                  <Plus size={16} weight={"bold"} /> Add new
                </Button>
              </HeaderActions>
              <hr />
            </HeaderContainer>
            <h3>You don't have any contacts yet.</h3>
            <p>Click on the button below ☝🏾 to add your first contact.</p>
          </NoContacts>
        )}
      </Container>
    </>
  )
}