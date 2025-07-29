import useChatLogic from "./hooks/useChatLogic";
import useLongWait from "./hooks/useLongWait";
import ChatBox from "./components/ChatBox";
import CharacterSelector from "./components/CharacterSelector";

export default function App() {
  const { character, setCharacter, messages, loading, handleSend } = useChatLogic();
  const longWait = useLongWait(loading);

  return (
    <div
      className="min-h-[100dvh] w-full bg-cover bg-center flex items-center justify-center px-2 sm:px-4 overflow-x-hidden"
      style={{
        backgroundImage: "url('/assets/lord-of-the-rings-wallpaper-6.jpg')",
      }}
    >
      <div
        className="relative flex flex-col w-full max-w-[600px] rounded-2xl shadow-[0_3px_20px_rgba(0,0,0,0.5)] border border-[#C5A300]/30 backdrop-blur-sm overflow-hidden h-[calc(100dvh-32px)] bg-transparent pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] my-2 sm:my-4"
      >
        <div className="px-2 sm:px-4 py-2 sm:py-3 ">
          <h1 className="text-lg sm:text-3xl font-lotr font-bold text-center text-[#FFD700]">
            Chat with Lord of the Rings characters
          </h1>
          <CharacterSelector character={character} setCharacter={setCharacter} />
        </div>

        <div className="flex flex-col flex-1 overflow-hidden">
          <ChatBox
            messages={messages}
            onSend={handleSend}
            loading={loading}
            longWait={longWait}
          />
        </div>
      </div>
    </div>
  );
}

