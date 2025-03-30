import Head from "next/head";

export default function GamePicksPage() {
  const collections = [
    {
      title: "Top Mobile Games by Genre (MiniReview)",
      link: "https://minireview.io/top-mobile-games"
    },
    {
      title: "The 70 Best Mobile Games of 2024 Tier List (MiniReview)",
      link: "https://minireview.io/top-mobile-games/best-mobile-games-2024-tier-list"
    },
    {
      title: "Community-Sourced List by u/char_stats (Lemmy)",
      link: "https://lemm.ee/post/58686627"
    },
    {
      title: "Genre-Based Game List by u/ackmondual (Reddit)",
      link: "https://www.reddit.com/r/AndroidGaming/comments/15qttls/comment/jw64xp6/?utm_source=reddit&utm_medium=web2x&context=3"
    }
  ];

  const recommendations = [
    { title: "Balatro", genre: "Card Roguelike", link: "https://play.google.com/store/apps/details?id=com.playstack.balatro.android&hl=es_419", icon: "https://play-lh.googleusercontent.com/RSPv_SMlA3Lun8VHaJD7xCBQg29eCJR9sNJtZNJGlybVs8byYVLz4WnohrbLScC9srg=s48-rw" },
    { title: "Halls of Torment: Premium", genre: "Action Roguelite", link: "https://play.google.com/store/apps/details?id=com.halls.of.torment.paid.gp", icon: "https://play-lh.googleusercontent.com/L9SdwtjroejTBE-lFUA4FJ_HYFCf_QDxVbD1pxG_KiHhtb2uzw1l3XDhwcpiYgxeXNA=s48-rw" },
    { title: "Dead Cells", genre: "Metroidvania", link: "https://play.google.com/store/apps/details?id=com.playdigious.deadcells.mobile", icon: "https://play-lh.googleusercontent.com/Mn9NateYFRZQbWnlZvszDPoKZbeuZM2O-Kyn7EKRCZI3D8joecHqytfOx73IyuAwHw=s48-rw" },
    { title: "Dungeon Clawler", genre: "Deckbuilder Roguelike", link: "https://play.google.com/store/apps/details?id=com.strayfawnstudio.dungeonclawlermobile&hl=es_419", icon: "https://play-lh.googleusercontent.com/KfkUC0yhsEqVK3leNzxnun8Fq3Pr9Mtbf-gVYADHQ9XCOz8aYxTTRKZ1XLd-jaS2dThW=s48-rw" },
    { title: "Fortnite", genre: "Battle Royale", link: "https://store.epicgames.com/es-ES/mobile/android", icon: "https://img.utdstc.com/icon/8ab/ce5/8abce53baeb0d4e52298d5142f9b815bfae587acb18b12cbefb0feae5caba48d:200" },
    { title: "Fall Guys", genre: "Party Platformer", link: "https://store.epicgames.com/es-ES/mobile/android", icon: "https://preview.redd.it/fall-guys-mobile-icon-v0-d3n68howgkhd1.jpeg?auto=webp&s=c7f9e61f59f0800bdf628e344125d027642d2e88" },
    { title: "Rocket League Sideswipe", genre: "Arcade Sports", link: "https://store.epicgames.com/es-ES/mobile/android", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWnRLb8en9AdGZeoxLc7KVawG05kNv9V9MA&s" },
    { title: "Magic: The Gathering Arena", genre: "Card Game", link: "https://play.google.com/store/apps/details?id=com.wizards.mtga&hl=es_419", icon: "https://play-lh.googleusercontent.com/qI7ggnBdfCYpT1j2SoyIVdhG-bLAgDKpgrh53oLzSO20q1OPZ8CAyR116ERyXfVOnxM=w240-h480-rw" },
    { title: "Slay the Spire", genre: "Deckbuilder Roguelike", link: "https://play.google.com/store/apps/details?id=com.humble.SlayTheSpire&hl=es_419", icon: "https://play-lh.googleusercontent.com/ryhmN3MoDNXB_lsX85BaAk-N8errnNbS_KIYex1wgeBEfUzoYKFXQ1_ane9ASV19NOI=s48-rw" },
    { title: "ScourgeBringer", genre: "Action Platformer", link: "https://play.google.com/store/apps/details?id=com.pid.scourgebringer&hl=es_419", icon: "https://play-lh.googleusercontent.com/oYIDs-hvhiJPYadASFdQweY_pQxBXeP9aFjAhkehKm3BUy-XXCTCacg7p_aEbCpVx5Y=s48-rw" }
  ];

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
        <div className="bg-retroBlue border-4 border-black p-4 mb-6 text-center shadow-md dark:bg-[#2f2b45]">
          <p className="text-white font-bold text-sm">
            🎮 Looking for console games like PSP, GameCube, or Switch? Visit the <a href="/emulation" className="underline text-yellow-300">Emulation page</a> for the best emulator picks and setup guides!
          </p>
        </div>

        <h1 className="text-2xl text-retroPurple dark:text-retroYellow font-bold mb-6 text-center">
          Game Picks
        </h1>
        <p className="text-sm mb-6">
          Looking for the best native Android games for your RP5? These selections come from tier lists, personal testing, and community recommendations. You can also use the MiniReview platform to explore ratings, user reviews, and suggestions for both free and premium games.
        </p>

        <h2 className="text-xl font-bold text-retroBlue mb-4">🗂️ Game Collections & Tier Lists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {collections.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-black p-4 bg-retroBlue text-white text-center retro-button hover:scale-105 transition-transform duration-150"
            >
              <h3 className="text-lg font-bold break-words">{item.title}</h3>
            </a>
          ))}
        </div>

        <h2 className="text-xl font-bold text-retroBlue mb-4">🌟 My Recommended Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {recommendations.map((game, index) => (
            <a
              key={index}
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-black p-4 bg-retroPurple text-white text-center retro-button hover:scale-105 transition-transform duration-150"
            >
              <img src={game.icon} alt={game.title} className="w-16 h-16 mx-auto mb-2 border-2 border-black" />
              <h3 className="text-base font-bold break-words mb-1">{game.title}</h3>
              <span className="inline-block bg-yellow-200 text-black text-xs px-2 py-1 rounded-full">
                {game.genre}
              </span>
            </a>
          ))}
        </div>

        <div className="bg-retroBlue border-4 border-black p-4 text-center shadow-md dark:bg-[#2f2b45]">
          <p className="text-white font-bold text-sm">
            🎁 Don’t forget to check the <a href="https://store.epicgames.com/es-ES/mobile/android" target="_blank" className="underline text-yellow-300">Epic Games Store for Android</a> — they often give away free games!
          </p>
        </div>
      </div>
    </>
  );
}
