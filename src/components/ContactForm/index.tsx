import { useState } from 'react';
import { IContact } from '../../contexts/ContactsContext'
import { Button } from '../Button';
import { Input } from '../Input';
import { Container, Form, FormGroup } from './styles';

interface IContactForm {
  onSubmit: (data: IContact) => void;
  isSubmitting: boolean;
}

export function ContactForm({ onSubmit, isSubmitting }: IContactForm) {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 50),
      name: formValues.name,
      phone: formValues.phone,
    })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={(e) => setFormValues({
              ...formValues,
              name: e.target.value,
            })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="phone">Telefone</label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={(e) => setFormValues({
              ...formValues,
              phone: e.target.value,
            })}
          />
        </FormGroup>

        <Button
          type="submit"
          style={{
            width: '100%',
            height: '40px'
          }}
          disabled={formValues.name === '' || formValues.phone === ''}
        >
          {isSubmitting ? 'Salvando...' : 'Salvar'}
        </Button>
      </Form>
    </Container>
  )
}