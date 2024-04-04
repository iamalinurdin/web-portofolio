import Image from "next/image";

export default function MainImageProject({source}) {
  return (
    <div className="relative w-full md:w-1/2 lg:w-full md:mx-auto h-[200px] md:h-[300px] lg:h-[400px]">
      <Image src={source} fill className="absolute rounded-xl" />
    </div>
  )
}