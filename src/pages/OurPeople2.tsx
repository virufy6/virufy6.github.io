import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";
import Video from "~/components/atoms/videoAtom/Video";

import { useI18n } from "~/i18n";

//Images
import ImageinsText from "~/assets/static/images/textInImage/OurPeople.jpg"
import Amil1 from "~/assets/static/images/amilsStory/amil1.jpg"
import Amil2 from "~/assets/static/images/amilsStory/amil2.jpg"
import Amil3 from "~/assets/static/images/amilsStory/amil3.jpg"
import Amil4 from "~/assets/static/images/amilsStory/amil4.jpg"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";

export default function OurPeople2() {

  const {
    OurPeople2: { titleImage, sectionAmil },
  } = useI18n();
  return (
    <>
    <div className="flex flex-col justify-center items-center 
      bg-gradient-to-b from-[#000] to-[#2D5987]
      hidden sm:hidden md:hidden xl:block overflow-hidden
    ">
      <div className="flex flex-col justify-center items-center mx-auto my-[3.5vw] max-w-[1650px] h-[100%]">
        <div className="m-10 mt-[40px]">
          <Video
            width={`1200px`}
            height={`675px`}
            url="https://www.youtube.com/watch?v=od0GGkbC_gQ"
          />
        </div>
        <div className="mt-[80px] mb-[80px] flex flex-wrap flex-row items-start
          sm:flex-col sm:items-center
          md:flex-row md:items-end
          lg:flex-row lg:items-end
          xl:flex-row xl:items-end
        ">
          <div className="ml-[10vw] w-[438px]
            sm:w-[438px]
            md:w-[350px]
            lg:w-[300px]
            xl:w-[365px]
          ">
            <div
              className="text-white m-10"
            >
              <Title
                H="h5"
                Text={sectionAmil.titleAmil}
                TitleClassProps={"mt-[80px]"}
              />
            </div>
            <ImageAtomLocal
              imagesize={"px300x400"}
              alt="Amil"
              src={Amil1}
              border={""}
              ImageStyleProps={""}
            />
          </div>
          <div className="flex-col flex-1 text-xl m-2 mr-[10vw] text-white
          ">
            <Text
              Style=""
              Text={sectionAmil.textAmil[0]}
              TextClassProps=""
            />
            <Text
              Style=""
              Text={sectionAmil.textAmil[1]}
              TextClassProps="mt-4"
            />
            <Text
              Style=""
              Text={sectionAmil.textAmil[2]}
              TextClassProps="mt-4"
            />
          </div>
        </div>
        <div className="ml-[10vw] mt-[20px] mb-[20px] flex flex-wrap flex-row items-start
          sm:flex-col sm:items-center
          md:flex-row md:items-end
          lg:flex-row lg:items-end
          xl:flex-row xl:items-end
        ">
          <div
            className="ml-2"
          >
            <ImageAtomLocal
              imagesize={"px550x360"}
              alt="Amil"
              src={Amil2}
              border={""}
              ImageStyleProps={""}
            />
          </div>
          <div className="flex-col flex-1
            mr-[4vw] text-xl text-white
          ">
            <div className="m-12 mr-[6vw]">
              <Text
                Style=""
                Text={sectionAmil.textAmil[3]}
                TextClassProps=""
              />
            </div>
          </div>
        </div>
        <div className="mr-[10vw] mt-[20px] mb-[20px] flex flex-wrap flex-row items-start
          sm:flex-col sm:items-center
          md:flex-row md:items-end
          lg:flex-row lg:items-end
          xl:flex-row xl:items-end
        ">
          <div className="flex-col flex-1
            ml-4 text-xl text-white
          ">
            <div className="ml-[10vw] m-10">
              <Text
                Style=""
                Text={sectionAmil.textAmil[4]}
                TextClassProps=""
              />
            </div>
          </div>
          <ImageAtomLocal
            imagesize={"px550x360"}
            alt="Amil"
            src={Amil3}
            border={""}
            ImageStyleProps={""}
          />
        </div>
        <div className="ml-[10vw] mt-[10px] mb-[100px] flex flex-wrap flex-row items-start
          sm:flex-col sm:items-center
          md:flex-row md:items-end
          lg:flex-row lg:items-end
          xl:flex-row xl:items-end
        ">
          <div className="flex sm:flex ml-2 mr-[4vw] text-white">
            <ImageAtomLocal
              imagesize={"px550"}
              alt="Amil"
              src={Amil4}
              border={""}
              ImageStyleProps={""}
            />
            <div className="flex-col flex-1
            ml-4 mr-[4.5vw] text-xl text-white
            ">
              <div className="m-4">
                <Text
                  Style=""
                  Text={sectionAmil.textAmil[5]}
                  TextClassProps=""
                />
                <Text
                  Style=""
                  Text={sectionAmil.textAmil[6]}
                  TextClassProps=""
                />
              </div>
            </div>
          </div>
        </div>
        <section className="rounded-[20px]
          bg-[#215995] shadow-lg m-20 mb-[200px]"
        >
          <div className="m-20 text-white">
            <Title
              H={"h5"}
              Text={sectionAmil.titlePublications}
              TitleClassProps="text-justify mb-[60px]"
            />
            {sectionAmil.listPublications.map((publication, idx) => {
              return (
                <Text
                  Style="normalCardHome"
                  Text={publication}
                  TextClassProps="mt-[20px]"
                  key={idx}
                />
              )
            })}
          </div>
        </section>
      </div>
    </div>

    {/* Desktop */}
    <div className="grid justify-center items-center 
      bg-gradient-to-b from-[#000] to-[#2D5987]
      hidden
      sm:hidden
      md:hidden
      lg:block
      xl:hidden
    ">
      {/* First row */}
      <div className="flex justify-center items-center">
        <div className="mt-[80px] mb-[20px]">
          <Video
            width={`800px`}
            height={`450px`}
            url="https://www.youtube.com/watch?v=od0GGkbC_gQ"
          />
        </div>
      </div>

      {/* Second row */}
      <div className="mt-[80px] mb-[80px] ml-[2vw] mr-[2vw] flex flex-row items-start">
        <div className="justify-center items-center ml-[5vw]">
          <div className="justify-center m-8 text-white"
          >
            <Title
              H="h2"
              Text={sectionAmil.titleAmil}
              TitleClassProps=""
            />
          </div>
          <div className="ml-[4vw]">
            <ImageAtomLocal
              imagesize={"px200x275"}
              alt="Amil"
              src={Amil1}
              border={""}
              ImageStyleProps={""}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 text-sm mt-[10vw] mr-[12vw] text-white
        ">
          <Text
            Style=""
            Text={sectionAmil.textAmil[0]}
            TextClassProps=""
          />
          <Text
            Style=""
            Text={sectionAmil.textAmil[1]}
            TextClassProps="mt-2"
          />
          <Text
            Style=""
            Text={sectionAmil.textAmil[2]}
            TextClassProps="mt-2"
          />
        </div>
      </div>

      {/* Third row */}
      <div className="mt-[60px] mb-[10px] ml-[2vw] mr-[2vw] 
        flex flex-row items-start"
      >
        <div className="ml-[8.5vw]">
          <ImageAtomLocal
            imagesize={"px375x225"}
            alt="Amil with nursing staff supporting Virufy’s clinical studies in Colombia, South America"
            src={Amil2}
            border={""}
            ImageStyleProps={""}
          />
        </div>
        <div className="flex-col flex-1 ml-4 mr-[3vw]">
          <div className="text-sm text-white m-1.5 mr-[10vw]">
            <Text
              Style=""
              Text={sectionAmil.textAmil[3]}
              TextClassProps=""
            />
          </div>
        </div>
      </div>

      {/* Fourth row */}
      <div className="mt-[10px] mb-[10px] mr-[14vw]
        flex flex-row items-start"
      >
        <div className="flex-col flex-1
          ml-4 text-sm text-white
        ">
          <div className="ml-[9vw] m-2">
            <Text
              Style=""
              Text={sectionAmil.textAmil[4]}
              TextClassProps=""
            />
          </div>
        </div>
        <ImageAtomLocal
            imagesize={"px375x225"}
            alt="Amil with Japanese students and staff in his ZenIT programming school"
            src={Amil3}
            border={""}
            ImageStyleProps={""}
          />
      </div>

      {/* Fifth row */}
      <div className="mt-[10px] mb-[10px] ml-[2vw] mr-[2vw] 
        flex flex-row items-start"
      >
        <div className="ml-[8.5vw]">
          <ImageAtomLocal
            imagesize={"px375x300"}
            alt="Amil’s encounter with former Prime Minister and current NATO president Mark Rutte"
            src={Amil4}
            border={""}
            ImageStyleProps={""}
          />
        </div>
        <div className="flex-col flex-1
          ml-4 mr-[10vw] text-sm text-white
        ">
          <div className="m-1.5">
            <Text
              Style=""
              Text={sectionAmil.textAmil[5]}
              TextClassProps=""
            />
            <Text
              Style=""
              Text={sectionAmil.textAmil[6]}
              TextClassProps=""
            />
          </div>
        </div>
      </div>
      {/* Publications */}
      <div className="flex flex-col justify-center">
        <section className="rounded-[20px]
          bg-[#215995] shadow-lg m-20 mb-[100px]"
        >
          <div className="flex flex-col m-10 text-white">
            <Title
              H={"h5"}
              Text={sectionAmil.titlePublications}
              TitleClassProps="text-justify mb-[20px]"
            />
            {sectionAmil.listPublications.map((publication, idx) => {
              return (
                <Text
                  Style="normalCardHome"
                  Text={publication}
                  TextClassProps="mt-[20px]"
                  key={idx}
                />
              )
            })}
          </div>
        </section>
      </div>

    </div>




    {/* Tablet */}
    <div className="grid justify-center items-center 
      bg-gradient-to-b from-[#000] to-[#2D5987]
      hidden
      sm:hidden
      md:block
      lg:hidden
      xl:hidden
    ">
      {/* First row */}
      <div className="flex justify-center items-center">
        <div className="mt-[80px] mb-[20px]">
          <Video
            width={`650px`}
            height={`350px`}
            url="https://www.youtube.com/watch?v=od0GGkbC_gQ"
          />
        </div>
      </div>

      {/* Second row */}
      <div className="mt-[60px] mb-[80px] ml-[1vw] mr-[2vw] flex flex-row items-start">
        <div className="justify-center items-center ml-[4vw]">
          <div className="justify-center m-4 text-white"
          >
            <Title
              H="h2"
              Text={sectionAmil.titleAmil}
              TitleClassProps=""
            />
          </div>
          <div className="ml-[2vw]">
            <ImageAtomLocal
              imagesize={"px200x275"}
              alt="Amil"
              src={Amil1}
              border={""}
              ImageStyleProps={""}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 text-xs mt-[10vw] mr-[14vw] text-white
        ">
          <Text
            Style=""
            Text={sectionAmil.textAmil[0]}
            TextClassProps=""
          />
          <Text
            Style=""
            Text={sectionAmil.textAmil[1]}
            TextClassProps="mt-2"
          />
          <Text
            Style=""
            Text={sectionAmil.textAmil[2]}
            TextClassProps="mt-2"
          />
        </div>
      </div>

      {/* Third row */}
      <div className="mt-[60px] mb-[10px] ml-[2vw] mr-[2vw] 
        flex flex-row items-start"
      >
        <div className="ml-[6vw]">
          <ImageAtomLocal
            imagesize={"px325x200"}
            alt="Amil"
            src={Amil2}
            border={""}
            ImageStyleProps={""}
          />
        </div>
        <div className="flex-col flex-1 ml-4 mr-[3vw]">
          <div className="text-xs text-white m-1.5 mr-[4vw]">
            <Text
              Style=""
              Text={sectionAmil.textAmil[3]}
              TextClassProps=""
            />
          </div>
        </div>
      </div>

      {/* Fourth row */}
      <div className="mt-[10px] mb-[10px] mr-[6vw]
        flex flex-row items-start"
      >
        <div className="flex-col flex-1
          ml-4 text-xs text-white
        ">
          <div className="ml-[6vw] m-2">
            <Text
              Style=""
              Text={sectionAmil.textAmil[4]}
              TextClassProps=""
            />
          </div>
        </div>
        <ImageAtomLocal
            imagesize={"px325x200"}
            alt="Amil"
            src={Amil3}
            border={""}
            ImageStyleProps={""}
          />
      </div>

      {/* Fifth row */}
      <div className="mt-[10px] mb-[10px] ml-[2vw] mr-[2vw] 
        flex flex-row items-start"
      >
        <div className="ml-[6vw]">
          <ImageAtomLocal
            imagesize={"px325x275"}
            alt="Amil"
            src={Amil4}
            border={""}
            ImageStyleProps={""}
          />
        </div>
        <div className="flex-col flex-1
          ml-4 mr-[4vw] text-xs text-white
        ">
          <div className="m-2">
            <Text
              Style=""
              Text={sectionAmil.textAmil[5]}
              TextClassProps=""
            />
            <Text
              Style=""
              Text={sectionAmil.textAmil[6]}
              TextClassProps=""
            />
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className="flex flex-col justify-center">
        <section className="rounded-[20px]
          bg-[#215995] shadow-lg m-20 mb-[100px]"
        >
          <div className="flex flex-col m-10 text-white">
            <Title
              H={"h5"}
              Text={sectionAmil.titlePublications}
              TitleClassProps="text-justify mb-[20px]"
            />
            {sectionAmil.listPublications.map((publication, idx) => {
              return (
                <Text
                  Style="normalCardHome"
                  Text={publication}
                  TextClassProps="mt-[20px]"
                  key={idx}
                />
              )
            })}
          </div>
        </section>
      </div>
    </div>

    {/* Mobile */}
    <div className="grid justify-center items-center 
      bg-gradient-to-b from-[#000] to-[#2D5987]
      lg:hidden 
      md:hidden
    ">
      {/* First row */}
      <div className="mt-[80px] mb-[20px]">
        {/* First grid item */}
        <div className="flex justify-center items-center">
          <Video
            width={`310px`}
            height={`250px`}
            url="https://www.youtube.com/watch?v=od0GGkbC_gQ"
          />
        </div>
      </div>
      {/* Second row */}
      <div className="mt-[20px]">
        <div className="grid flex justify-center items-center">
         <div 
          className="flex justify-center items-center text-white m-10"
          >
            <Title
              H="h2"
              Text={sectionAmil.titleAmil}
              TitleClassProps=""
            />
          </div>
          <ImageAtomLocal
            imagesize={"px240x300"}
            alt="Amil"
            src={Amil1}
            border={""}
            ImageStyleProps={""}
          />
        </div>
        <div className="grid flex justify-center items-center
          text-xl mt-[20px] mx-10 my-8 text-white
        ">
          <Text
            Style="subtitle"
            Text={sectionAmil.textAmil[0]}
            TextClassProps=""
          />
          <Text
            Style="subtitle"
            Text={sectionAmil.textAmil[1]}
            TextClassProps=""
          />
          <Text
            Style="subtitle"
            Text={sectionAmil.textAmil[2]}
            TextClassProps=""
          />
        </div>
      </div>

      {/* Third row */}
      <div className="grid flex justify-center items-center">
        <div
          className="flex justify-center items-center"
        >
          <ImageAtomLocal
            imagesize={"px325x250"}
            alt="Amil"
            src={Amil2}
            border={""}
            ImageStyleProps={""}
          />
        </div>
        <div className="flex-col flex-1
          mx-10 my-8 text-xl text-white
        ">
          <Text
            Style="subtitle"
            Text={sectionAmil.textAmil[3]}
            TextClassProps=""
          />
        </div>
      </div>

      {/* Fourth row */}
      <div className="grid flex justify-center items-center">
        <div 
          className="flex justify-center items-center"
        >
          <ImageAtomLocal
            imagesize={"px325x250"}
            alt="Amil"
            src={Amil3}
            border={""}
            ImageStyleProps={""}
          />
        </div>
        <div className="flex-col flex-1
          mx-10 my-8 text-xl text-white
        ">
          <Text
            Style="subtitle"
            Text={sectionAmil.textAmil[4]}
            TextClassProps=""
          />
        </div>
      </div>

      {/* Fifth row */}
      <div className="grid flex justify-center items-center">
        <div 
          className="flex justify-center items-center"
        >
          <ImageAtomLocal
            imagesize={"px325x275"}
            alt="Amil"
            src={Amil4}
            border={""}
            ImageStyleProps={""}
          />
        </div>
        <div className="flex-col flex-1
          mx-10 my-8 text-xl text-white
        ">
          <Text
            Style="subtitle"
            Text={sectionAmil.textAmil[5]}
            TextClassProps=""
          />
          <Text
            Style="subtitle"
            Text={sectionAmil.textAmil[6]}
            TextClassProps=""
          />
        </div>
      </div>

      {/* Publications */}
      <section className="rounded-[50px]
        bg-[#215995] shadow-lg mt-[50px] mb-[50px] m-[20px]"
      >
        <div className="flex flex-col items-center text-center m-6 text-white">
          <Title
            H={"h3"}
            Text={sectionAmil.titlePublications}
            TitleClassProps="text-justify mb-[20px]"
          />
          {sectionAmil.listPublications.map((publication, idx) => {
            return (
              <Text
                Style="normalCardHome"
                Text={publication}
                TextClassProps="mt-[20px]"
                key={idx}
              />
            )
          })}
        </div>
      </section>

    </div>
    </>
  );
}