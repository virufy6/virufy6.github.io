import Text from "~/components/atoms/Text/Text";
import ImageAtomLocal from "../../atoms/imageAtom/ImageAtomLocal";


export default function CardHomeTall({
	src,
	alt,
	textLabel,
	name,
	country,}) {

	return (
		<>
			<div className="bg-[#F3F4F6] flex flex-col items-center text-center rounded-[6px] w-[394px] h-[448px] sm:w-[294px] sm:h-[348px] p-[10px] sm:p-[20px]">
				<Text
					TextClassProps
					Text={textLabel}
					Style="small"
				/>
				<ImageAtomLocal 
					imagesize="px64"
					border="circular"
					src={src}
					ImageStyleProps="mt-3"
					alt={alt}
				/>
				<Text
					TextClassProps="mt-4"
					Text={name}
					Style="small"
				/>
				<Text
					TextClassProps="mt-2"
					Text={country}
					Style="small"
				/>
			</div>
		</>
	);
}
