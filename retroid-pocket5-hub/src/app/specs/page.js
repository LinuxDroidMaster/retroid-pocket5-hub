export default function SpecsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple dark:text-retroYellow text-center mb-6">
        Specs & Features
      </h1>

      {/* Imagen de la consola y botón de compra */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/images/retroid-pocket-5.png"
          alt="Retroid Pocket 5 Handheld"
          className="w-100 border-0 border-black mb-4"
        />
        <a
          href="https://s.click.aliexpress.com/e/_Evas2La"
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
          🖥️ <strong>5.5-inch AMOLED Screen</strong>: Sharp 1920×1080 display with vibrant colors and 400 PPI.
        </li>
        <li>
          🔋 <strong>5000mAh Battery</strong>: Long-lasting power for extended play sessions.
        </li>
        <li>
          🧠 <strong>Snapdragon 865 Chipset</strong>: High-end performance with 8-core CPU and Adreno 650 GPU.
        </li>
        <li>
          🕹️ <strong>8GB LPDDR4X RAM</strong>: Smooth multitasking and emulation.
        </li>
        <li>
          💾 <strong>128GB UFS 3.1 Storage</strong>: Fast internal storage.
        </li>
        <li>
          📱 <strong>Android 13 or Rocknix Linux</strong>: Flexible OS support.
        </li>
      </ul>

      {/* Specifications */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Specs
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li><strong>Display:</strong> 5.5-inch AMOLED, 1920×1080, 400 PPI</li>
        <li><strong>Aspect Ratio:</strong> 16:9</li>
        <li><strong>CPU:</strong> Qualcomm Snapdragon 865 (Cortex-A77, 8 cores, 1.8–2.84GHz)</li>
        <li><strong>GPU:</strong> Adreno 650, 587MHz</li>
        <li><strong>RAM:</strong> 8GB LPDDR4X</li>
        <li><strong>Storage:</strong> 128GB UFS 3.1</li>
        <li><strong>Battery:</strong> 5000mAh</li>
        <li><strong>OS:</strong> Android 13 or Linux (Rocknix)</li>
        <li><strong>Material:</strong> Plastic</li>
        <li><strong>Weight:</strong> 280g</li>
        <li><strong>Speaker Placement:</strong> Front-facing</li>
        <li><strong>Charge Port:</strong> Bottom (USB-C)</li>
      </ul>

      {/* Product Dimensions */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        Product Dimensions
      </h2>
      <p className="text-black dark:text-white mb-6">
        <strong>Size:</strong> 199.2 x 78.5 x 15.6 mm
      </p>

      {/* What's in the Box */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-2">
        What's in the Box?
      </h2>
      <ul className="list-disc list-inside text-black dark:text-white mb-6 space-y-2">
        <li><strong>Retroid Pocket 5 Console</strong></li>
        <li><strong>USB Type-C Charging Cable</strong></li>
        <li><strong>User Manual</strong></li>
      </ul>
    </div>
  );
}
