interface ImageProps {
  imgSrc: string;
}

const Image = ({ imgSrc }: ImageProps) => {
  return <img src={new URL(imgSrc, import.meta.url).href}></img>;
};

export default Image;
