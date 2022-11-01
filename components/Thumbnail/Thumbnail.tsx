import Image from "next/image";

type Props = {
  imgUrl: string;
};

const Thumbnail = ({imgUrl}: Props) => (
  <Image
    placeholder="blur"
    blurDataURL="/placeholder-image.jpeg"
    className="rounded-lg"
    object-fit="cover"
    src={imgUrl}
    alt="thumbnail"
    sizes="(max-width: 768px) 100vw, 768px"
    fill
  />
);

export default Thumbnail;