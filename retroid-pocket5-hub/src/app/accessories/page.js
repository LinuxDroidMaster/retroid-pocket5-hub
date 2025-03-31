export default function AccessoriesPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-retroPurple text-center mb-6">
        Retroid Pocket 5 Accessories
      </h1>
      <p className="text-lg text-black dark:text-white text-center mb-8">
        Enhance your Retroid Pocket 5 experience with these recommended accessories.
      </p>

      {/* Protection Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Protection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/Sfb764052ff944f72977bffc71fa28bd1v.jpg"
          title="Protective Hard Case + Glass Option"
          description="Durable case to protect your RP5 during transport. Optionally includes tempered glass."
          link="https://s.click.aliexpress.com/e/_EzQcHjA"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
        <AccessoryCard
          image="https://www.goretroid.com/cdn/shop/files/rp5_6c7540a3-d4b8-4759-8bfe-a139d1baa914_1024x1024@2x.jpg?v=1725624743"
          title="Protective Hard Case (Official)"
          description="Official hard case from Retroid. Durable and well-designed for travel."
          link="https://www.goretroid.com/collections/accessories/products/rp5-carrying-case"
          buttonText="Buy on Retroid"
          buttonColor="bg-gray-300 hover:bg-gray-200 text-black"
        />
        <AccessoryCard
          image="https://ae01.alicdn.com/kf/S362d32b949014a75be34e5c9d77f1c0am.jpg_640x640q90.jpg"
          title="Tempered Glass Protector"
          description="High-quality screen protector to prevent scratches and smudges."
          link="https://s.click.aliexpress.com/e/_EIFcc64"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
        <AccessoryCard
          image="https://i.etsystatic.com/39242573/r/il/973188/6617637732/il_794xN.6617637732_6klc.jpg"
          title="Rugged Protective Case (Etsy)"
          description="Stylish and snug-fit hard case for the RP5 from Etsy."
          link="https://www.etsy.com/listing/1864798665/retroid-pocket-5-snug-rugged-protective?etsrc=sdt"
          buttonText="Buy on Etsy"
          buttonColor="bg-[#F56400] hover:bg-orange-400"
        />
      </div>

      {/* Ergonomics Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Ergonomics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <AccessoryCard
          image="https://i.etsystatic.com/42297546/r/il/a9715d/6518915856/il_794xN.6518915856_t9cu.jpg"
          title="3D Printed Grip"
          description="Custom-made ergonomic grip for enhanced comfort and control."
          link="https://www.etsy.com/shop/NLDdesignshop?ref=reviews_header_shopname&listing_id=1847257041#items"
          buttonText="Buy on Etsy"
          buttonColor="bg-[#F56400] hover:bg-orange-400"
        />
      </div>

      {/* Connectivity Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Connectivity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <AccessoryCard
          image="https://ae-pic-a1.aliexpress-media.com/kf/Sf807498dc8a5485a8c391af8182956bfJ.png_200x200.png_.webp"
          title="Retroid Dock"
          description="Official dock for HDMI output, USB accessories, and more."
          link="https://s.click.aliexpress.com/e/_EvfvQLq"
          buttonText="Buy on AliExpress"
          buttonColor="bg-red-600 hover:bg-red-500"
        />
        <AccessoryCard
          image="https://www.goretroid.com/cdn/shop/files/MC-C1241A71_1024x1024@2x.jpg?v=1721993372"
          title="Retroid Dock (Official)"
          description="Buy directly from the official Retroid store."
          link="https://www.goretroid.com/collections/retro-game-system/products/retroid-official-dock"
          buttonText="Buy on Retroid"
          buttonColor="bg-gray-300 hover:bg-gray-200 text-black"
        />
      </div>

      {/* Controllers Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Controllers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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

      {/* Official Accessories Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Official Accessories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <AccessoryCard
          image="https://www.goretroid.com/cdn/shop/files/RP5_b9e0db3e-02b2-42be-83c3-f242e85c5cf8_540x.jpg?v=1725626025"
          title="RP5 Protector Shell"
          description="Extra shell protection for your device, directly from Retroid."
          link="https://www.goretroid.com/collections/retro-game-system/products/rp5-protective-shell"
          buttonText="Buy on Retroid"
          buttonColor="bg-gray-300 hover:bg-gray-200 text-black"
        />
        <AccessoryCard
          image="https://www.goretroid.com/cdn/shop/files/2_b4be3908-e4b9-422b-8679-abb00cd44db5_1024x1024@2x.jpg?v=1734070408"
          title="Console Skin"
          description="Customize your RP5 with this official console skin."
          link="https://www.goretroid.com/collections/accessories/products/retroid-pocket-5-console-skin"
          buttonText="Buy on Retroid"
          buttonColor="bg-gray-300 hover:bg-gray-200 text-black"
        />
      </div>

      {/* Spare Parts Section */}
      <h2 className="text-2xl font-bold text-retroBlue dark:text-retroPurple mb-4">Spare Parts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <AccessoryCard
          image="https://www.goretroid.com/cdn/shop/files/Ice-Green_5342fb4a-490e-424c-b063-541785f09ad4_1024x1024@2x.jpg?v=1725886834"
          title="Clear Backplate"
          description="Transparent backplate for a unique look and extra flair."
          link="https://www.goretroid.com/collections/diy/products/retroid-pocket-5-clear-backplate"
          buttonText="Buy on Retroid"
          buttonColor="bg-gray-300 hover:bg-gray-200 text-black"
        />
        <AccessoryCard
          image="https://www.goretroid.com/cdn/shop/files/rp5ABXY_1024x1024@2x.jpg?v=1725883029"
          title="ABXY Buttons"
          description="Customize or replace your ABXY button set."
          link="https://www.goretroid.com/collections/diy/products/retroid-pocket-5-abxy-buttons"
          buttonText="Buy on Retroid"
          buttonColor="bg-gray-300 hover:bg-gray-200 text-black"
        />
        <AccessoryCard
          image="https://www.goretroid.com/cdn/shop/files/16bit_521e30d6-7b7f-45cf-8ae9-fbc6aaa4d9a2_1024x1024@2x.jpg?v=1725883929"
          title="D-Pad"
          description="Replace your D-pad with a custom or spare piece."
          link="https://www.goretroid.com/collections/diy/products/retroid-pocket-5-dpad"
          buttonText="Buy on Retroid"
          buttonColor="bg-gray-300 hover:bg-gray-200 text-black"
        />
        <AccessoryCard
          image="https://www.goretroid.com/cdn/shop/files/GC_02956fde-8ada-4e43-b96a-1503ad73c6c7_1024x1024@2x.jpg?v=1725884653"
          title="Full Set Buttons"
          description="Complete replacement set for buttons and controls."
          link="https://www.goretroid.com/collections/diy/products/retroid-pocket-5-full-set-buttons"
          buttonText="Buy on Retroid"
          buttonColor="bg-gray-300 hover:bg-gray-200 text-black"
        />
        <AccessoryCard
          image="https://www.goretroid.com/cdn/shop/files/1_2_1024x1024@2x.jpg?v=1725881477"
          title="Hall Joystick (RP4/5/Mini)"
          description="Replace your joystick with a high-quality hall version."
          link="https://www.goretroid.com/collections/diy/products/retroid-pocket-4-4pro-hall-joystick"
          buttonText="Buy on Retroid"
          buttonColor="bg-gray-300 hover:bg-gray-200 text-black"
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
        className="w-24 h-24 mx-auto mb-4 border-4 border-black object-contain"
      />
      <h3 className="text-base font-bold text-black dark:text-white mb-1">{title}</h3>
      <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`retro-button mt-2 inline-block text-xs ${buttonColor}`}
      >
        {buttonText}
      </a>
    </div>
  );
}
