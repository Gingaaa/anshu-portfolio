import Image from 'next/image';


interface ImageWithSizesProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}
export default function ImageWithSizes({ src, alt, width, height }: ImageWithSizesProps) {
    return (
        <div style={{ width: width, height: height, position: 'relative' }}>
            <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </div>
    );
}