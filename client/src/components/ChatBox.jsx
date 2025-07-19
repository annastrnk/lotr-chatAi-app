import React, { useState, useEffect, useRef } from "react";

export default function ChatBox({ messages, onSend, loading }) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  }
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
    <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2">
      {messages.length === 0 && (
        <p className="text-center font-lotr text-[#C5A300] italic opacity-80">
          ✨ Speak, friend, and enter...
        </p>
      )}
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`relative p-2 rounded-xl shadow ${
            msg.role === "user"
              ? "bg-[#2E2620]/90 text-[#FFD700] self-end border border-[#C5A300]/50"
              : "bg-[#3C6E47]/90 text-[#E2D6B3] self-start border border-[#E2D6B3]/30"
          }`}
        >
          <p className="font-lotr">{msg.content}</p>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>

    <form
      onSubmit={handleSubmit}
      className="
        flex mt-1 shadow-inner rounded-t-lg overflow-hidden
        p-1 sm:p-2 bg-[#1B3A2E]/90
        sticky bottom-0 left-0 w-full
      "
    >
      <input
        type="text"
        placeholder="Write a message..."
        className="
          flex-grow font-lotr p-2
          text-sm sm:text-base text-[#1B3A2E]
          bg-[#E2D6B3] placeholder-[#7D7D7D]
        "
        value={input}
        disabled={loading}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        inputMode="text"
      />
      <button
        type="submit"
        disabled={loading}
        className="
          bg-[#C5A300] text-[#1B3A2E] font-lotr
          px-3 sm:px-6 hover:bg-[#FFD700] transition-colors
        "
      >
        Send
      </button>
    </form>
  </div>
  );
}
