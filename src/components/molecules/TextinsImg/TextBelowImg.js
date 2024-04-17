import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import Title from "~/components/atoms/Title/Title";

export default function TextBelowImg({
  sizeImg,
  borderImg,
  src,
  altImg,
  Text
}) {
  return (
    <div className="over overflow-hidden relative flex justify-center">
      <div className="">
        <ImageAtomLocal
          ImageStyleProps="w-[100vw]"
          imagesize={sizeImg}
          border={borderImg}
          src={src}
          alt={altImg}
        />
        <Title
          Text={Text}
          H="h2"
          TitleClassProps="
            flex
            justify-center
            items-center
            h-[188px]
            bg-[#3074DC]
            text-white
            text-center
          "
        />
      </div>
      

    </div>
  )
}