export const metadata = {
  title: "Emulation - Retroid Pocket 5 Hub",
  description: "Explore emulator compatibility, settings, and system-specific tips for the RP5.",
};

export default function EmulationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div className="bg-retroBlue border-4 border-black p-4 text-center shadow-md dark:bg-[#2f2b45]">
          <p className="text-white font-bold text-sm">
            📋 Looking for compatibility info across consoles like Switch, PS2, Vita, and more? Check out the{' '}
            <a
              href="https://docs.google.com/spreadsheets/d/1BiFqYhWWJRHcR_O_LDbv2OwZ1kTLkClMd0uGVjpaXWw/edit?gid=1416015230#gid=1416015230"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow-300"
            >
              Ryan Retro Compatibility Spreadsheet
            </a>
          </p>
        </div>
        <div className="bg-retroBlue border-4 border-black p-4 text-center shadow-md dark:bg-[#2f2b45]">
          <p className="text-white font-bold text-sm">
            📺 New to Android emulation? Don’t miss Retro Game Corps’ latest guide:{' '}
            <a
              href="https://www.youtube.com/watch?v=I4mqgcDYZFo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow-300"
            >
              Watch on YouTube
            </a>
          </p>
        </div>
      </div>

      <h1 className="text-2xl text-retroPurple dark:text-[#b48ce0] font-bold mb-8 text-center">
        Emulation
      </h1>

      <div className="bg-retroBlue border-4 border-black p-4 text-center shadow-md dark:bg-[#2f2b45] max-w-2xl mx-auto">
        <p className="text-white font-bold text-sm">
          🕹️ The full, updated list of recommended emulators and settings is now available at{' '}
          <a
            href="https://www.emuhub.dev/emulation"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-yellow-300"
          >
            EmuHub.dev/emulation
          </a>
        </p>
      </div>
    </div>
  );
}
