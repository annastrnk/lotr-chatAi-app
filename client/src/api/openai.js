import axios from 'axios'
const API_URL =' https://lotr-chat-server.onrender.com'|| 'http://localhost:3001'

export async function sendMessage(messages, character) {
  const response = await axios.post(`${API_URL}/chat`, { messages, character })
  return response.data.reply
}
