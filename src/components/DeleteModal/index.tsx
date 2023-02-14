import { useContext } from "react";
import reactDom from "react-dom";
import { ContactsContext, IContact } from "../../contexts/ContactsContext";
import { Container, Overlay } from "./styles";

interface IDeleteModalProps {
  isVisible: boolean;
  contact: IContact;
  close: () => void;
}

export function DeleteModal({ isVisible, contact, close }: IDeleteModalProps) {

  const { deleteContact } = useContext(ContactsContext)

  if (!isVisible) return null;

  return reactDom.createPortal(
    <Overlay>
      <Container>
        <h2>Remove {contact?.name}, from your contacts list?</h2>
        <div className="actions">
          <button className="cancel" onClick={() => close()}>Cancel</button>
          <button className="remove" onClick={() => {
            deleteContact(contact.id)
            close()
          }}>Remove</button>
        </div>
      </Container>
    </Overlay>,
    document.getElementById("modal-root") as Element
  )
}