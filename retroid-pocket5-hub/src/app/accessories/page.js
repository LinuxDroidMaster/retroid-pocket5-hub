export default function AccessoriesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">
        TrimUI Smart Pro Accessories
      </h1>
      <p className="text-lg text-black dark:text-white text-center mb-8">
        Enhance your TrimUI Smart Pro experience with these recommended accessories.
      </p>

      {/* Grid de Accesorios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tarjeta MicroSD (manteniendo la original) */}
        <AccessoryCard
          image="https://m.media-amazon.com/images/I/51FeeXHe1nL._AC_SL1000_.jpg"
          title="128GB High-Speed microSD Card"
          description="A high-speed microSD card to store all your games and firmwares."
          link="https://amzn.to/41si9fQ"
          buttonText="Buy on Amazon"
          buttonColor="bg-yellow-500 hover:bg-yellow-400"
        />

        {/* Nueva Tarjeta: Tempered Glass */}
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/Sda5f2c2a8cc04bf8a67ade5eb6d409feS.png"
          title="Tempered Glass"
          description="High-quality tempered glass screen protector for your device."
          link="https://s.click.aliexpress.com/e/_EzhRSUM"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />

        {/* Nueva Tarjeta: Protective Hard Case */}
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/Sf9bd96ad13a347d7ab69e6066666bf1dl.jpg_640x640q90.jpg"
          title="Protective Hard Case"
          description="Durable hard case for extra protection."
          link="https://s.click.aliexpress.com/e/_ExpqyTE"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />

        {/* Nueva Tarjeta: Silicone Case */}
        <AccessoryCard
          image="https://m.media-amazon.com/images/I/51wIxt5FahL._AC_UF1000,1000_QL80_.jpg"
          title="Silicone Case"
          description="Flexible, lightweight silicone case."
          link="https://s.click.aliexpress.com/e/_EGjTZ5i"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />

        {/* Nueva Tarjeta: Joystick Caps (Set 1) */}
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/Sed73820297fe4e5c8ff5d21b4a8ae479v.jpg_640x640q90.jpg"
          title="Joystick Caps (Set 1)"
          description="Standard joystick caps for improved grip."
          link="https://s.click.aliexpress.com/e/_Exju03w"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />

        {/* Nueva Tarjeta: Joystick Caps (Set 2) */}
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/Se8ae0bd586464f249582f856326c4927C.jpg"
          title="Joystick Caps (Set 2)"
          description="Themed joystick caps for a unique look."
          link="https://s.click.aliexpress.com/e/_EQMFLXO"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />

        {/* Nueva Tarjeta: 3D Printed Grip */}
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/Sf678d9247e27486d8d1d8ab6d47292fa4.jpg_640x640q90.jpg"
          title="3D Printed Grip"
          description="Custom 3D printed grip for enhanced comfort."
          link="https://s.click.aliexpress.com/e/_EGGCOSg"
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
