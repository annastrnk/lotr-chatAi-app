import React, { useState, useEffect, useRef } from 'react'

export default function ChatBox({ messages, onSend }) {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return
    onSend(input.trim())
    setInput('')
  }

  return (
    <div className="flex flex-col h-full p-4 bg-gray-800 text-white rounded-md">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.length === 0 && <p className="text-center text-gray-400 mt-10">Start a conversation...</p>}
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 max-w-[80%] p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-600 self-end' : 'bg-gray-700 self-start'}`}>
            <p>{msg.content}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-grow rounded-l-md p-2 text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 px-4 rounded-r-md hover:bg-blue-600 transition">
        Sent
        </button>
      </form>
    </div>
  )
}
