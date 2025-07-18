import React from 'react'

export default function CharacterSelector({ character, setCharacter }) {
  const characters = [
    { id: 'gandalf', name: 'Gaandalf' },
    { id: 'frodo', name: 'Frodo' },
    { id: 'aragorn', name: 'Aragorn' },
    { id: 'gollum', name: 'Gollum' }
  ]

  return (
    <div className="flex gap-3 mb-4">
      {characters.map((c) => (
        <button
          key={c.id}
          className={`px-4 py-2 rounded ${character === c.id ? 'bg-green-600 text-white' : 'bg-gray-300'}`}
          onClick={() => setCharacter(c.id)}
        >
          {c.name}
        </button>
      ))}
    </div>
  )
}
