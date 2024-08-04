// Assets
import ImageSection2 from '~/assets/static/images/section1/Homepage.jpg';

// Components
import Section2 from '~/components/organisms/section-2/Section2'
import Section3 from '~/components/organisms/section-3/Section3'
import Section10 from '~/components/organisms/section-10/Section10'

export default function Prueba() {
  return (
  <>
      <div className="flex flex-col items-center justify-center -mb-24">
        <div className="relative -top-24 w-full overflow-hidden">
        <Section2
          sizeImg="width-100vw"
          borderImg="none"
          src={ImageSection2}
          altImg="A person holding phone in hand"
          text="Welcome to Virufy"
          text2="Your Digital Health Companion"
          mainText="Empower yourself with the latest in health technology."
          subText="Introducing Virufy, the cutting-edge app that utilizes advanced audio and generative AI algorithms to analyze your breathing patterns and provide insights into potential infection symptoms."
          buttonText="Demo App"
          disclaimer1="*Any device with a web browser and microphone (e.g. iPhone, Android, laptop, iPad)."
          disclaimer2="*The app is still under development, support us by contributing your data into our data collection app."
          mainText2="How It Works"
          subText2="With just a simple intentional cough into your device's microphone, Virufy harnesses the power of artificial intelligence to detect unique sound patterns associated with respiratory diseases, such as COVID-19, TB, flu, RSV, COPD, and asthma."
        />
        <Section3 
        text="Your Health, Our Priority"
        subtext="At Virufy, your well-being is at the heart of everything we do. We prioritize privacy, ensuring that your data remains secure and confidential."
        title1="Instant Analysis"
        sub1="Receive immediate prompt feedback on your cough's characteristics and abnormality profile based on the sound pattern of your cough*"
        title2="At-home Anonymity"
        sub2="Feel secure knowing that your results are only for your eyes."
        title3="User-Friendly Interface"
        sub3="Intuitive design for easy navigation and seamless user experience."
        disclaimer="*The results of the analysis done by the system will not replace the diagnosis by a specialized doctor."
        buttonText="Our Technology"
        />
        <Section10
        title="Algorithms"
        subtitle="AI-based applications are increasingly playing a crucial role in healthcare, especially in the early detection and diagnosis of diseases."
        text="AI capabilities can monitor and analyze user-reported symptoms related to respiratory health. They can offer real-time monitoring of respiratory parameters, such as breathing rate and oxygen saturation levels."
        />
      </div>
    </div>
    </>
  );
}
