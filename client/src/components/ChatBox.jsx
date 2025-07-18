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
    <div className="flex flex-col h-full p-6 bg-[#1B3A2E] text-[#E2D6B3] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] border border-[#C5A300]/30 backdrop-blur-sm">
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
          msg.role === 'user'
            ? 'bg-[#2E2620]/90 text-[#FFD700] self-end border border-[#C5A300]/50'
            : 'bg-[#3C6E47]/90 text-[#E2D6B3] self-start border border-[#E2D6B3]/30'
        }`}
      >
        <p className="font-lotr">{msg.content}</p>
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
  <form onSubmit={handleSubmit} className="flex mt-2 shadow-inner rounded-lg overflow-hidden">
    <input
      type="text"
      placeholder="Write a message..."
      className="flex-grow font-lotr p-3 text-[#1B3A2E] bg-[#E2D6B3] placeholder-[#7D7D7D] focus:outline-none"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="bg-[#C5A300] text-[#1B3A2E] font-lotr px-6 hover:bg-[#FFD700] transition-colors"
    >
      Send
    </button>
  </form>
</div>

//     <div className="flex flex-col h-full p-4 bg-[#1B3A2E] text-[#E2D6B3] rounded-md shadow-lg">
//   <div className="flex-grow overflow-y-auto mb-4">
//     {messages.length === 0 && (
//       <p className="text-center font-lotr text-[#C5A300] mt-10">
//         Speak, friend, and enter...
//       </p>
//     )}
//     {messages.map((msg, i) => (
//       <div
//         key={i}
//         className={`mb-2 max-w-[80%] p-3 rounded-lg shadow ${
//           msg.role === 'user'
//             ? 'bg-[#2E2620] text-[#FFD700] self-end border border-[#C5A300]'
//             : 'bg-[#3C6E47] text-[#E2D6B3] self-start border border-[#E2D6B3]'
//         }`}
//       >
//         <p className="font-lotr">{msg.content}</p>
//       </div>
//     ))}
//     <div ref={messagesEndRef} />
//   </div>
//   <form onSubmit={handleSubmit} className="flex">
//     <input
//       type="text"
//       placeholder="Write a message..."
//       className="flex-grow font-lotr rounded-l-md p-2 text-black border border-[#C5A300]"
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//     />
//     <button
//       type="submit"
//       className="bg-[#C5A300] text-[#1B3A2E] font-lotr px-4 rounded-r-md hover:bg-[#FFD700] transition"
//     >
//       Send
//     </button>
//   </form>
// </div>

    // <div className="flex flex-col h-full p-4 bg-gray-800 text-white rounded-md">
    //   <div className="flex-grow overflow-y-auto mb-4">
    //     {messages.length === 0 && <p className="text-center font-lotr text-gray-400 mt-10">Start a conversation...</p>}
    //     {messages.map((msg, i) => (
    //       <div key={i} className={`mb-2 max-w-[80%] p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-600 self-end' : 'bg-gray-700 self-start'}`}>
    //         <p>{msg.content}</p>
    //       </div>
    //     ))}
    //     <div ref={messagesEndRef} />
    //   </div>
    //   <form onSubmit={handleSubmit} className="flex">
    //     <input
    //       type="text"
    //       placeholder="Write a message..."
    //       className="flex-grow font-lotr rounded-l-md p-2 text-black"
    //       value={input}
    //       onChange={(e) => setInput(e.target.value)}
    //     />
    //     <button type="submit" className="bg-blue-500 font-lotr px-4 rounded-r-md hover:bg-blue-600 transition">
    //     Sent
    //     </button>
    //   </form>
    // </div>
  )
}
