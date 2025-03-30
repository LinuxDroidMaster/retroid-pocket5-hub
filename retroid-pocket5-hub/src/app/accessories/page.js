export default function AccessoriesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">
        Retroid Pocket 5 Accessories
      </h1>
      <p className="text-lg text-black dark:text-white text-center mb-8">
        Enhance your Retroid Pocket 5 experience with these recommended accessories.
      </p>

      {/* Protection Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Protection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/Sfb764052ff944f72977bffc71fa28bd1v.jpg"
          title="Protective Hard Case + Glass Option"
          description="Durable case to protect your RP5 during transport. Optionally includes tempered glass."
          link="https://s.click.aliexpress.com/e/_EzQcHjA"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/S362d32b949014a75be34e5c9d77f1c0am.jpg_640x640q90.jpg"
          title="Tempered Glass Protector"
          description="High-quality screen protector to prevent scratches and smudges."
          link="https://s.click.aliexpress.com/e/_EIFcc64"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
      </div>

      {/* Ergonomics Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Ergonomics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <AccessoryCard
          image="https://ae-pic-a1.aliexpress-media.com/kf/S2a13a1ccadd9454aab9a5f668674a143P.jpg_200x200q90.jpg_.webp"
          title="3D Printed Grip"
          description="Custom-made ergonomic grip for enhanced comfort and control."
          link="https://s.click.aliexpress.com/e/_EvgZ3Qu"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
      </div>

      {/* Connectivity Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Connectivity</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <AccessoryCard
          image="https://ae-pic-a1.aliexpress-media.com/kf/Sf807498dc8a5485a8c391af8182956bfJ.png_200x200.png_.webp"
          title="Retroid Dock"
          description="Official dock for HDMI output, USB accessories, and more."
          link="https://s.click.aliexpress.com/e/_EvfvQLq"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
      </div>

      {/* Controllers Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Controllers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AccessoryCard
          image="https://m.media-amazon.com/images/I/51N2btR37cL._AC_UF894,1000_QL80_.jpg"
          title="GameSir Cyclone 2 Pro Controller"
          description="Premium controller with hall sticks, perfect for retro and Android gaming."
          link="https://s.click.aliexpress.com/e/_EJVIJuY"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
        <AccessoryCard
          image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8e5e0d28-ea4a-4b55-bc2c-941f7da9eeaf.__CR0,0,600,450_PT0_SX600_V1___.jpg"
          title="GameSir Nova Lite 2 Controller"
          description="Affordable yet high-quality controller with good build and comfort."
          link="https://s.click.aliexpress.com/e/_ExS11KU"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-8">
        ⚠️ Some of the links on this page are affiliate links. By using them, you help support this project at no extra cost to you. Thank you! 💙
      </p>
    </div>
  );
}

function AccessoryCard({ image, title, description, link, buttonText, buttonColor }) {
  return (
    <div className="border-4 border-black p-4 bg-retroBlue text-white text-center">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 mx-auto mb-4 border-4 border-black"
      />
      <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`retro-button mt-4 inline-block ${buttonColor}`}
      >
        {buttonText}
      </a>
    </div>
  );
}
