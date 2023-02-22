import { ListGroup } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

function Conversations() {
  const { conversations, selectConversationIndex } = useConversations();
  console.log(conversations)
  return (
    <ListGroup variant="flush">
      {conversations?.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          active={conversation.selected}
          onClick={() => selectConversationIndex(index)}
        >
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Conversations;
