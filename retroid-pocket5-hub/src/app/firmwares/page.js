export default function FirmwaresPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple mb-6 text-center">
        Custom Firmwares for TrimUI Smart Pro
      </h1>

      {/* Section 1: Official Stock Firmware & Modified Versions */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">
        📦 Official Stock Firmware & Modified Versions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FirmwareCard 
          title="Stock Firmware" 
          description="The official firmware for TrimUI Smart Pro." 
          link="https://github.com/trimui/firmware_smartpro" 
        />
        <FirmwareCard 
          title="Base SD Package" 
          description="Essential assets for TrimUI Smart Pro." 
          link="https://github.com/trimui/assets_smartpro" 
        />
        <FirmwareCard 
          title="CrossMix‑OS" 
          description="A custom firmware based on the stock, offering extra features." 
          link="https://github.com/cizia64/CrossMix-OS" 
        />
      </div>

      {/* Section 2: Major Community Projects */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">
        🌟 Major Community Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FirmwareCard 
          title="MinUI" 
          description="A lightweight and optimized firmware for TrimUI Smart Pro." 
          link="https://github.com/shauninman/MinUI/releases" 
        />
        <FirmwareCard 
          title="MinUI Next" 
          description="An improved version of MinUI with smoother performance." 
          link="https://github.com/ro8inmorgan/MinUI/releases" 
        />
        <FirmwareCard 
          title="Gamma OS Core" 
          description="Beta release of Gamma OS Core firmware." 
          link="https://github.com/TheGammaSqueeze/GammaOSCore/releases/tag/beta3_a133p" 
          badge={["Beta", "Android"]}
        />
        <FirmwareCard 
          title="Tomato OS" 
          description="Deprecated firmware for TrimUI Smart Pro." 
          link="https://drive.google.com/file/d/1BYvBy2MJhWPB2cQN8Siwt6n8S-HZUz5s/view" 
          badge="Deprecated"
        />
        <FirmwareCard 
          title="Knulli Firmware" 
          description="Community firmware based on Batocera." 
          link="https://github.com/knulli-cfw/distribution/releases" 
        />
      </div>

      {/* Section 3: Tools & Utilities */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">🛠️ Tools & Utilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ToolCard
          title="TRIMUI_EX"
          description="Community project to install PortMaster on MinUI."
          link="https://github.com/kloptops/TRIMUI_EX"
          firmwares={["MinUI"]}
        />
        <ToolCard
          title="Trimui‑X"
          description="Apps/Scripts that add functionalities to TrimUI Smart Pro. Requires TRIMUI_EX or Tomato OS."
          link="https://github.com/veckia9x/Trimui-X"
          firmwares={["MinUI", "Tomato OS"]}
        />
        <ToolCard
          title="TrimUI Smart Pro Tools"
          description="Utilities designed for the Stock OS."
          link="https://github.com/djware/TrimUITools"
          firmwares={["Stock OS"]}
        />
        <ToolCard
          title="Apps & Scripts Collection"
          description="A collection of apps, tools and scripts for Stock OS."
          link="https://github.com/schmurtzm/TrimUI-Smart-Pro/tree/main"
          firmwares={["Stock OS"]}
        />
        <ToolCard
          title="Custom Paks"
          description="Optional custom PAKs for MinUI."
          link="https://github.com/ryanmsartor/TrimUI-Brick-and-Smart-Pro-Custom-MinUI-Paks/releases"
          firmwares={["MinUI"]}
        />
      </div>

      {/* Section 4: Wikis */}
      <h2 className="text-2xl font-bold text-retroBlue mb-4">📚 Wikis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <WikiCard
          title="CrossMix‑OS Wiki"
          link="https://github.com/cizia64/CrossMix-OS/wiki"
        />
        <WikiCard
          title="General TSP Wiki"
          link="https://github.com/Hoo-Cognito/Other-Handheld-Repos/wiki/Trimui-Smart-Pro"
        />
      </div>
    </div>
  );
}

// Reusable Firmware Card Component with Optional Badge(s)
function FirmwareCard({ title, description, link, badge }) {
  return (
    <div className="border-4 border-black p-4 bg-retroBlue text-white text-center">
      <h3 className="text-lg font-bold">{title}</h3>
      {badge && (
        <div className="mt-2 mb-2 flex justify-center gap-2">
          {Array.isArray(badge)
            ? badge.map((b, i) => (
                <span
                  key={i}
                  className={`text-xs font-bold px-2 py-1 border-2 border-black inline-block ${
                    b === "Deprecated"
                      ? "bg-red-500 text-white"
                      : b === "Android"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-400 text-black"
                  }`}
                >
                  {b}
                </span>
              ))
            : (
              <span
                className={`text-xs font-bold px-2 py-1 border-2 border-black inline-block ${
                  badge === "Deprecated"
                    ? "bg-red-500 text-white"
                    : badge === "Android"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                {badge}
              </span>
            )
          }
        </div>
      )}
      <p className="text-sm">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="retro-button mt-2 inline-block"
      >
        Learn More
      </a>
    </div>
  );
}

// Reusable Tool Card Component
function ToolCard({ title, description, link, firmwares, badge }) {
  return (
    <div className="border-4 border-black p-4 bg-retroBlue text-white text-center">
      <h3 className="text-lg font-bold">{title}</h3>
      
      {badge && (
        <div className="mt-2 mb-2">
          <span className="bg-yellow-400 dark:bg-yellow-300 text-black text-xs font-bold px-2 py-1 border-2 border-black inline-block">
            {badge}
          </span>
        </div>
      )}
      
      <p className="text-sm">{description}</p>
      
      {/* Compatible firmwares */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {firmwares.map((fw) => (
          <span 
            key={fw} 
            className="bg-gray-800 dark:bg-gray-300 text-white dark:text-black text-xs px-2 py-1 rounded"
          >
            {fw}
          </span>
        ))}
      </div>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="retro-button mt-2 inline-block"
      >
        Learn More
      </a>
    </div>
  );
}

// Reusable Wiki Card Component
function WikiCard({ title, link }) {
  return (
    <div className="border-4 border-black p-4 bg-retroBlue text-white text-center">
      <h3 className="text-lg font-bold">{title}</h3>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="retro-button mt-2 inline-block"
      >
        Visit Wiki
      </a>
    </div>
  );
}
