export default function LoadingMessage({ longWait }) {
    return (
      <div className="text-center text-yellow-300 font-lotr text-sm italic animate-pulse mb-2">
        {longWait ? (
          <>
            🕰️ The Council still speaks... <br />
            <span className="text-xs text-yellow-200">
              Great wisdom takes great time.
            </span>
          </>
        ) : (
          <>
            🧙‍♂️ Your message drifts across the lands of Middle-earth... <br />
            <span className="text-xs text-yellow-200">
              The wisdom of ages takes time.
            </span>
          </>
        )}
      </div>
    );
  }
  