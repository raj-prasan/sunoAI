import Chat from "@/components/basic-chat";

interface Message {
  id: string;
  content: string;
  sender: "me" | "other";
}

interface AIChatProps {
  userId: string;
  userAvatar: string;
  messages: Message[];
  newMessage: string;
  setNewMessage: (newMessage: string) => void;
  onSendMessage: () => void;
}

export default function AIChat({
  userId,
  userAvatar,
  messages,
  newMessage,
  setNewMessage,
  onSendMessage,
}: AIChatProps) {
  return (
    <Chat
      userName={userId}
      userAvatar={userAvatar}
      userOnline={true}
      messages={messages}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      onSendMessage={onSendMessage}
    />
  );
}
