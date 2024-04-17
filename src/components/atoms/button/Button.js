import Link from "next/link";
import { ButtonType, ButtonSize } from "../../themes";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Button({ size, type, label, path, onClick = () => { } }) {

    return (
        <>

            <button onClick={onClick} className={`${ButtonType?.[type]} ${ButtonSize?.[size]}`}><Link href={path}>{label?.toUpperCase()}</Link></button>
        </>
    )
}