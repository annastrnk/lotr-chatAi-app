import { useState, useEffect } from "react";
import { sendMessage } from "../api/openai";

const STORAGE_KEY = "lotr-chat-history";

export default function useChatLogic() {
  const [character, setCharacter] = useState(() =>
    localStorage.getItem("lotr-chat-character") || "gandalf"
  );
  const [messages, setMessages] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return saved[character] || [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("lotr-chat-character", character);
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    setMessages(saved[character] || []);
  }, [character]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    saved[character] = messages;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }, [messages, character]);

  async function handleSend(text) {
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);


    try {
      const reply = await sendMessage(newMessages, character);
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Error: Could not get response." },
      ]);
    }

    setLoading(false);
  }

  return { character, setCharacter, messages, loading, handleSend };
}
