import { useEffect, useState } from "react";
import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Link from "next/link";
import { useI18n } from "~/i18n";
export default function BlogCard() {

    const link1 = [
        { label: 'Read Here', route: '/es/DetailBlog' }
    ]
    const [isLoading, setLoading] = useState(false);
    const { blogListing: { cardItem } } = useI18n()


    useEffect(() => {
        if (!Array.isArray(cardItem)) {
            setLoading(true)
        }
    }, [cardItem])

    return (
        <div className="flex flex-col items-center">
            {isLoading ? <p className="text-center text-2xl">Loading...</p> : null}
            {!cardItem ? <p>No data</p> : null}
            {cardItem?.map(({ id, title, image, description, readMore }) => (
                <div key={id} className="flex flex-col lg:flex-row items-center justify-center max-w-[1300px] w-[100vw] mt-12 mb-8">
                    <div className="w-full lg:w-1/2 flex items-center justify-end mb-[20px]">
                        <ImageAtomLocal
                            imagesize="pr100"
                            border=""
                            src={image}
                            alt=""
                            ImageStyleProps=""
                        />
                    </div>
                    <div className="flex mt-2 lg:mt-0 w-full lg:w-2/5 px-[20px] lg:px-[0px] items-center flex-1">
                        <div className="w-full lg:items-start text-start flex flex-col gap-5 md:pl-7">
                            <TitleText
                                TitleSize="h1"
                                TitleLabel={title}
                                TextSize="normal"
                                TextLabel={description}
                                ContainerTitleProps=""
                                ContainerTextProps=""
                                TitleClassProps=""
                                TextClassProps=""
                            />
                            <Link href={`/Blog/${id}`} style={{ color: 'blue' }}>{readMore}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
