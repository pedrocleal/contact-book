import { ArrowLeft } from "phosphor-react";
import React, { useState, useEffect, useContext, useReducer } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactForm } from "../../components/ContactForm";
import { Header } from "../../components/Header";
import { ContactsContext } from "../../contexts/ContactsContext";
import { delay } from "../../utils/delay";
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
    try {
      setIsSubmitting(true);
      await delay(1000);
      createContact({
        id: Math.floor(Math.random() * 50),
        name: contact.name,
        phone: contact.phone,
      })
      toast.success('Contact successfully created!');
      navigate('/')
    } catch (error) {
      toast.error('Error creating new contact.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container>
      <Header />
      <HeaderContent>
        <button className="back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} color='#9E55FC' />
          <span>Back</span>
        </button>

        <Title>Create new contact</Title>
        <Subtitle>Fill up the form.</Subtitle>
      </HeaderContent>

      <hr />

      <ContactForm isSubmitting={isSubmitting} onSubmit={handleSubmit} />
    </Container>
  );
};
