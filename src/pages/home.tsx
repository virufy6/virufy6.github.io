//Assets
import ImageSection1 from "~/assets/static/images/section1/1.jpg"

//Organismo
import Navbar from "~/components/molecules/Navbar/Navbar"
import Section1 from "~/components/organisms/section-1/Section1"
import Section2 from "~/components/organisms/section-2/Section2"
import Section3 from "~/components/organisms/section-3/Section3"
import Section4 from "~/components/organisms/section-4/Section4"
import Section5 from "~/components/organisms/section-5/Section5"
import Section6 from "~/components/organisms/section-6/Section6"
import Section7 from "~/components/organisms/section-7/Section7"

export default function Prueba() {

  const buttons = ["share your cough", "learn more"]
  const label = ["share your cough", "learn more"]

  return (
    <>
      <Navbar/>

      <h1 className="text-sky-600 text-3xl m-4">HOME</h1>
      
      <p className="text-gray-300">Section - 1</p>
      <Section1
        //TitleText
        TitleSize="h1"
        TitleLabel="An online Covid-19 test is possible"
        TextSize="normal"
        TextLabel={"Virufy is a nonprofit research organization developing artificial intelligence (AI) technology to rapidly screen for COVID-19 from cough patterns, through use of a smartphone at no cost."}
        ContainerTextProps="items-start h-[100%] mr-2"
        //Image
        sizeImg="pr90"
        border="radious" 
        route={ImageSection1} 
        alt="imagen de algo"
        //Buttons
        buttons={buttons}
        label={label}
        type="primary"
        sizeBtn="medium"
        path="/"
      />

      <p className="text-gray-300">Section - 2</p>
      <Section2 />

      <p className="text-gray-300">Section - 3</p>
      <Section3 />

      <p className="text-gray-300">Section - 4</p>
      <Section4 />

      <p className="text-gray-300">Section - 5</p>
      <Section5 />

      <p className="text-gray-300">Section - 6</p>
      <Section6 /> 

      <p className="text-gray-300">Section - 7</p>
      <Section7 /> 
    </>
  );
}