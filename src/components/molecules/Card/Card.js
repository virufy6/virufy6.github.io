import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";


export default function Card({
  CardsData,
  CardClassProps
}) {

  return (
    <div className="flex flex-wrap mb-4 text-center items-center w-[100%] justify-center mt-5">

      {CardsData?.map(({ route, name, text, subtitle, id }) => (

        <div className={CardClassProps} key={id}>
          <ImageAtomLocal
            imagesize="pr30"
            border="circular"
            src={route}
            alt="Imagen card"
            ImageStyleProps="mt-3"
          />

          {
            name ? <Title
              H="h4"
              Text={name}
              TitleClassProps={"mt-[24px]"}
            /> : null
          }

          <Text
            Style="subtitle"
            Text={subtitle}
            TextClassProps=""
          />
          <Text
            Style="small"
            Text={text}
            TextClassProps="ml-[50px] mr-[50px] mt-[16px] mb-4"
          />
        </div>
      ))}

    </div>
  )
}
