export default function CompatibilityPage() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-retroPurple dark:text-retroYellow text-center mb-6">
          Compatibility
        </h1>
        
        <p className="text-lg text-center text-gray-800 dark:text-gray-200 mb-8">
          Below you'll find community-provided compatibility lists for various platforms.
          These sheets allow you to check how well certain games run on different systems.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            title="Portmaster" 
            link="https://docs.google.com/spreadsheets/d/1oCGa4lMDsZD4V7A559urMNcVzCZluptY8lyFmE45w5o/edit?gid=389157348#gid=389157348"
          />
          <Card 
            title="PSP" 
            link="https://docs.google.com/spreadsheets/d/1fYv-rpOha_mvVn6-urlHKZh6sDM61J0YdCViFve0xH0/edit?usp=drivesdk"
          />
          <Card 
            title="Android" 
            link="https://docs.google.com/spreadsheets/d/1ueGHR0QvfHAWA9DTUtenbpy-FbtKBeNwJEPO3bodeno/edit?usp=sharing"
          />
          <Card 
            title="N64" 
            link="https://docs.google.com/spreadsheets/d/19Q8hlohoAv1tmU7egPgluUMTvC9Bn1ypywFfA8kh9n4/edit?gid=0#gid=0"
          />
          <Card 
            title="Flycast" 
            link="https://docs.google.com/spreadsheets/d/1eOp6ma-sbV4EfoVZY_z5ZRjj2b8nRfOk4xFI2a_l5wM/edit?gid=0#gid=0"
          />
        </div>
      </div>
    );
  }
  
  function Card({ title, link }) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block border-4 border-black p-4 bg-retroBlue text-white text-center retro-button"
      >
        <h2 className="text-xl font-bold">{title}</h2>
      </a>
    );
  }
  