
import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"
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
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#000] to-[#2D5987]">
      <div className="m-10 mt-40">
        <Video
          width={`1000px`}
          height={`480px`}
          url="https://www.youtube.com/watch?v=od0GGkbC_gQ"
        />
      </div>
      <div className="flex flex-col justify-center items-center max-w-[1440px] h-[100%]">
        <div className="ml-[5vw] mt-[80px] flex flex-wrap flex-row items-start
          sm:flex-col sm:items-center
          md:flex-row md:items-end
          lg:flex-row lg:items-end
          xl:flex-row xl:items-end
        ">
          <div className="w-[438px] m-2
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
              imagesize={"pr80"}
              alt="Amil"
              src={Amil1}
              border={""}
              ImageStyleProps={""}
            />
          </div>
          <div className="flex-col flex-1 text-xl mr-[12vw] text-white
          ">
            <Text
              Style=""
              Text={sectionAmil.textAmil[0]}
              TextClassProps=""
            />

            <Text
              Style=""
              Text={sectionAmil.textAmil[1]}
              TextClassProps="mt-6"
            />

            <Text
              Style=""
              Text={sectionAmil.textAmil[2]}
              TextClassProps="mt-6"
            />
          </div>
        </div>
        <div className="ml-[4vw] mt-[20px] flex flex-wrap flex-row items-start
          sm:flex-col sm:items-center
          md:flex-row md:items-end
          lg:flex-row lg:items-end
          xl:flex-row xl:items-end
        ">
          <div
            className="mt-10"
          >
            <ImageAtomLocal
              imagesize={"px600"}
              alt="Amil"
              src={Amil2}
              border={""}
              ImageStyleProps={""}
            />
          </div>
          <div className="flex-col flex-1
            ml-2 mr-[6vw] text-xl text-white
          ">
            <div className="m-20">
              <Text
                Style=""
                Text={sectionAmil.textAmil[3]}
                TextClassProps="mt-4"
              />
            </div>
          </div>
        </div>
        <div className="ml-[5vw] mt-[20px] flex flex-wrap flex-row items-start
          sm:flex-col sm:items-center
          md:flex-row md:items-end
          lg:flex-row lg:items-end
          xl:flex-row xl:items-end
        ">
          <div className="flex sm:flex ml-2 mr-[6vw] text-xl text-white">
            <div className="m-6">
              <Text
                Style=""
                Text={sectionAmil.textAmil[4]}
                TextClassProps="mt-4"
              />
            </div>
            <ImageAtomLocal
              imagesize={"px600"}
              alt="Amil"
              src={Amil3}
              border={""}
              ImageStyleProps={""}
            />
          </div>
        </div>
        <div className="ml-[5vw] mt-[20px] flex flex-wrap flex-row items-start
          sm:flex-col sm:items-center
          md:flex-row md:items-end
          lg:flex-row lg:items-end
          xl:flex-row xl:items-end
        ">
          <div className="flex sm:flex ml-2 mr-[6vw] text-white">
            <ImageAtomLocal
              imagesize={"px650"}
              alt="Amil"
              src={Amil4}
              border={""}
              ImageStyleProps={""}
            />
            <div className="flex-col flex-1
            ml-2 mr-[6vw] text-xl text-white
            ">
              <div className="m-6">
                <Text
                  Style=""
                  Text={sectionAmil.textAmil[5]}
                  TextClassProps=""
                />
                <Text
                  Style=""
                  Text={sectionAmil.textAmil[6]}
                  TextClassProps="mt-6"
                />
              </div>
            </div>
          </div>
        </div>
        <section className={`rounded-[20px]
          bg-[#215995] shadow-lg m-20`}
        >
          <div className="m-10 text-white">
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
    </>
  );
}