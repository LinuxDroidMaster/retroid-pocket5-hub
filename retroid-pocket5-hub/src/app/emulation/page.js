export const metadata = {
  title: "Emulation - Retroid Pocket 5 Hub",
  description: "Explore emulator compatibility, settings, and system-specific tips for the RP5.",
};

export default function EmulationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl text-retroPurple dark:text-[#b48ce0]} font-bold mb-8 text-center">
        Emulation
      </h1>

      {/* PlayStation Section */}
      <SectionGroup title="PlayStation">
        <EmuCard
          system="PSX"
          note="Use DuckStation from the Play Store."
          buttons={[
            { label: "Download DuckStation", href: "https://play.google.com/store/apps/details?id=com.github.stenzek.duckstation&hl=en_US&gl=US", color: "purple" },
            { label: "Guide", href: "https://youtu.be/-CJ9WVFmYXc?t=1932", color: "blue" },
          ]}
        />
        <EmuCard
          system="PS2"
          note="Use NetherSX2 Classic (not on Play Store)."
          buttons={[
            { label: "Download NetherSX2", href: "https://github.com/Trixarian/NetherSX2-classic", color: "purple" },
            { label: "Guide", href: "https://youtu.be/-CJ9WVFmYXc?t=2547", color: "blue" },
          ]}
        />
        <EmuCard
          system="PSP"
          note="Use PPSSPP from the Play Store."
          buttons={[
            { label: "Download PPSSPP", href: "https://play.google.com/store/apps/details?id=org.ppsspp.ppsspp&hl=en_US&gl=US", color: "purple" },
            { label: "Guide", href: "https://youtu.be/-CJ9WVFmYXc?t=1749", color: "blue" },
          ]}
        />
        <EmuCard
          system="PS Vita"
          note="Vita3k is still experimental. Check compatibility list. Not on Play Store."
          buttons={[
            { label: "Download Vita3k", href: "https://github.com/Vita3K/Vita3K-Android/releases/", color: "purple" },
            { label: "Guide", href: "https://www.youtube.com/watch?v=6LPpLBLQ2zA", color: "blue" },
          ]}
        />
      </SectionGroup>

      {/* Nintendo Section */}
      <SectionGroup title="Nintendo">
        <EmuCard
          system="Nintendo 64"
          note="Use M64Plus FZ from the Play Store."
          buttons={[
            { label: "Download M64Plus FZ", href: "https://play.google.com/store/apps/details?id=org.mupen64plusae.v3.fzurita&hl=en_US&gl=US", color: "purple" },
            { label: "Guide", href: "https://youtu.be/-CJ9WVFmYXc?t=1828", color: "blue" },
          ]}
        />
        <EmuCard
          system="NDS"
          note="Use Drastic (APK only) or MelonDS from Play Store."
          buttons={[
            { label: "Download Drastic", href: "https://drastic.uptodown.com/android/descargar", color: "purple" },
            { label: "Download MelonDS", href: "https://play.google.com/store/apps/details?id=me.magnum.melonds&hl=en_US&gl=US", color: "purple" },
            { label: "Guide", href: "https://youtu.be/-CJ9WVFmYXc?t=1477", color: "blue" },
          ]}
        />
        <EmuCard
          system="N3DS"
          note="Try Lime3DS, CitraMMJ or Azahar. All are APKs."
          buttons={[
            { label: "Download Lime3DS", href: "https://github.com/Lime3DS/lime3ds-archive/releases", color: "purple" },
            { label: "Download CitraMMJ", href: "https://github.com/weihuoya/citra/releases", color: "purple" },
            { label: "Download Azahar", href: "https://github.com/azahar-emu/azahar/releases", color: "purple" },
            { label: "Guide", href: "https://youtu.be/-CJ9WVFmYXc?t=1590", color: "blue" },
          ]}
        />
        <EmuCard
          system="GameCube & Wii"
          note="Use Dolphin from official site. Avoid Play Store version."
          buttons={[
            { label: "Download Dolphin", href: "https://dl.dolphin-emu.org/releases/2503/dolphin-2503.apk", color: "purple" },
            { label: "Guide", href: "https://youtu.be/-CJ9WVFmYXc?t=2122", color: "blue" },
          ]}
        />
        <EmuCard
          system="Wii U"
          note="Cemu is still improving, but runs some games well."
          buttons={[
            { label: "Download Cemu", href: "https://github.com/SSimco/Cemu/releases", color: "purple" },
            { label: "Guide", href: "https://youtu.be/lJIbK3OH_-o?si=_mz5qXnq_K1yt0N4", color: "blue" },
          ]}
        />
        <EmuCard
          system="Switch"
          note="Use Citron or search for Yuzu / Sudachi APKs."
          buttons={[
            { label: "Download Citron", href: "https://git.citron-emu.org/Citron/Citron/releases", color: "purple" },
            { label: "Turnip Drivers", href: "https://github.com/K11MCH1/AdrenoToolsDrivers/releases/tag/v24.3.0_r9", color: "purple" },
            { label: "Guide", href: "https://youtu.be/ySjfpo-gEKo?t=1637", color: "blue" },
          ]}
        />
      </SectionGroup>

    {/* Multi-system Core */}
    <SectionGroup title="Multi-System (Core)">
      <EmuCard
        system="RetroArch"
        note="Avoid the Play Store version. Use APK from official site."
        buttons={[
          { label: "Download RetroArch", href: "https://www.retroarch.com/?page=platforms", color: "purple" },
          { label: "Guide", href: "https://www.youtube.com/watch?v=SVYObx6YWl4", color: "blue" },
        ]}
      />
    </SectionGroup>

    {/* Multi-system Frontends */}
    <SectionGroup title="Frontend Launchers">
<EmuCard
  system="Daijisho"
  note="Free and beginner-friendly. Available on Play Store."
  buttons={[
    { label: "Download Daijisho", href: "https://play.google.com/store/apps/details?id=com.magneticchen.daijishou&hl=es", color: "purple" },
    { label: "Guide", href: "https://www.youtube.com/watch?v=NechFOOeVas", color: "blue" },
  ]}
/>
<EmuCard
  system="Beacon Launcher"
  note="Paid app on Play Store (€3.39)."
  buttons={[
    { label: "Download Beacon", href: "https://play.google.com/store/apps/details?id=com.radikal.gamelauncher&hl=es", color: "purple" },
    { label: "Guide", href: "https://www.youtube.com/watch?v=vty-WeN8koc", color: "blue" },
  ]}
/>
<EmuCard
  system="Emulation Station (ES-DE)"
  note="Not on Play Store. Purchase via Patreon (€4.50 one-time or monthly support)."
  buttons={[
    { label: "Visit Patreon", href: "https://www.patreon.com/c/es_de/posts", color: "purple" },
    { label: "Guide", href: "https://www.youtube.com/watch?v=X-bVwlMwobE", color: "blue" },
  ]}
/>
</SectionGroup>
  </div>
);
}

function SectionGroup({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-retroBlue dark:text-[#b48ce0]} mb-4">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {children}
      </div>
    </section>
  );
}

function EmuCard({ system, note, buttons }) {
  return (
    <div className="border-4 border-black bg-retroBlue dark:bg-[#2f2b45]} text-white p-4 shadow-lg retro-button">
      <h3 className="text-lg font-bold mb-1">{system}</h3>
      {note && <p className="text-sm mb-3 text-yellow-200 italic">{note}</p>}
      <div className="flex flex-wrap gap-2 mt-2">
        {buttons.map(({ label, href, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1 text-xs font-bold border-2 border-black rounded transition-all duration-150 hover:scale-105 hover:brightness-125 ${
              color === "blue"
                ? "bg-blue-400 text-black"
                : color === "purple"
                ? "bg-purple-400 text-black"
                : "bg-pink-400 text-black"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
