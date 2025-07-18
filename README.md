# LOTR Chat App

React + Express чат з персонажами Володаря Перснів. Запусти `npm install` у `client/` і `server/`, додай OpenAI ключ у `.env`, і починай розмову!

🧙 Middle-earth Chat — React + OpenAI

Чат-додаток, у якому можна спілкуватися з персонажами з "Володаря Перснів": Гендальфом, Фродо, Арагорном або Голлумом. Побудовано з використанням React, Express та OpenAI API.

🔧 Технології

React + Vite (Frontend)

TailwindCSS + shadcn/ui (UI компоненти)

Express.js (Backend)

OpenAI GPT-3.5 API

📦 Як запустити локально

1. Клонуй репозиторій

git clone https://github.com/your-username/lotr-chat-app.git
cd lotr-chat-app

2. Встанови залежності (Frontend)

npm install

3. Налаштуй Backend

cd server
npm install

Створи файл .env у папці server/:

OPENAI_SECRET_KEY=your_openai_key_here

4. Запусти Backend

node index.js

5. Запусти Frontend

У головній директорії:

npm run dev

Перейди в браузері на:

http://localhost:5173

⚙️ Можливості

💬 Спілкування з чат-ботом у ролі Гендальфа, Фродо, Арагорна чи Голлума

📜 Зберігається історія діалогу

🔄 Перемикання персонажів

🚀 Підготовлено до деплою на Vercel (frontend) + Render (backend)

☁️ Деплой (опційно)

Vercel (Frontend)

Зареєструйся на vercel.com

Імпортуй репозиторій з GitHub

Встанови root-папку як /

Render (Backend)

Зареєструйся на render.com

Створи новий Web Service

Вкажи стартовий файл: index.js

Додай ENV-перемінну OPENAI_SECRET_KEY

📄 Ліцензія

MIT License — використовуй в особистих або навчальних проектах без обмежень 🧡

Створено як навчальний проект з любов’ю до світу Толкіна ✨