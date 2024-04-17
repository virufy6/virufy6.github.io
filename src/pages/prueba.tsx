/* import Title from "../components/atoms/Title/Title"
import Text from "../components/atoms/Text/Text"
import Select from "../components/atoms/Select/Select"
import LinkAtom from "../components/atoms/LinkAtom/LinkAtom" */

//Moleculas
/* import TitleText from "~/components/molecules/TitleText/TitleText"
import TitleTextImg from "~/components/molecules/TitleTextImg/TitleTextImg" */
//import ButtonGroup from "~/components/molecules/ButtonGroup/ButtonGroup"

//Organismo
/* import Section1 from "~/components/organisms/section-1/Section1" */
/* import Section3 from "~/components/organisms/section-3/Section3" */
/* import Section5 from "~/components/organisms/section-5/Section5" */
/* import Section6 from "~/components/organisms/section-6/Section6" */


export default function Prueba() {

  /* const options = [
    { label: 'List 1', value: '1' },
    { label: 'List 2', value: '2' },
    { label: 'List 3', value: '3' },
  ]; */

/*   const links = [
    { label: 'Home', route: '/es/prueba' }, 
    { label: 'MyApp', route: '/es/prueba'}, 
    { label: 'Posts', route: '/es/prueba'}, 
    { label: 'Graph QL', route: '/es/prueba'}
  ] */

  return (
    <>
     {/*  <h1 className="text-sky-600 text-3xl m-4">Organismo</h1>
      <p>Section - 1</p>
{/*       <Section1 /> */}

      <p className="mt-7">Section - 3</p>
     {/*  <Section3 /> */}

      <p className="mt-7">Section - 5</p>
{/*       <Section5 /> */}

      <p className="mt-7">Section - 6</p>
     {/*  <Section6 />  */}

      <h1 className="text-sky-600 text-3xl m-4 mt-20">Átomos</h1>
      {/* <Title Text="Prueba título átomo" H="h2" />
      <Text Text="Prueba texto átomo" Style="subtitulo" />
      <Select Text="Prueba select átomo" Options={options} /> */}
      {/* <LinkAtom Routes={links} Style="link" /> */}

      <h1 className="text-sky-600 text-3xl m-4 ">Moleculas</h1>
      {/* <TitleText
        TitleSize="h2"
        TitleLabel="Título en molecula"
        TextSize="normal"
        TextLabel="Texto en molecula"
      /> */}
      {/* <TitleTextImg
        Order={["Title", "Text", "Image"]}
        TitleSize="h2"
        TitleLabel="Título en molecula"
        TextSize="normal"
        TextLabel="Texto en molecula"
        ImgRoute={"https://s3-alpha-sig.figma.com/img/c9cc/c34d/0d3e35cb9938eb05c69b1c012b1fa9c0?Expires=1680480000&Signature=OwrhrDVgqImxdUPNb~1Ap8FjrzG~Ehc45zjUJl2dGh5ZXu31D~Ld0DYani-aNAiAnBUcAHbcCOBS-WNEJ3NPMTfUjYJkfEwbU5uId2ypkKP3oZUCAz4H6D4V-avFU7Be8oYwiZyRrLtIo5pOQOPeyRQMSLHGerZ-58DqLXIlBdmWnKH6sXfo~watvCTVX5ZHKJ~7zRnQDhllNewH4FfMoPQI2abg84agsJ3axG1-yY~pmaCHDXPQZFNVnBmuG3KL5dOhgNfzsBvlSUWd7HgPB~FimLE~YtKQouNZA2FEkaH5NEXZICU87tGGV1EGAvWAnn-lf~vo0Xzja0fKzvVzIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
        ImgBorder="radious"
        ImgAlt={"Cualquier cosa"}
        ImgSize="auto"
      /> */}
      {/* <ButtonGroup 
        buttons={["One", "Two"]} 
        label={["One", "Two"]} 
        type="primary" 
        size="small" 
        path="/" 
      /> */}

    </>
  );
}