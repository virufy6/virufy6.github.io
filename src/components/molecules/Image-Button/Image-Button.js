import Button from "../../atoms/button/Button";
import ImageAtomLocal from "../../atoms/imageAtom/ImageAtomLocal";

export default function ButtonGroup({ size, type, path, label, border, imagesize, src, alt }) {

    return (
        <>
            <div>
                <ImageAtomLocal ImageStyleProps="" border={border} imagesize={imagesize} src={src} alt={alt}/>
            </div>
            <div>
                <Button type={type} size={size} path={path} label={label} />
            </div>
        </>
    );
}
