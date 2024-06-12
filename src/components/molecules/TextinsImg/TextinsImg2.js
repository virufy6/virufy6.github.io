import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import Title from '~/components/atoms/Title/Title'

// this is used in the Our Supporters page.
// the only difference from original TextingsImg is <div className=" contrast-50 brightness-50">
export default function TextinsImg({ sizeImg, borderImg, src, altImg, Text }) {
  return (
    <div className="relative -top-24 flex justify-center">
      <ImageAtomLocal
        ImageStyleProps="object-cover w-full h-full max-h-[700px]"
        imagesize={sizeImg}
        border={borderImg}
        src={src}
        alt={altImg}
      />

      <Title
        Text={Text}
        H="h1"
        TitleClassProps="
					absolute top-[50%] 
					left-[50%] 
					translate-y-[-50%] 
					translate-x-[-50%]
					text-white
					text-center
          font-semibold
          pt-10
          text-xl"
      />
    </div>
  )
}
