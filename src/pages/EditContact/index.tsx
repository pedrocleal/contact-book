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
      toast.error('Erro ao carregar os dados do contato')
    } finally {
      setIsGettingContactData(false)
    }
  }

  const handleSubmit = async (data: Contact) => {
    try {
      setLoading(true);
      await delay(1000);
      editContact(data);
      toast.success('Contato editado com sucesso');
      navigate('/')
    } catch (error) {
      toast.error('Erro ao editar o contato')
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
          <span>Voltar</span>
        </button>

        <Title>Editar contato</Title>
        <Subtitle>Edite os dados do contato selecionado.</Subtitle>
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
