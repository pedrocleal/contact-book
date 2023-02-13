import { ArrowLeft } from "phosphor-react";
import React, { useState, useEffect, useContext, useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactForm } from "../../components/ContactForm";
import { Header } from "../../components/Header";
import { ContactsContext } from "../../contexts/ContactsContext";
import { Container, HeaderContent, Subtitle, Title } from "./styles";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

export default function CreateContact() {
  const [loading, setLoading] = useState(false);
  const { createContact } = useContext(ContactsContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (contact: Contact) => {
    setIsSubmitting(true);

    createContact({
      id: Math.floor(Math.random() * 50),
      name: contact.name,
      phone: contact.phone,
    })

    setIsSubmitting(false);
    navigate('/')
  }

  return (
    <Container>
      <Header />
      <HeaderContent>
        <button className="back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} color='#9E55FC' />
          <span>Voltar</span>
        </button>

        <Title>Criar novo contato</Title>
        <Subtitle>Preencha o formulário.</Subtitle>
      </HeaderContent>

      <hr />

      <ContactForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
    </Container>
  );
};
