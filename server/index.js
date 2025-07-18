import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY })

const characterContext = {
  gandalf: 'You are Gandalf the Grey. Speak wisely.',
  frodo: 'You are Frodo, a brave hobbit.',
  aragorn: 'You are Aragorn, a noble ranger.',
  gollum: "You are Gollum. Speak obsessively about the precious."
}

app.post('/chat', async (req, res) => {
  try {
    const { messages, character } = req.body
    const context = characterContext[character] || characterContext.gandalf
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: context }, ...messages]
    })
    res.json({ reply: response.choices[0].message.content })
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))
