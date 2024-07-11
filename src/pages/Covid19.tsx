import Image from 'next/image';
import DiseasesNavbar from 'src/components/organisms/Diseases Navbar/DiseasesNavbar';
import covid19Image from 'src/assets/static/images/diseases/Covid-19.png';
import bodyBackgroundImage from 'src/assets/static/images/diseases/BodyBackground.png';

const Covid19: React.FC = () => {
  return (
    <div className="relative">
      {/* Header/Hero Section */}
      <section className="-mt-24">
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <Image
            className="absolute h-full w-full object-cover opacity-30"
            src={covid19Image}
            alt="COVID-19"
            width={1512}
            height={798}
            priority
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center h-[300px] md:h-[650px]">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl px-8 text-center font-medium text-white md:max-w-4xl">
              <h1 className="md:text-4xl text-2xl font-large leading-loose md:text-3xl md:leading-normal">
                COVID-19
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section with Body Background Image */}
      <section
        style={{
          backgroundImage: `url(${bodyBackgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '2770px', // Set the minimum height to match the image dimensions
        }}
        className="relative min-h-screen"
      >
        {/* Gradient Overlay Container */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#162b4c] to-[#3468b2] opacity-70"></div>
        
        {/* Content Container */}
        <div className="relative z-10">
          <DiseasesNavbar />
          <div className="text-left px-10 text-white mt-8">
            <p className="md:text-2xl text-xl">Information coming soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Covid19;
