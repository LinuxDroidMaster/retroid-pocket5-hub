import Head from "next/head";

export default function GamePicksPage() {
  return (
    <>
      <Head>
        <title>Game Picks - Retroid Pocket 5 Hub</title>
        <meta
          name="description"
          content="Discover top Android games that run great on the Retroid Pocket 5. Hand-picked and tier listed!"
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="bg-retroBlue border-4 border-black p-4 text-center shadow-md dark:bg-[#2f2b45]">
            <p className="text-white font-bold text-sm">
              🎮 Looking for console games like PSP, GameCube, or Switch? Visit the{' '}
              <a href="/emulation" className="underline text-yellow-300">Emulation page</a> for the best emulator picks and setup guides!
            </p>
          </div>
          <div className="bg-retroBlue border-4 border-black p-4 text-center shadow-md dark:bg-[#2f2b45]">
            <p className="text-white font-bold text-sm">
              🕹️ Want even more Android game recommendations including ports, mods, and native games? Check out{' '}
              <a href="https://www.emuhub.dev/gaming" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300">
                EmuHub's Gaming Section
              </a>
              !
            </p>
          </div>
        </div>

        <h1 className="text-2xl text-retroPurple dark:text-retroYellow font-bold mb-6 text-center">
          Game Picks
        </h1>
        <p className="text-sm mb-6 text-center">
          Looking for the best native Android games for your RP5 or any other handheld? Be sure to explore EmuHub for a wider and more up-to-date selection.
        </p>

        <div className="bg-retroBlue border-4 border-black p-4 text-center shadow-md dark:bg-[#2f2b45]">
          <p className="text-white font-bold text-sm">
            🔗 Visit{' '}
            <a href="https://www.emuhub.dev/gaming" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300">
              emuhub.dev/gaming
            </a>{' '}
            for the full collection.
          </p>
        </div>
      </div>
    </>
  );
}
