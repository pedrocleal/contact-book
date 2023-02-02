import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function EditContact() {
  const { id } = useParams();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      const response = await fetch(`http://localhost:3000/contacts/${id}`);
      const data = await response.json();
      setContact(data);
      setLoading(false);
    };
    fetchContact();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Contact</h1>
      {/* <ContactForm contact={contact} /> */}
    </div>
  );
};
