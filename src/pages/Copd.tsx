import Image from 'next/image';
import DiseasesNavbar from 'src/components/organisms/Diseases Navbar/DiseasesNavbar';
import CopdImage from 'src/assets/static/images/diseases/COPD.jpeg';
import bodyBackgroundImage from 'src/assets/static/images/diseases/BodyBackground.png';

const Copd: React.FC = () => {
  return (
    <div className="relative -top-24">
      {/* Header/Hero Section */}
      <section>
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <Image
            className="absolute h-full w-full object-cover opacity-30"
            src={CopdImage}
            alt="COPD"
            width={1512}
            height={906}
            priority
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center pt-32 pb-12 md:pt-72 md:pb-48">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl px-8 text-center font-medium text-white md:max-w-4xl">
              <h1 className="text-2xl font-large leading-loose md:text-3xl md:leading-normal">
                COPD
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
          minHeight: '2957px', // Set the minimum height to match the image dimensions
        }}
        className="relative min-h-screen"
      >
        {/* Gradient Overlay Container */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#162b4c] to-[#3468b2] opacity-70"></div>
        
        {/* Content Container */}
        <div className="relative z-10">
          <DiseasesNavbar />
          <div className="text-left px-10 text-white mt-8">
            <p className="text-4xl">Coming Soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Copd;
