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

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl text-retroPurple dark:text-retroYellow font-bold mb-6 text-center">
          Game Picks
        </h1>
        <p className="text-sm mb-4">
          Looking for the best native Android games for your RP5? These selections come from tier lists, personal testing, and MiniReview recommendations:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <a
              href="https://minireview.io/top-mobile-games/best-mobile-games-2024-tier-list"
              target="_blank"
              rel="noopener noreferrer"
              className="faq-link"
            >
              2024 Mobile Games Tier List (MiniReview)
            </a>
          </li>
          <li>Gamepad-friendly games with great performance</li>
          <li>Hidden gems and indie titles perfect for handhelds</li>
        </ul>
      </div>
    </>
  );
}
