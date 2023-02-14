import { CircleNotch } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { IContact } from '../../contexts/ContactsContext'
import { formatPhone } from '../../utils/formatPhone';
import { Button } from '../Button';
import { Input } from '../Input';
import { Loader } from '../Loader';
import { Container, Form, FormGroup } from './styles';

interface IContactForm {
  onSubmit: (data: IContact) => void;
  isSubmitting: boolean;
  contact?: IContact | null;
  isGettingContactData?: boolean;
}

export function ContactForm({
  onSubmit,
  isSubmitting,
  contact,
  isGettingContactData,
}: IContactForm) {

  const [formValues, setFormValues] = useState({
    name: "" as string | undefined,
    phone: "" as string | undefined,
  });

  const populateForm = () => {
    setFormValues({
      name: contact?.name,
      phone: contact?.phone,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    onSubmit({
      id: contact?.id || Math.floor(Math.random() * 50),
      name: formValues.name as string,
      phone: formValues.phone as string,
    })
  };

  useEffect(() => {
    populateForm();
  }, [contact])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            disabled={isGettingContactData}
            onChange={(e) => setFormValues({
              ...formValues,
              name: e.target.value,
            })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="phone">Phone</label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formValues.phone}
            disabled={isGettingContactData}
            maxLength={12}
            onChange={(e) => {
              const { value } = e.target;

              setFormValues({
                ...formValues,
                phone: formatPhone(value.replace(/\D/g, '')),
              })
            }}
          />
        </FormGroup>

        <Button
          type="submit"
          style={{
            width: '100%',
            height: '40px',
            marginTop: '8px'
          }}
          disabled={formValues.name === '' || formValues.phone === ''}
        >
          {isSubmitting ? 'Saving...' : 'Save'}
        </Button>

        {isGettingContactData && <Loader isVisible={isGettingContactData} />}
      </Form>
    </Container>
  )
}