"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import AIChat from "@/hooks/chabot";

interface Message {
  id: string;
  content: string;
  sender: "me" | "other";
}

interface FloatingChatButtonProps {
  userId: string;
  userAvatar: string;
}

export default function FloatingChatButton({
  userId,
  userAvatar,
}: FloatingChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! I am here to help you!!!",
      sender: "other",
    },
  ]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const msg: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "me",
    };

    setMessages((prev) => [...prev, msg]);
    setNewMessage("");
  try {
    const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newMessage }),
    });
    const data = await response.json();
    if (data.success) {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.analysis,
        sender: "other",
      };
      setMessages((prev) => [...prev, aiResponse]);
    } else {
      throw new Error(data.error || "Analysis failed");
    }
  } catch (error) {
    console.error("Failed to analyze text:", error);
  }

  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#FCD34D] hover:bg-[#FBBF24] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <AIChat
            userId={userId}
            userAvatar={userAvatar}
            messages={messages}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            onSendMessage={handleSendMessage}
          />
        </div>
      )}
    </>
  );
}
