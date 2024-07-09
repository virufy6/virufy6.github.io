import DiseasesNavbar from 'src/components/organisms/Diseases Navbar/DiseasesNavbar';

const Covid19: React.FC = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/images/diseases/Covid-19.png" // COVID-19 header image path
          alt="COVID-19"
          className="w-full h-64 object-cover"
        />
        <h1 className="absolute bottom-0 left-0 p-4 text-white text-4xl">COVID-19</h1>
      </div>
      <DiseasesNavbar />
      <div className="text-center mt-8">
        <p className="text-2xl">Coming Soon...</p>
      </div>
    </div>
  );
}

export default Covid19;
