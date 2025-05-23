import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full max-h-[500px] max-w-[900px]", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1100}
      height={400}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          className="items-center flex justify-center"
          href={`/posts/${slug}`}
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
