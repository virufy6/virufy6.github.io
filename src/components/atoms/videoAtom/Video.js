import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function Video({ width, height, url}) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Esta lógica solo se ejecutará en el lado del cliente
        setIsClient(true);
    }, []);
    return (
        <>
          {isClient && (
                <ReactPlayer width={width} height={height} url={url} />
            )}
        </>
    )
}