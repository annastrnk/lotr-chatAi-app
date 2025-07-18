import React from "react";

export default function CharacterSelector({ character, setCharacter }) {
  const characters = [
    { id: "gandalf", name: "Gandalf" },
    { id: "frodo", name: "Frodo" },
    { id: "aragorn", name: "Aragorn" },
    { id: "gollum", name: "Gollum" },
    { id: "saruman", name: "Saruman" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 px-2">
      {characters.map((c) => (
        <button
          key={c.id}
          className={`px-4 py-2 text-sm sm:px-5 sm:text-base font-lotr rounded-lg shadow-md border transition-all duration-300
        ${
          character === c.id
            ? "bg-[#3C6E47] text-[#FFD700] border-[#C5A300] shadow-[0_4px_10px_rgba(197,163,0,0.5)]"
            : "bg-[#2E2620] text-[#E2D6B3] border-[#E2D6B3]/30 hover:bg-[#3C6E47]/70 hover:text-[#FFD700]"
        }
      `}
          onClick={() => setCharacter(c.id)}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
