import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";

export default function CardLarge({
  CardsData,
  CardClassProps
}) {
  return (
    <div className="flex flex-wrap mb-4 text-center items-center max-w-[1440px] w-[100vw] justify-center mt-5">

      {CardsData?.map(({ route, name, text, id }) => (

        <div className={CardClassProps} key={id}>
          <div className="h-[100px] w-[100px] flex mr-2">
          <ImageAtomLocal
            border="none"
            src={route}
            alt="Imagen card"
            ImageStyleProps={""}
            imagesize={""}
          />
          </div>
          <div className="sm:w-[290px] md:w-[403px] lg:w-[403px] xl:w-[403px] text-left">
            <Title
              H="h4"
              Text={name}
              TitleClassProps={""}
            />
            <Text
              Style="small"
              Text={text}
              TextClassProps="mt-[4px]"
            />
          </div>
        </div>
      ))}

    </div>
  )
}
