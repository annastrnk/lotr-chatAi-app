import React, { useState } from 'react'
import ChatBox from './components/ChatBox'
import CharacterSelector from './components/CharacterSelector'
import { sendMessage } from './api/openai'

export default function App() {
  const [messages, setMessages] = useState([])
  const [character, setCharacter] = useState('gandalf')
  const [loading, setLoading] = useState(false)

  async function handleSend(text) {
    const newMessages = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setLoading(true)
    try {
      const reply = await sendMessage(newMessages, character)
      setMessages([...newMessages, { role: 'assistant', content: reply }])
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Error: Could not get response.' }])
    }
    setLoading(false)
  }

  return (
    <div   className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: "url('../assets/lord-of-the-rings-wallpaper-6.jpg" }}>
    <div className="max-w-3xl mx-auto p-4 h-screen flex flex-col"
    >
      {/* <img src="../assets/lord-of-the-rings-wallpaper-6.jpg" alt="" /> */}
      <h1 className="text-3xl  font-lotr font-bold mb-4 text-center">Chat with Lord of the Rings characters</h1>
      <CharacterSelector character={character} setCharacter={setCharacter} />
      <ChatBox messages={messages} onSend={handleSend} />
      {loading && <p className="text-center font-lotr mt-2 text-gray-500">I am writing a reply...</p>}
    </div>
    </div>
  )
}
