export default function SpecsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple dark:text-retroYellow text-center mb-6">
        Specs & Features
      </h1>

      {/* Imagen de la consola y botón de compra */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/images/trimui_smart_pro.webp"
          alt="TrimUI Smart Pro Handheld"
          className="w-100 border-0 border-black mb-4"
        />
        <a
          href="https://s.click.aliexpress.com/e/_EvVOPmC"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-button bg-red-600 text-white font-bold py-2 px-4 border-4 border-black shadow-lg w-52 text-center text-sm"
        >
          Buy on AliExpress
        </a>
      </div>

      {/* Main Features */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Main Features
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li>
          🎮 <strong>4.96-inch IPS Screen</strong>: Vivid display with 720×1280 resolution for an immersive gaming experience.
        </li>
        <li>
          🔋 <strong>5000mAh Battery</strong>: Provides up to 5 hours of continuous gameplay.
        </li>
        <li>
          💡 <strong>Ambient Lighting</strong>: Includes a charging status light, RGB indicators, and dual analog stick ambient lights.
        </li>
        <li>
          🔌 <strong>Dual USB Type-C Ports</strong>: One for charging & OTG functionality and one for USB host, compatible with game controllers.
        </li>
      </ul>

      {/* Specifications */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Specs
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li><strong>Display:</strong> 4.96-inch IPS Screen (720×1280)</li>
        <li><strong>System:</strong> Linux</li>
        <li><strong>Material:</strong> Glass + ABS + Electronic Components</li>
        <li><strong>Colors:</strong> Black / White / Vintage Gray</li>
        <li><strong>CPU:</strong> Allwinner A133P (A133 Plus) 1.8GHz</li>
        <li><strong>GPU:</strong> Imagination PowerVR GE8300 660MHz</li>
        <li><strong>RAM:</strong> 1GB LPDDR4x</li>
        <li><strong>Storage:</strong> 8GB eMMC</li>
        <li><strong>WiFi:</strong> WLAN 802.11 b/g/n</li>
        <li>
          <strong>Audio:</strong> Stereo Speakers (2×1W), 3.5mm Headphone Jack, Mono Microphone
        </li>
        <li><strong>Battery:</strong> 5000mAh (Up to 5 Hours of Gameplay)</li>
        <li>
          <strong>Expandable Storage:</strong> Supports 64GB, 128GB, 256GB External TF Cards (Optional)
        </li>
        <li>
          <strong>Charging & USB:</strong> USB Type-C Charging (even when powered off, 5V/1.5A), limited to 500mA for data transfer
        </li>
        <li>
          <strong>Indicators/Ambient Lights:</strong> Charging status light, RGB status indicators, RGB dual analog stick ambient lights
        </li>
        <li>
          <strong>Bottom Ports:</strong> Type-C for USB Charging Port + OTG Functionality
        </li>
        <li>
          <strong>Top Ports:</strong> Type-C for USB Host (compatible with game controllers)
        </li>
        <li>
          <strong>Other Features:</strong> Built-in WiFi for online multiplayer, single vibration motor
        </li>
      </ul>

      {/* Product Dimensions */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Product Dimensions
      </h2>
      <p className="text-black dark:text-white mb-6">
        <strong>Size:</strong> 18 x 8 x 1.7 cm
      </p>

      {/* What's in the Box */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        What's in the Box?
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li><strong>TrimUI Smart Pro Game Console</strong></li>
        <li><strong>USB Type-C Charging Cable</strong></li>
        <li><strong>User Manual</strong></li>
      </ul>
    </div>
  );
}
