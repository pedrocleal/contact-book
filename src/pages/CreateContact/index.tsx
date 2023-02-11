import { ArrowLeft } from "phosphor-react";
import React, { useState, useEffect, useContext, useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactForm } from "../../components/ContactForm";
import { Header } from "../../components/Header";
import { ContactsContext } from "../../contexts/ContactsContext";
import { Container } from "./styles";

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
      <Link to='/'>
        <ArrowLeft />
        <p>Voltar</p>
      </Link>
      <ContactForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
    </Container>
  );
};
