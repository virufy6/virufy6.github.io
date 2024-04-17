import { ImageSize, ImageBorder } from "../../themes";
import Image from "next/image";

export default function ImageAtomLocal({ imagesize, alt, border, src, ImageStyleProps }) {

  return (
    <>
      <Image className={`${ImageBorder?.[border]} ${ImageSize?.[imagesize]} ${ImageStyleProps}`} src={src} width="0" height="0" alt={alt} />
    </>
  )
}