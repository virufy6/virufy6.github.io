import DiseasesNavbar from 'src/components/organisms/Diseases Navbar/DiseasesNavbar';

const RSV: React.FC = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/images/diseases/RSV.jpeg" // RSV header image path
          alt="RSV"
          className="w-full h-64 object-cover"
        />
        <h1 className="absolute bottom-0 left-0 p-4 text-white text-4xl">RSV</h1>
      </div>
      <DiseasesNavbar />
      <div className="text-center mt-8">
        <p className="text-2xl">Coming Soon...</p>
      </div>
    </div>
  );
}

export default RSV;
