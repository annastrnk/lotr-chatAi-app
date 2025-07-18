import axios from 'axios'
 const API_URL =
import.meta.env.MODE === 'development'
  ? 'http://localhost:3001'
  : 'https://lotr-chat-server.onrender.com'



export async function sendMessage(messages, character) {
  const response = await axios.post(`${API_URL}/chat`, { messages, character })
  console.log(response);
  return response.data.reply
}
