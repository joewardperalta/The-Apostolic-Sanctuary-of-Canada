import Image from "next/image";

export function Card({ children, className }) {
  return <div className="card">{children}</div>;
}

export function CardImage({ src, alt }) {
  return (
    <div className="card-image mb-8 bg-[#333] rounded-md">
      <Image
        className="w-full h-full rounded-md"
        src={src}
        width={300}
        height={300}
        alt={alt}
      ></Image>
    </div>
  );
}

export function CardTitle({ children }) {
  return <h6 className="font-semibold text-xl text-[#333] mb-2">{children}</h6>;
}

export function CardDescription({ children }) {
  return <p className="text-[#333]">{children}</p>;
}
