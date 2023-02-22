import { ListGroup } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

function Contacts({ id }) {
  const { contacts } = useContacts();
  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => (
        <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Contacts;
