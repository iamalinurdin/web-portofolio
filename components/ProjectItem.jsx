import { Button, Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({name, link, image}) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none h-[300px] w-full relative">
      <Image
        alt="Woman listing to music"
        className="object-cover absolute top-0 bottom-0 left-0 right-0"
        src={image}
        fill
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{name}</p>
        <Button as={Link} href={link} className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Visit
        </Button>
      </CardFooter>
    </Card>
  )
}