import React, { useState, useEffect } from "react";
import ChatBox from "./components/ChatBox";
import CharacterSelector from "./components/CharacterSelector";
import { sendMessage } from "./api/openai";

const STORAGE_KEY = "lotr-chat-history";

export default function App() {
  const [character, setCharacter] = useState(() => {
    return localStorage.getItem("lotr-chat-character") || "gandalf";
  });

  const [messages, setMessages] = useState(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const histories = JSON.parse(savedData);
      const currentChar =
        localStorage.getItem("lotr-chat-character") || "gandalf";
      return histories[currentChar] || [];
    }
    return [];
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("lotr-chat-character", character);

    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const histories = JSON.parse(savedData);
      setMessages(histories[character] || []);
    } else {
      setMessages([]);
    }
  }, [character]);

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    let histories = savedData ? JSON.parse(savedData) : {};
    histories[character] = messages;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(histories));
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
  return (
<div
  className="
    min-h-screen w-full bg-cover bg-center 
    flex items-center justify-center px-2 sm:px-4
    overflow-hidden
  "
  style={{
    backgroundImage: "url('/assets/lord-of-the-rings-wallpaper-6.jpg')",
  }}
>
  <div
    className="
      relative flex flex-col
      w-full max-w-[600px] 
      rounded-2xl shadow-[0_3px_20px_rgba(0,0,0,0.5)]
      border border-[#C5A300]/30 backdrop-blur-sm
      overflow-hidden
      h-[calc(100dvh-16px)]
      bg-transparent
    "
  >
    <div className="px-2 sm:px-4 pb-2 sm:pb-3">
      <h1 className="text-xl sm:text-3xl font-lotr font-bold text-center text-[#FFD700]">
        Chat with Lord of the Rings characters
      </h1>

      <CharacterSelector character={character} setCharacter={setCharacter} />
    </div>
    <div
      className="
        flex flex-col flex-1 overflow-hidden
        rounded-t-3xl
        p-2 sm:p-4
      "
    >
      <ChatBox messages={messages} onSend={handleSend} loading={loading} />
    </div>
  </div>
</div>


  );
}
