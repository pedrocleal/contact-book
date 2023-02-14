import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { toast } from 'react-hot-toast'
import { delay } from "../../utils/delay";
import { ArrowLeft } from "phosphor-react";
import { Container, HeaderContent, Subtitle, Title } from "./styles";
import { ContactForm } from "../../components/ContactForm";
import { ContactsContext } from "../../contexts/ContactsContext";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

export default function EditContact() {
  const { id } = useParams();
  const [contactToEdit, setContactToEdit] = useState<Contact>();
  const [loading, setLoading] = useState(false);
  const [isGettingContactData, setIsGettingContactData] = useState(true);

  const { contacts, editContact } = useContext(ContactsContext)

  const navigate = useNavigate();

  const loadContactData = async () => {
    try {
      setIsGettingContactData(true)
      await delay(1000);
      // const contactsList = JSON.parse(localStorage.getItem('@contacts') || '[]')
      const contact = contacts?.find((contact: Contact) => contact.id === Number(id))

      setContactToEdit(contact);
    } catch (error) {
      toast.error('Error loading contact details.')
    } finally {
      setIsGettingContactData(false)
    }
  }

  const handleSubmit = async (data: Contact) => {
    try {
      setLoading(true);
      await delay(1000);
      editContact(data);
      toast.success('Contact edited successfully!');
      navigate('/')
    } catch (error) {
      toast.error('Error editing contact.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadContactData();
  }, [])

  return (
    <Container>
      <Header />
      <HeaderContent>
        <button className="back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} color='#9E55FC' />
          <span>Back</span>
        </button>

        <Title>Edit contact</Title>
        <Subtitle>Edit the selected contact details.</Subtitle>
      </HeaderContent>

      <hr />

      <ContactForm
        contact={contactToEdit}
        onSubmit={handleSubmit}
        isSubmitting={loading}
        isGettingContactData={isGettingContactData}
      />
    </Container>
  );
};
