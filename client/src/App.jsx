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
      className="h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/assets/lord-of-the-rings-wallpaper-6.jpg')",
      }}
    >
      <div className="max-w-[600px] w-full mx-auto p-3 sm:p-6 flex flex-col max-h-[90vh] overflow-y-auto">
        <h1 className="text-3xl font-lotr font-bold mb-4 text-center">
          Chat with Lord of the Rings characters
        </h1>

        <CharacterSelector character={character} setCharacter={setCharacter} />

        <ChatBox messages={messages} onSend={handleSend} loading={loading} />

        {loading && (
          <p className="text-center font-lotr mt-2 text-gray-500">
            I am writing a reply...
          </p>
        )}
      </div>
    </div>
  );
}
