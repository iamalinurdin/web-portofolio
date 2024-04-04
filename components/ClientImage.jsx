import Image from "next/image";

export default function ClientImage({source, alt}) {
  return (
    <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
      <Image src={source} fill alt={alt} className="absolute object-contain" />
    </div>
  )
}