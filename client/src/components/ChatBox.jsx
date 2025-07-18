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
    <div
    className="
      flex flex-col
      h-[80vh] sm:h-[90vh]     
      max-h-[90vh]
      w-full max-w-[95%] sm:max-w-[600px] 
      p-2 sm:p-6            
      bg-[#1B3A2E] text-[#E2D6B3]
      rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.6)]
      border border-[#C5A300]/30 backdrop-blur-sm
      mx-auto my-2 sm:my-4     
    "
  >
      <div className="flex-grow overflow-y-auto mb-4 space-y-2">
        {messages.length === 0 && (
          <p className="text-center font-lotr text-[#C5A300] italic opacity-80">
            ✨ Speak, friend, and enter...
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`relative p-3 rounded-xl shadow-lg ${
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
        className="flex mt-2 shadow-inner rounded-lg overflow-hidden"
      >
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-grow font-lotr p-3 text-[#1B3A2E] bg-[#E2D6B3] placeholder-[#7D7D7D] focus:outline-none"
          value={input}
          disabled={loading}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#C5A300] text-[#1B3A2E] font-lotr px-6 hover:bg-[#FFD700] transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
