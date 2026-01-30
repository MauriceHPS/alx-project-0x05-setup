import { GeneratedImageProps } from "@/interfaces";
import Image from "next/image";
import React from "react";

const ImageCard: React.FC<GeneratedImageProps> = ({
  imageUrl,
  prompt,
  width = "w-full",
  height = "h-40",
  action,
}) => {
  return (
    <>
      <div
        onClick={action}
        className={`relative ${width} ${height} overflow-hidden rounded-lg 
        cursor-pointer shadow-md hover:shadow-xl transition-shadow`}
      >
        <Image
          src={imageUrl}
          alt={prompt}
          className={`object-cover m-2`}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <h2 className={`${width ? "text-sm" : "text-xl"} font-semibold mt-2`}>
          Your Prompt
        </h2>
        <p
          className="absolute bottom-0 left-0 right-0 bg-black/50 
        p-2 text-white text-sm truncate"
        >
          {prompt}
        </p>
      </div>
    </>
  );
};

export default ImageCard;
